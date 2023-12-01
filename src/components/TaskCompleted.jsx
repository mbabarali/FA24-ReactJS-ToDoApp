// Stateless Functional Component
function TaskCompleted(props) {
  function doHandleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button onClick={doHandleDelete}>delete</button>
    </div>
  );
}

export default TaskCompleted;
