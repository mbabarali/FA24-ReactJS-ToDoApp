import TaskCompleted from "./TaskCompleted";

import "./CompletedTasks.css";

// Functional Component
function CompletedTasks() {
  return (
    <div className="completedTask_container">
      <h1>Completed Tasks</h1>
      {/* Each component is a separate instance created by React */}
      <TaskCompleted />
      <TaskCompleted />
      <TaskCompleted />

      {/* <div>
        <span className="taskItem"> Taking breakfast</span>
        <button>delete</button>
      </div>
      <div>
        <span className="taskItem">Meet batch advisor</span>
        <button>delete</button>
      </div>
      <div>
        <span className="taskItem">Community service</span>
        <button>delete</button>
      </div> */}
    </div>
  );
}

export default CompletedTasks;
