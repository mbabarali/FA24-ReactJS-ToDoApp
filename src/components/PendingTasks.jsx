import "./PendingTasks.css";

// Functional Component
function PendingTasks() {
  return (
    <div className="pendingTask_container">
      <h1>Pending Tasks</h1>
      <div>
        <span className="taskItem">20.10.2023</span>
        <span className="taskItem">Going to admission office</span>
        <button>done</button>
        <button>delete</button>
      </div>
      <div>
        <span className="taskItem">20.10.2023</span>
        <span className="taskItem">Going to admission office</span>
        <button>done</button>
        <button>delete</button>
      </div>
      <div>
        <span className="taskItem">19.10.2023</span>
        <span className="taskItem"> Attending seminar</span>
        <button>done</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default PendingTasks;
