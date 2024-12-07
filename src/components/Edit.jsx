import { useContext, useState } from "react";
// import { useEffect } from "react";
import TaskListContext from "../store/taskList-context";

// Functional Component
function Edit({ id }) {
  const ctx = useContext(TaskListContext);

  // [BETTER SOLUTION with Conditional rendering mechanism]
  //  - Conditional rendering with state for synchronous code
  //  - Synchronous side effect (useState or useReducer)
  // ---- [SOLUTION-PROBLEM-ILR] ------------------------------
  //     *  Conditional rendering mechanism
  //     *  useEffect Hook
  // ---------------------------------------------------------
  const task = getTaskById(id);
  // Passing reference, disregards mutability
  const [taskToEdit, setTaskToEdit] = useState(task); // Now we can call setTaskToEdit function in asynchronous code such as event handlers without creating infinite renders

  function getTaskById(id) {
    let foundElements = ctx.taskList.filter((obj) => {
      return id === obj.id;
    });
    return foundElements.length !== 1 ? undefined : foundElements[0];
  }

  // ---- [PROBLEM-ILR]: Infinite loop of rendering (ILR) ----
  // ---------------------------------------------------------
  // const task = getTaskById(id);
  // // task && setTaskToEdit(task); // Passing reference, disregards immutability
  // task && setTaskToEdit({ ...task }); // Regards immutability

  // [BAD SOLUTION with useEffect for synchronous code]
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
  // // useEffect(effect function, dependencies);
  // useEffect(() => {
  //   // Synchronous side effect
  //   console.log("  useEffect(() => {})");
  //   const task = getTaskById(id);
  //   // task && setTaskToEdit(task); // Passing reference, disregards mutability
  //   task && setTaskToEdit({ ...task }); // Regards mutability
  // }, []); // With empty dependency array [Single execution]
  // // }); // Without dependency array [Infinite loop of rendering]

  console.log("function Edit({ id })");

  const renderJsx = (
    <>
      <h1>Edit Task {id}</h1>

      <div>
        <strong style={{ color: "green" }}>[State] </strong>
        {taskToEdit ? JSON.stringify(taskToEdit) : undefined}
      </div>

      <div>
        <strong style={{ color: "blue" }}>[Local Variable] </strong>
        {/* {task ? Object.values(task) : undefined} */}
        {task ? JSON.stringify(task) : undefined}
      </div>
    </>
  );

  return renderJsx;
}

export default Edit;
