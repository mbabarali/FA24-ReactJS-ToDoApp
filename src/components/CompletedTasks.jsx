import TaskCompleted from "./TaskCompleted";
// import ShowMessage from "./ShowMessage";

import "./CompletedTasks.css";

// Functional Component
// To enable destructurin in function arguments for a dynamic component placeholder, its name must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'HeadingContainer'
function CompletedTasks({ tasks, onDelete, HeadingContainer }) {
  const list = tasks.map((task, ind) => {
    return (
      <TaskCompleted
        //Mandatory unique key for each item in the React list
        key={ind}
        title={task.title}
        id={task.id}
        onDelete={onDelete}
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
}

export default CompletedTasks;
