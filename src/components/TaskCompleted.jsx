// Stateless Functional Component
function TaskCompleted(props) {
  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Named Function (A named function)
        onClick={function doHandleDelete() {
          props.onDelete(props.id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
