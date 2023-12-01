import "./PendingTasks.css";
import TaskPending from "./TaskPending";

function PendingTasks(props) {
  const list = props.tasks.map((task, ind) => {
    return (
      <TaskPending
        //Mandatory unique key for each item in the React list
        key={ind}
        title={task.title}
        // JSX Slot --> Passing JSX code via attribute props
        createDate={<span>{task.createDate}</span>}
        id={task.id}
        onDone={props.onDone}
        onDelete={props.onDelete}
      />
    );

    // return (
    //   <TaskPending
    //     title={task.title}
    //     // JSX Slot --> Passing JSX code via attribute props
    //     // - For multiple JSX elements, use <div> or any other element as a wrapper
    //     createDate={<span>{task.createDate}</span>}
    //   />
    // );
  });

  console.log(list);
  return (
    <div className="pendingTask_container">
      <h2>Pending Tasks</h2>
      {list}
    </div>
  );
}

export default PendingTasks;
