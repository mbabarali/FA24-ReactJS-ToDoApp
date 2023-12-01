import TaskCompleted from "./TaskCompleted";

import "./CompletedTasks.css";

// Functional Component
function CompletedTasks({ tasks, onDelete }) {
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
      <h2>Completed Tasks</h2>
      {list}
    </div>
  );
}

export default CompletedTasks;
