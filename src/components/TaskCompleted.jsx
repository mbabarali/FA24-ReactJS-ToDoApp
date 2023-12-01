// Stateless Functional Component
function TaskCompleted(props) {
  const { id, title } = props;
  const { onDelete } = props;

  return (
    <div>
      <span className="taskItem">{title}</span>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Named Function (A named function)
        onClick={function doHandleDelete() {
          onDelete(id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
