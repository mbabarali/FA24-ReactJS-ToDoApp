import { useState } from "react";

// Stateful Functional Component
function TaskPending(props) {
  let [done, setDone] = useState(false);
  let [trash, setTrash] = useState(false);

  // Unconditional state change
  // setDone(true); //[Infinite Loop of Re-rendering]

  function doHandleDone() {
    handleDone(props.id);
  }

  function handleDone(id) {
    setDone(true);
    console.log(
      "After done button pressed at task " + id + " --> done = ",
      done
    );
  }

  function doHandleDelete() {
    handleDelete(props.id);
  }

  function handleDelete(id) {
    setTrash(true);
    console.log(
      "After delete button pressed at task " + id + " --> trash = ",
      trash
    );
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* Updating UI with state variable --> "done" */}
      <button onClick={doHandleDone} disabled={done}>
        done
      </button>

      {/* Updating UI with state variable --> "trash" */}
      <button onClick={doHandleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskPending;
