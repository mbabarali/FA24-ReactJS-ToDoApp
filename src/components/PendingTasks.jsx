import "./PendingTasks.css";
import TaskPending from "./TaskPending";
import { useState } from "react";
import { forwardRef } from "react";

// const PendingTasks = forwardRef(function (props, ref) {});

// Stateful Functional Component
const PendingTasks = forwardRef(function (props, ref) {
  const { tasks, onDone, onDelete } = props;

  const [InProgress, setInProgress] = useState([]);

  function onInProgress(id) {
    console.log("InProgress [Current] = ", InProgress);

    const taskInd = InProgress.findIndex((taskId) => taskId === id);

    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---

    const updatedState = [...InProgress]; // [STEP-1] Create copy // Shallow copy

    // [STEP-2] Update desired value(s) in copy
    if (taskInd >= 0) {
      console.log("Removing " + id + " at " + taskInd);
      updatedState.splice(taskInd, 1); // At index ('taskInd'), remove one ('1') array element i.e. 'id'
    } else {
      console.log("Adding " + id + " at " + updatedState.length);
      updatedState.push(id); // At the end, add 'id'
    }

    setInProgress(updatedState); // [STEP-3] Update state with copy
  }

  const purge = function () {
    console.log("Purge tasks ...");

    InProgress.forEach((id) => {
      onDelete(id);
    });
  };

  // Creating a property in "ref": The name "current" is not necessary in react componenents. You can name it differently.
  ref.current = purge;

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
        onInProgress={onInProgress}
        className={InProgress.includes(task.id) ? "inProgress" : ""}
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
});

export default PendingTasks;
