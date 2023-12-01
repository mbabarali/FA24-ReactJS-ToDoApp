import { useState } from "react";

// Stateful Functional Component
function TaskCompleted(props) {
  let [trash, setTrash] = useState(false);

  function doHandleDelete() {
    handleDelete(props.id);
  }

  function handleDelete(id) {
    setTrash(true);
    console.log("After button pressed at task " + id + " --> trash = ", trash);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* Updating UI with state variable --> "trash" */}
      <button onClick={doHandleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
