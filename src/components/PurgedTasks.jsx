import "./PurgedTasks.css";
import TaskPurged from "./TaskPurged";
// import ShowMessage from "./ShowMessage";

import TaskListContext from "../store/taskList-context";

// Stateless Functional Component
// To enable destructurin in function arguments for a dynamic component placeholder, its name must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'HeadingContainer'
function PurgedTasks({ tasks, HeadingContainer }) {
  return (
    <TaskListContext.Consumer>
      {(ctx) => {
        const list = tasks.map((task, ind) => {
          // return <TaskPurged title={task.title} />;

          //Mandatory unique key for each item in the React list
          return (
            <TaskPurged
              key={ind}
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
      }}
    </TaskListContext.Consumer>
  );
}

export default PurgedTasks;
