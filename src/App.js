function App() {
  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <div>
      <h1>ToDo Application</h1>

      <h1>Add Task</h1>
      <label>Add new task: </label>
      <input type="text" />
      <button>Add</button>

      <h1>Pending Tasks</h1>
      <div>
        <span>20.10.2023</span>
        <span>Going to admission office</span>
        <button>done</button>
        <button>delete</button>
      </div>
      <div>
        <span>20.10.2023</span>
        <span>Going to admission office</span>
        <button>done</button>
        <button>delete</button>
      </div>
      <div>
        <span>19.10.2023</span>
        <span>Attending seminar</span>
        <button>done</button>
        <button>delete</button>
      </div>

      <h1>Completed Tasks</h1>
      <div>
        <span>Taking breakfast</span>
        <button>delete</button>
      </div>
      <div>
        <span>Meet batch advisor</span>
        <button>delete</button>
      </div>
      <div>
        <span>Community service</span>
        <button>delete</button>
      </div>
    </div>
  );
}

export default App;
