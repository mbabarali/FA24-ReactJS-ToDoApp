import TaskCompleted from "./TaskCompleted";

import "./CompletedTasks.css";

// Functional Component
function CompletedTasks() {
  return (
    <div className="completedTask_container">
      <h2>Completed Tasks</h2>
      {/* Each component is a separate instance created by React */}
      <TaskCompleted title="Taking breakfast" />
      <TaskCompleted title="Meet batch advisor" />
      <TaskCompleted title="Community service" />
    </div>
  );
}

export default CompletedTasks;
