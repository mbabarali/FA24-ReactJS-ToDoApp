import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

// Functional Component
function ManageTasks() {
  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks></PendingTasks>
      <CompletedTasks></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
