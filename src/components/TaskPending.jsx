import { useState } from "react";

// Stateful Functional Component
function TaskPending(props) {
  let [done, setDone] = useState(false);
  let [trash, setTrash] = useState(false);

  // Unconditional state change
  // setDone(true); //[Infinite Loop of Re-rendering]

  function doHandleDone() {
    props.onDone(props.id);
  }

  function doHandleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>

      {/* UI unchanged onClick as no change in state variable --> "done" */}
      <button onClick={doHandleDone} disabled={done}>
        done
      </button>

      {/* UI unchanged onClick as no change in state variable --> "trash" */}
      <button onClick={doHandleDelete} disabled={trash}>
        delete
      </button>
    </div>
  );
}

export default TaskPending;
