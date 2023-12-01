// Functional Component
function TaskCompleted(props) {
  let trash = false;
  function handleDelete() {
    trash = true;
    console.log("After button pressed --> trash = ", trash);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* Do not update UI with direct/normal variables */}
      <button onClick={handleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
