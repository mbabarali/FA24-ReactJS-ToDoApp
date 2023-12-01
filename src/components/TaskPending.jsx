// Stateless Functional Component
function TaskPending(props) {
  const { id, createDate, title } = props;
  const { onDone, onDelete } = props;

  return (
    <div>
      <span className="taskItem">{createDate}</span>
      <span className="taskItem">{title}</span>

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
