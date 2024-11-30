import AddTask from "./components/AddTask";
import ManageTasks from "./components/ManageTasks";

import "./App.css";

import TaskListProvider from "./store/TaskListProvider";

// Stateful Functional Component
function App() {
  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <TaskListProvider>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask></AddTask>
        <ManageTasks></ManageTasks>
      </div>
    </TaskListProvider>
  );
}

export default App;
