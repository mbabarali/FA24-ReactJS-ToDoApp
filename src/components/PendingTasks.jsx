import TaskPending from "./TaskPending";

import "./PendingTasks.css";

// Functional Component
function PendingTasks() {
  return (
    <div className="pendingTask_container">
      <h2>Pending Tasks</h2>
      {/* Each component is a separate instance created by React */}
      <TaskPending title="Going to admission office" createDate="20.10.2023" />
      <TaskPending title="Visit library" createDate="16.10.2023" />
      <TaskPending title="Attending seminar" createDate="19.10.2023" />
    </div>
  );
}

export default PendingTasks;
