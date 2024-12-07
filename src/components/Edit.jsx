import { useContext, useState } from "react";
import TaskListContext from "../store/taskList-context";

// Functional Component
function Edit({ id }) {
  const ctx = useContext(TaskListContext);
  const [taskToEdit, setTaskToEdit] = useState({});

  function getTaskById(id) {
    let foundElements = ctx.taskList.filter((obj) => {
      return id === obj.id;
    });
    return foundElements.length !== 1 ? undefined : foundElements[0];
  }

  // ---- [PROBLEM-ILR]: Infinite loop of rendering (ILR) ----
  // ---------------------------------------------------------
  const task = getTaskById(id);
  // task && setTaskToEdit(task); // Passing reference, disregards immutability
  task && setTaskToEdit({ ...task }); // Regards immutability

  const renderJsx = (
    <>
      <h1>Edit Task {id}</h1>

      <div>
        <strong style={{ color: "green" }}>[State] </strong>
        {taskToEdit ? JSON.stringify(taskToEdit) : undefined}
      </div>

      <div>
        <strong style={{ color: "blue" }}>[Local Variable] </strong>
        {/* {task ? Object.values(task) : undefined} */}
        {task ? JSON.stringify(task) : undefined}
      </div>
    </>
  );

  return renderJsx;
}

export default Edit;
