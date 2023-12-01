import ShowMessage from "./ShowMessage";

import { useState } from "react"; //React Hook

import "./AddTask.css";

// Stateful Functional Component
function AddTask() {
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

  function handleAdd() {
    // add = true;

    /* Updating state variable obtained from the react hook */
    setAdd(true);

    // [IMPORTANT]
    // The "add" is not updated yet. See Browser Console (console.log message)
    // It will update on next rendering of this component by React.js
    console.log("After add button pressesd --> add = ", add);

    // message = (
    //   <ShowMessage>
    //     <i>Task Added!!!</i>
    //   </ShowMessage>
    // );
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
      <label>Add new task: </label>
      <input type="text" />

      {/* Updating UI with state variable --> "add" */}
      <button onClick={handleAdd} disabled={add}>
        Add
      </button>

      {/* Updating UI depending on state variable --> "add" */}
      {message}
    </div>
  );
}

export default AddTask;
