// Functional Component
function TaskPending(props) {
  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>
      <button>done</button>
      <button>delete</button>
    </div>
  );
}

export default TaskPending;
