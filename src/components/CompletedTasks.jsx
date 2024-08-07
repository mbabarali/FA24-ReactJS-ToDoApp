import TaskCompleted from "./TaskCompleted";
// import ShowMessage from "./ShowMessage";

import TaskListContext from "../store/taskList-context";

import "./CompletedTasks.css";

// Functional Component
// To enable destructurin in function arguments for a dynamic component placeholder, its name must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'HeadingContainer'
// function CompletedTasks({ tasks, onDelete, HeadingContainer }) {
function CompletedTasks({ tasks, HeadingContainer }) {
  return (
    <TaskListContext.Consumer>
      {(ctx) => {
        const completedTasks = ctx.taskList.filter(
          (task) => task.done === true && task.trash === false
        );

        // console.log("completedTasks ---> ", completedTasks);

        const list = completedTasks.map((task, ind) => {
          return (
            <TaskCompleted
              //Mandatory unique key for each item in the React list
              key={ind}
              title={task.title}
              id={task.id}
              onDelete={ctx.onDelete}
            />
          );

          // return <TaskCompleted title={task.title} />;
        });
        return (
          <div className="completedTask_container">
            <HeadingContainer>Completed Tasks</HeadingContainer>
            {list}
          </div>
        );
      }}
    </TaskListContext.Consumer>
  );
}

export default CompletedTasks;
