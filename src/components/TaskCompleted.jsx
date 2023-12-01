import { useState } from "react";

// Stateful Functional Component
function TaskCompleted(props) {
  let [trash, setTrash] = useState(false);

  function handleDelete() {
    setTrash(true);
    console.log("After button pressed --> trash = ", trash);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* Updating UI with state variable --> "trash" */}
      <button onClick={handleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
