import "./CompletedTasks.css";

// Functional Component
function CompletedTasks() {
  return (
    <div className="completedTask_container">
      <h1>Completed Tasks</h1>
      <div>
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
      </div>
    </div>
  );
}

export default CompletedTasks;
