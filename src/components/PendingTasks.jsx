import "./PendingTasks.css";
import TaskPending from "./TaskPending";
// import ShowMessage from "./ShowMessage";

// Functional Component
function PendingTasks(props) {
  const { tasks, onDone, onDelete } = props;

  const list = tasks.map((task, ind) => {
    return (
      <TaskPending
        //Mandatory unique key for each item in the React list
        key={ind}
        title={task.title}
        // JSX Slot --> Passing JSX code via attribute props
        createDate={<span>{task.createDate}</span>}
        id={task.id}
        onDone={onDone}
        onDelete={onDelete}
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

  // Variable name which is used as placeholder of an element must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'Heading'
  const Heading = props.headingContainer;

  return (
    <div className="pendingTask_container">
      <Heading>Pending Tasks</Heading>
      {list}
    </div>
  );
}

export default PendingTasks;
