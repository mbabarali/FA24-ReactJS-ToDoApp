import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import CompletedTasks from "./components/CompletedTasks";

// Functional Component
function App() {
  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <div>
      <h1>ToDo Application</h1>
      <AddTask></AddTask>
      <PendingTasks></PendingTasks>
      <CompletedTasks></CompletedTasks>
    </div>
  );
}

export default App;
