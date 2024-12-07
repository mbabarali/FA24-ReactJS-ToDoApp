import { useContext, useState } from "react";
import { useReducer } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import TaskListContext from "../store/taskList-context";
import "./Edit.css";

function taskToEditReducer(currentState, action) {
  const { type, payload } = action;

  console.log(action);
  switch (type) {
    case "TASK": {
      // ******** Approach 01 ********
      // // [STEP-1] Create copy // Shallow copy
      // const copyState = { ...currentState };
      // // [STEP-2] Update desired value(s) in copy
      // copyState.createDate = payload.createDate;
      // copyState.title = payload.title;
      // copyState.done = payload.done;
      // copyState.trash = payload.trash;
      // // [STEP-3] Return updated copy
      // return copyState;

      // ******** Approach 02 ********
      // return {
      //   // [STEP-1] Create copy // Shallow copy
      //   ...currentState,
      //   // [STEP-2] Update desired value(s) in copy
      //   id: payload.id,
      //   createDate: payload.createDate,
      //   title: payload.title,
      //   done: payload.done,
      //   trash: payload.trash,
      // }; // [STEP-3] Return updated copy

      // ******** Approach 03 ********
      return {
        // [STEP-1] Create copy // Shallow copy
        ...currentState,
        // [STEP-2] Update desired value(s) in copy
        ...action.payload,
      }; // [STEP-3] Return updated copy
    }
    // break;
    case "PROPERTY":
      // ******** Approach 02 ********
      return {
        ...currentState, // [STEP-1] Create copy // Shallow copy
        [payload.propertyName]: payload.propertyValue, // [STEP-2] Update desired value(s) in copy
      };
    // break;
    default:
      // return {
      //   ...currentState, // [STEP-1] Create copy // Shallow copy
      //   // No change (Retrun copy as it is!). // [STEP-2] Update desired value(s) in copy
      // }; // [STEP-3] Return updated copy

      return currentState; // No change (Retrun copy as it is!)
    // break;
  }

  // return currentState; // No change (Retrun copy as it is!)
}

