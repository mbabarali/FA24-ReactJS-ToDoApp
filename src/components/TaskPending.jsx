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

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button onClick={doHandleDone}>done</button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button onClick={doHandleDelete}>delete</button>
    </div>
  );
}

export default TaskPending;
