import "./PendingTasks.css";
import TaskPending from "./TaskPending";

function PendingTasks() {
  return (
    <div className="pendingTask_container">
      <h2>Pending Tasks</h2>
      <TaskPending
        title="Going to admission office"
        // JSX Slot --> Passing JSX code via attribute props
        // - For multiple JSX elements, use <div> or any other element as a wrapper
        createDate={
          <span>
            <span>20</span>
            <span>.10</span>
            <span>.2023</span>
          </span>
        }
      />
      <TaskPending
        title="Visit library"
        // JSX Slot --> Passing JSX code via attribute props
        createDate={<span>16.10.2023</span>}
      />
      <TaskPending
        title="Attending seminar"
        // JSX Slot --> Passing JSX code via attribute props
        createDate={<span>19.10.2023</span>}
      />
    </div>
  );
}

export default PendingTasks;
