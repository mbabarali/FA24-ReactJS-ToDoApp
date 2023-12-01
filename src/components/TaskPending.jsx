// Stateless Functional Component
function TaskPending(props) {
  function doHandleDone() {
    props.onDone(props.id);
  }

  function doHandleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* UI unchanged onClick as no change in state variable here, or in any of its incestor */}
      <button onClick={doHandleDone}>done</button>

      {/* UI unchanged onClick as no change in state variable here, or in any of its incestor */}
      <button onClick={doHandleDelete}>delete</button>
    </div>
  );
}

export default TaskPending;
