// Stateless Functional Component
function TaskPending(props) {
  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Anonymous Function (An anonymous function)
        onClick={function () {
          props.onDone(props.id);
        }}
      >
        done
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Arrow Function (An anonymous function)
        onClick={() => props.onDelete(props.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TaskPending;
