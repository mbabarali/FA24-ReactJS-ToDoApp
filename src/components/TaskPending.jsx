// Stateless Functional Component
function TaskPending(props) {
  const { id, createDate, title, className } = props;
  const { onDone, onDelete, onInProgress } = props;

  return (
    <div className={className}>
      <span className="taskItem">{createDate}</span>
      <span className="taskItem">{title}</span>

      <button
        // Arrow Function (An anonymous function)
        onClick={() => onInProgress(id)}
      >
        progressing
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Anonymous Function (An anonymous function)
        onClick={function () {
          onDone(id);
        }}
      >
        done
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Arrow Function (An anonymous function)
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </div>
  );
}

export default TaskPending;
