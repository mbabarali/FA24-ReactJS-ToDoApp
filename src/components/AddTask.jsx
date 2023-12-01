import ShowMessage from "./ShowMessage";

import "./AddTask.css";

// Functional Component
function AddTask() {
  let add = false;
  let message = "";

  function handleAdd() {
    add = true;
    console.log("After add button pressesd --> add = ", add);
    message = (
      <ShowMessage>
        <i>Task Added!!!</i>
      </ShowMessage>
    );
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

      {/* Do not update UI with direct/normal variables */}
      <button onClick={handleAdd} disabled={add}>
        Add
      </button>

      {/* Do not update UI with direct/normal variables */}
      {message}
    </div>
  );
}

export default AddTask;
