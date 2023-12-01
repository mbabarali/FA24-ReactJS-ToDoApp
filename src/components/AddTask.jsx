import ShowMessage from "./ShowMessage";

import { useState } from "react"; //React Hook

import "./AddTask.css";

// Stateful Functional Component
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
  let taskTitle = "";

  function handleInputChange(event) {
    setAdd(false);
    console.log("Input changed to ", event.target.value);
  }

  function handleAdd() {
    // Directly accessing DOM for input element
    const inputField = document.getElementsByTagName("input");
    taskTitle = inputField[0].value;
    props.onAdd(taskTitle);

    /* Updating state variable obtained from the react hook */
    setAdd(true);

    // --- CLEAR VIEW using inputField[0].value = "";
    //     Must clear input field using inputField[0].value = "";
    //     so that input field shall get a fresh value from the
    //     user on next task entry
    inputField[0].value = ""; // Clear input field
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
        <small>Please add new task ...</small>
      </ShowMessage>
    );
  }

  return (
    <div className="addTask_container">
      <h1>Add Task</h1>
      <label htmlFor="taskField">Add new task: </label>
      <input type="text" id="taskField" onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
      {message}
    </div>
  );
}

export default AddTask;
