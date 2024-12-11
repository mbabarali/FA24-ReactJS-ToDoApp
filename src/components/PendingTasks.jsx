import "./PendingTasks.css";
import TaskPending from "./TaskPending";
import { useState } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
// import { useContext } from "react";
// import TaskListContext from "../store/taskList-context";
import { useTasks } from "../store/TaskListProvider";
// import { useTasksDispatch, useTasksState } from "../store/TaskListProvider";

import { handleDone as onDone } from "../store/helpers";
import { handleDelete as onDelete } from "../store/helpers";

// const PendingTasks = forwardRef(function (props, ref) {});

// Stateful Functional Component
const PendingTasks = forwardRef(function (props, ref) {
  // --- Uncomment to observe error handling ---
  // if (true) {
  //   throw new Error("An error found."); // Programmatically inform about Error.
  // }

  const purgeProgressingTasks = useRef();

  // const ctx = useContext(TaskListContext);
  // const taskList = useTasksState();
  // const dispatchTaskList = useTasksDispatch();
  const [taskList, dispatchTaskList] = useTasks();

  useImperativeHandle(ref, () => {
    return {
      purgeAll() {
        purgeProgressingTasks.current.click();
      },
    };
  });

  // const { taskList, onDone, onDelete } = ctx;
  // const { taskList, dispatchTaskList } = ctx;

  // const onDone = (id) => {
  //   dispatchTaskList({ type: "DONE", payload: { id } });
  // };

  // const onDelete = (id) => {
  //   dispatchTaskList({ type: "DELETE", payload: { id } });
  // };

  const pendingTasks = taskList.filter(function (task) {
    return task.done === false && task.trash === false;
  });

  // console.log("pendingTasks ---> ", pendingTasks);

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
    console.log("[PendingTasks] Purge tasks ...");

    InProgress.forEach((id) => {
      onDelete(dispatchTaskList, id);
      // onDelete(id);
    });
  };

  // const deleteInProgress = function () {
  //   console.log("[PendingTasks] deleteInProgress tasks ...");
  //
  //   InProgress.forEach((id) => {
  //     onDelete(id);
  //   });
  // };

  const list = pendingTasks.map((task, ind) => {
    return (
      <TaskPending
        // Mandatory unique key for each item in the React list [must not be array index]
        key={task.id}
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
    // Event Bubbling vs. Event Capturing
    // Event Bubbling ==> Event propagation from child element to the top most parent (with event listener for the same event) element
    // Event Capturing ==> Event propagation from parent element to deepest child (with event listener for the same event) element

    // Event may bubble up from the child elements which also have event listener configured for the same event, 'onClick'
    <div
      className="pendingTask_container"
      ref={purgeProgressingTasks}
      onClick={purge}
      // onClickCapture={() => console.log("[onClick]: <div>")}
    >
      <Heading>Pending Tasks</Heading>
      {list}
    </div>
  );
});

export default PendingTasks;
