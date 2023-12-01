// Stateless Functional Component
function TaskCompleted(props) {
  function doHandleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* UI unchanged onClick as no change in state variable here, or in any of its incestor */}
      <button onClick={doHandleDelete}>delete</button>
    </div>
  );
}

export default TaskCompleted;
