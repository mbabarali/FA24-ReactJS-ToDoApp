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

        // By default, event will bubble up through parent chain upto the top most parent 'windows',
        // via all elements whihc have event listener configured for the same event, 'onClick'
        onClick={(event) => {
          console.log("[onClick]: <button> ");
          event.stopPropagation();
          onInProgress(id);
        }}
        // onClickCapture={() => console.log("[onClick]: <button>")}
      >
        progressing
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Anonymous Function (An anonymous function)
        onClick={function (event) {
          event.stopPropagation();
          onDone(id);
        }}
      >
        done
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Arrow Function (An anonymous function)
        onClick={(event) => {
          event.stopPropagation();
          onDelete(id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default TaskPending;
