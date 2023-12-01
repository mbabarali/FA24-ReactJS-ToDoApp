import "./AddTask.css";
import ShowMessage from "./ShowMessage";

import { useState } from "react"; //React Hook
import { useRef } from "react"; //React Hook

function AddTask({ onAdd }) {
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

  const [showContent, setShowContent] = useState(true);

  let message = "";
  const taskTitle = useRef();

  // Legacy Anonymous Function (An anonymous function)
  const handleInputChange = function () {
    setAdd(false);
  };

  // Arrow Function (An anonymous function)
  const handleAdd = () => {
    onAdd(taskTitle.current.value);

    /* Updating state variable obtained from the react hook */
    setAdd(true);

    // --- CLEAR Ref taskTitle.current.value;
    //     Must clear input field using taskTitle.current.value = "";
    //     so that input field shall get a fresh value from the
    //     user on next task entry
    taskTitle.current.value = "";
  };

  function toggleContentDisplay() {
    // setShowContent(!showContent); // Approach 01: Strongly NOT Recommended
    // setShowContent(showContent?false:true); // Approach 02: Strongly NOT Recommended

    setShowContent((currentState) => !currentState); // Approach 03: Use of anonymous function is Strongly RECOMMENDED
    // setShowContent(function (currentState) { return !currentState}); // Approach 04: Use of anonymous function is Strongly RECOMMENDED
  }

  // ========= Conditional Rendering =========
  // ------------- with if-else --------------
  // if (add) {
  //   message = (
  //     <ShowMessage>
  //       <i>Task Added Successfully!</i>
  //     </ShowMessage>
  //   );
  // } else {
  //   message = (
  //     <ShowMessage>
  //       <small>Please add new task ...</small>
  //     </ShowMessage>
  //   );
  // }

  // ========= Conditional Rendering =========
  // ------ with ternary operator ?: ---------
  // message = add ? (
  //   <ShowMessage>
  //     <i>Task Added Successfully!</i>
  //   </ShowMessage>
  // ) : (
  //   <ShowMessage>
  //     <small>Please add new task ...</small>
  //   </ShowMessage>
  // );

  // ========= Conditional Rendering =========
  // ---- with logical operators && or || ----
  // message = (
  //   <ShowMessage>
  //     <small>Please add new task ...</small>
  //   </ShowMessage>
  // );
  // let message1 = add && (
  //   <ShowMessage>
  //     <i>Task Added Successfully!</i>
  //   </ShowMessage>
  // );
  // message = message1 || message;
  // // --- Above expression is simplified below ---
  // message = (add && (
  //   <ShowMessage>
  //     <i>Task Added Successfully!</i>
  //   </ShowMessage>
  // )) || (
  //   <ShowMessage>
  //     <small>Please add new task ...</small>
  //   </ShowMessage>
  // );

  if (add) {
    message = (
      <ShowMessage>
        <i>Task Added Successfully!</i>
      </ShowMessage>
    );
  } else {
    message = (
      <ShowMessage>
        {/* Two-Way Binding of 'taskTitle' not possible when it is a ref: 
        -- 'taskTitle' is not a state hence any change in its value can not initiate re-rendering of the component
        -- Although, two-way binding is not possibe with refs, the refs can replace unnecessary states (i.e. the states which do not update or control the UI) 
        -- Refs can not be used in two-way binding because they do not control or update UI when their value change.
         */}
        {/*
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
        */}

        {/* <small>{taskTitle ?? "Please add new task ..."}</small> */}
        {/* <small>{taskTitle ? taskTitle : "Please add new task ..."}</small> */}

        {/* {taskTitle ?? <small>Please add new task ...</small>} */}
        {/* {taskTitle ? taskTitle : <small>Please add new task ...</small>} */}

        <small>Please add new task ...</small>
      </ShowMessage>
    );
  }

  return (
    <div className="addTask_container">
      <h1 onClick={toggleContentDisplay}>Add Task</h1>
      {showContent && (
        <div>
          <label htmlFor="taskField">Add new task: </label>
          {/* Uncontrolled Input: When value is NOT controlled by React state */}
          <input
            ref={taskTitle}
            type="text"
            id="taskField"
            onChange={handleInputChange}
            // Two-Way Binding of 'taskTitle' not pssible as 'taskTitle' is not state hence any change in its value can not initiate re-rendering of the component
            // value={taskTitle}
          />
          <button onClick={handleAdd}>Add</button>
          {message}
        </div>
      )}
    </div>
  );
}

export default AddTask;
