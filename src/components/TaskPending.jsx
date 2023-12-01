// Functional Component
function TaskPending(props) {
  let done = false;
  let trash = false;

  function handleDone() {
    done = true;
    console.log("After done button pressed --> done = ", done);
  }

  function handleDelete() {
    trash = true;
    console.log("After delete button pressed --> trash = ", trash);
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* Do not update UI with direct/normal variables */}
      <button onClick={handleDone} disabled={done}>
        done
      </button>

      {/* Do not update UI with direct/normal variables */}
      <button onClick={handleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskPending;
