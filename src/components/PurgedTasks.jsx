import "./PurgedTasks.css";
import TaskPurged from "./TaskPurged";
// import ShowMessage from "./ShowMessage";

import TaskListContext from "../store/taskList-context";
import { useContext } from "react";

// Stateless Functional Component
// To enable destructuring in function arguments for a dynamic component placeholder, its name must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'HeadingContainer'
function PurgedTasks({ HeadingContainer }) {
  // --- Uncomment to observe error handling ---
  // if (true) {
  //   throw new Error("An error found."); // Programmatically inform about Error.
  // }

  const ctx = useContext(TaskListContext);

  const deletedTasks = ctx.taskList.filter((task) => task.trash === true);

  // console.log("deletedTasks ---> ", deletedTasks);

  const list = deletedTasks.map((task, ind) => {
    // Mandatory unique key for each item in the React list [must not be array index]
    return (
      <TaskPurged
        key={task.id}
        title={task.title}
        id={task.id}
        onRestore={ctx.onRestore}
      />
    );
  });

  return (
    <div className="purgedTask_container">
      <HeadingContainer>Purged Tasks</HeadingContainer>
      {list}
    </div>
  );
}

export default PurgedTasks;
