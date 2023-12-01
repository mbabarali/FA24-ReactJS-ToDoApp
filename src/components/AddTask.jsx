import "./AddTask.css";
import ShowMessage from "./ShowMessage";
import { useState } from "react"; //React Hook

function AddTask(props) {
  /*
    React Hooks (Hook fucntions) 
    - MUST be called within react components.
    - MUST be called within react hook/ custom hook.
    - MUST be called at the top of the components before any other nested block.
  */

  // Following line returns reference to the new variable when the component (AddTask)
  // is rendered for the first time. On every re-rendering of the component (AddTask),
  // the same reference will be returned without any change in its stored value at the
  // time of re-rendering.
  let arr = useState(false);
  // console.log("Array against state variable ---> ", arr);

  // let add = false;
  let add = arr[0];
  let setAdd = arr[1];

  let message = "";
  const [taskTitle, setTaskTitle] = useState("");

  function handleInputChange(event) {
    setTaskTitle(event.target.value);
    setAdd(false);

    console.log(
      "Input changed: (Old value, New value) = ",
      taskTitle,
      event.target.value
    );
  }

  function handleAdd() {
    props.onAdd(taskTitle);

    /* Updating state variable obtained from the react hook */
    setAdd(true);

    // -------------------------------------------------------
    // Logic with two-way binding without direct access or the
    // involvement of DOM element (manipulating the <input> element)
    // -------------------------------------------------------

    // --- CLEAR STATE using setTaskTitle("");
    //     Must clear the input state, 'taskTitle' using
    //     'setTaskTitle()', otherwise clicking "Add" button
    //     will add the new task even if the input field is cleared
    //     using inputField[0].value = ""
    setTaskTitle(""); // Must Clear input state
  }

  if (add) {
    message = (
      <ShowMessage>
        <i>Task Added Successfully!</i>
      </ShowMessage>
    );
  } else {
    message = (
      <ShowMessage>
        {/* Two-Way Binding of 'taskTitle' */}
        {taskTitle ? (
          <div>
            <span className="taskItem">
              {new Date().toLocaleDateString("de-DE")}
            </span>
            <span className="taskItem">{taskTitle}</span>
          </div>
        ) : (
          <small>Please add new task ...</small>
        )}

        {/* <small>{taskTitle ?? "Please add new task ..."}</small> */}
        {/* <small>{taskTitle ? taskTitle : "Please add new task ..."}</small> */}

        {/* {taskTitle ?? <small>Please add new task ...</small>} */}
        {/* {taskTitle ? taskTitle : <small>Please add new task ...</small>} */}

        {/* <small>Please add new task ...</small> */}
      </ShowMessage>
    );
  }

  return (
    <div className="addTask_container">
      <h1>Add Task</h1>
      <label htmlFor="taskField">Add new task: </label>
      {/* Controlled Input: When value is controlled by React state */}
      <input
        type="text"
        id="taskField"
        onChange={handleInputChange}
        // Two-Way Binding of 'taskTitle'
        value={taskTitle}
      />
      <button onClick={handleAdd}>Add</button>
      {message}
    </div>
  );
}

export default AddTask;
