// Functional Component
function TaskCompleted(props) {
  return (
    <div>
      <span className="taskItem">{props.title}</span>
      <button>delete</button>
    </div>
  );
}

export default TaskCompleted;