// Functional Component
function Edit({ id }) {
  const ctx = useContext(TaskListContext);

  const [IsDateEdit, setIsDateEdit] = useState(false);

  // [BETTER SOLUTION with Conditional rendering mechanism]
  //  - Conditional rendering with state for synchronous code
  //  - Synchronous side effect (useState or useReducer)
  // ---- [SOLUTION-PROBLEM-ILR] ------------------------------
  //     *  Conditional rendering mechanism
  //     *  useEffect Hook
  // ---------------------------------------------------------
  const task = getTaskById(id);
  // Passing reference, disregards immutability
  // const [taskToEdit, setTaskToEdit] = useState(task); // Now we can call setTaskToEdit function in asynchronous code such as event handlers without creating infinite renders
  const [taskToEdit, dispatchTaskToEdit] = useReducer(taskToEditReducer, task); // Now we can call dispatchTaskToEdit function in asynchronous code such as event handlers without creating infinite renders

  /**
   * [PROBLEM-REMOUNT] On Clicking various "edit" buttons on 'baseURL/user/schedueld-tasks/:taskId' page (Update page):
   * [PROBLEM-REMOUNT]  - State will not destroy/recreate due to no change in placement of Edit, eventually same DOM tree.
   * [PROBLEM-REMOUNT]  - State will be kept due to no change in placement of Edit, eventually same DOM tree.
   */

  function getTaskById(id) {
    let foundElements = ctx.taskList.filter((obj) => {
      return id === obj.id;
    });
    return foundElements.length !== 1 ? undefined : foundElements[0];
  }

  // ---- [PROBLEM-ILR]: Infinite loop of rendering (ILR) ----
  // ---------------------------------------------------------
  // const task = getTaskById(id);
  // // // task && setTaskToEdit(task); // Passing reference, disregards immutability
  // // task && setTaskToEdit({ ...task }); // Regards immutability
  // task &&
  //   dispatchTaskToEdit({
  //     type: "TASK",
  //     payload: task,
  //   });

  // [BAD SOLUTIONS with useEffect for synchronous code]
  // ---- [SOLUTION-PROBLEM-REMOUNT] --------------------------
  // ---- [SOLUTION-PROBLEM-ILR] ------------------------------
  //     *  Conditional rendering mechanism
  //     *  useEffect Hook
  // ---------------------------------------------------------
  /**
   * NOTE:
   * The use of "useEffect" with synchronous code is not actually recommeded!
   *
   * [REACT.DEV] You don’t need Effects to transform data for rendering.
   * [REACT.DEV] Avoid resetting state on prop change in an Effect
   * [REACT.DEV] Avoid: Adjusting state on prop change in an Effect
   */
  // useEffect(effect function, dependencies);
  // useEffect(() => {
  //   // Synchronous side effect
  //   console.log("  useEffect(() => {})");
  //   const task = getTaskById(id);
  //   // // task && setTaskToEdit(task); // Passing reference, disregards immutability
  //   // task && setTaskToEdit({ ...task }); // Regards immutability
  //   task &&
  //     dispatchTaskToEdit({
  //       type: "TASK",
  //       payload: task,
  //     });
  // }, [id]); // With relavent dependencies in array [Selective execution]
  // }, [id, getTaskById]); // With all dependencies in array [Selective execution: Here, infinite loop of rendering]
  // }, []); // With empty dependency array [Single execution]
  // // }); // Without dependency array [Infinite loop of rendering]

  console.log("function Edit({ id })");

  function editDate() {
    setIsDateEdit((currentState) => (currentState = !currentState));
  }

  // Controlled form/rendering
  function onValueChange(propertyOfTask, event) {
    switch (propertyOfTask) {
      case "createDate":
      case "title":
        dispatchTaskToEdit({
          type: "PROPERTY",
          payload: {
            propertyName: propertyOfTask,
            propertyValue: event.target.value,
          },
        });
        break;
      case "done":
      case "trash":
        dispatchTaskToEdit({
          type: "PROPERTY",
          payload: {
            propertyName: propertyOfTask,
            propertyValue: event.target.value === "1",
          },
        });
        break;
      default:
        console.log("Unexpected Value");
        return;
    }
  }

  // const taskDate = new Date(
  //   taskToEdit.createDate.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1")
  // )
  //   .toISOString()
  //   .substring(0, 10); // "20.10.2023" ==> "2023-10-20"

  // [SOLUTION-PROBLEM-PROPS] It uses existing state/s.
  const taskEditForm = (
    <form className="editForm">
      <label className="editItem">
        id:
        <span>{taskToEdit.id}</span>
      </label>

      <label className="editItem">
        Date:
        <input
          onFocus={editDate}
          onBlur={editDate}
          onChange={(event) => onValueChange("createDate", event)}
          type={IsDateEdit ? "date" : "text"}
          // defaultValue={taskDate}
          // value={taskDate}
          value={
            (() =>
              new Date(
                taskToEdit.createDate.replace(
                  /(\d{2})\.(\d{2})\.(\d{4})/,
                  "$3-$2-$1"
                )
              )
                .toISOString()
                .substring(0, 10))() // "20.10.2023" ==> "2023-10-20"
          }
        />
        {/*         
        {IsDateEdit ? (
          <input
            onFocus={editDate}
            onBlur={editDate}
            onChange={(event) => onValueChange("createDate", event)}
            type="date"
            // defaultValue={taskDate}
            // value={taskDate}
            value={(() => {
              console.log("- IIFE for date -");

              return new Date(
                taskToEdit.createDate.replace(
                  /(\d{2})\.(\d{2})\.(\d{4})/,
                  "$3-$2-$1"
                )
              )
                .toISOString()
                .substring(0, 10); // "20.10.2023" ==> "2023-10-20"
            })()}
          />
        ) : (
          <input
            type="text"
            onFocus={editDate}
            onBlur={editDate}
            onChange={(event) => onValueChange("createDate", event)}
            value={taskToEdit.createDate}
          />
        )}
        */}
      </label>

      <label className="editItem">
        Task:
        <input
          type="text"
          onChange={(event) => onValueChange("title", event)}
          // defaultValue={taskToEdit.title}
          value={taskToEdit.title}
        />
      </label>

      <label className="editItem">
        Completed:
        <select
          onChange={(event) => onValueChange("done", event)}
          defaultValue={taskToEdit.done ? "1" : "0"}
        >
          <option
            value="1" // selected={taskToEdit.done && "selected"}
          >
            true
          </option>
          <option
            value="0" // selected={!taskToEdit.done || "selected"}
          >
            false
          </option>
        </select>
      </label>

      <label className="editItem">
        Trashed:
        <select
          onChange={(event) => onValueChange("trash", event)}
          defaultValue={taskToEdit.trash ? "1" : "0"}
        >
          <option
            value="1" // selected={taskToEdit.trash && "selected"}
          >
            true
          </option>
          <option
            value="0" // selected={!taskToEdit.trash || "selected"}
          >
            false
          </option>
        </select>
      </label>

      <button type="submit" className="editSubmitButton">
        Update
      </button>

      <div className="btnContainter">
        <Link
          to={".."}
          className="editBackLink"
          relative="path"
          // relative="route" // [Default]
        >
          Back
        </Link>

        <Link
          to={".."}
          className="editHomeLink"
          // relative="path"
          relative="route" // [Default]
        >
          Home
        </Link>
      </div>
    </form>
  );

  const renderJsx = (
    <div className="editContainer">
      <h1>Edit Task {id}</h1>
      {taskEditForm}

      <div>
        <strong style={{ color: "green" }}>[State] </strong>
        {taskToEdit ? JSON.stringify(taskToEdit) : undefined}
      </div>

      <div>
        <strong style={{ color: "blue" }}>[Local Variable] </strong>
        {/* {task ? Object.values(task) : undefined} */}
        {task ? JSON.stringify(task) : undefined}
      </div>
    </div>
  );

  return renderJsx;
}

export default Edit;
