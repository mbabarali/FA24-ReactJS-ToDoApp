import { useState } from "react";

// Stateful Functional Component
function TaskCompleted(props) {
  let [trash, setTrash] = useState(false);

  function doHandleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.title}</span>

      {/* UI unchanged onClick as no change in state variable --> "trash" */}
      <button onClick={doHandleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
