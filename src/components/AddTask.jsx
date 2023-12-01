import "./AddTask.css";

// Functional Component
function AddTask() {
  return (
    <div className="addTask_container">
      <h1>Add Task</h1>
      <label>Add new task: </label>
      <input type="text" />
      <button>Add</button>
    </div>
  );
}

export default AddTask;
