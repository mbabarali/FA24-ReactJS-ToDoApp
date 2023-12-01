import { useState } from "react";

// Stateful Functional Component
function TaskPending(props) {
  let [done, setDone] = useState(false);
  let [trash, setTrash] = useState(false);

  // Unconditional state change
  // setDone(true); //[Infinite Loop of Re-rendering]

  function handleDone() {
    setDone(true);
    console.log("After done button pressed --> done = ", done);
  }

  function handleDelete() {
    setTrash(true);
    console.log("After delete button pressed --> trash = ", trash);
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* Updating UI with state variable --> "done" */}
      <button onClick={handleDone} disabled={done}>
        done
      </button>

      {/* Updating UI with state variable --> "trash" */}
      <button onClick={handleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskPending;
