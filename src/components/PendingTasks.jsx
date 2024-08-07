import "./PendingTasks.css";
import TaskPending from "./TaskPending";
import { useState } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";

import TaskListContext from "../store/taskList-context";

// const PendingTasks = forwardRef(function (props, ref) {});

// Stateful Functional Component
const PendingTasks = forwardRef(function (props, ref) {
  const purgeProgressingTasks = useRef();

  useImperativeHandle(ref, () => {
    return {
      purgeAll() {
        purgeProgressingTasks.current.click();
      },
    };
  });

  const { tasks } = props;

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

  // Variable name which is used as placeholder of an element must start with capital letter to stay consistent with component naming convention in React (e.g. PascalCase notation), such as 'Heading'
  const Heading = props.headingContainer;

  return (
    <TaskListContext.Consumer>
      {(ctx) => {
        const purge = function () {
          console.log("[PendingTasks] Purge tasks ...");

          InProgress.forEach((id) => {
            ctx.onDelete(id);
          });
        };

        const deleteInProgress = function () {
          console.log("[PendingTasks] deleteInProgress tasks ...");

          InProgress.forEach((id) => {
            ctx.onDelete(id);
          });
        };

        const list = tasks.map((task, ind) => {
          return (
            <TaskPending
              //Mandatory unique key for each item in the React list
              key={ind}
              title={task.title}
              // JSX Slot --> Passing JSX code via attribute props
              createDate={<span>{task.createDate}</span>}
              id={task.id}
              onDone={ctx.onDone}
              onDelete={ctx.onDelete}
              onInProgress={onInProgress}
              className={InProgress.includes(task.id) ? "inProgress" : ""}
            />
          );
        });

        console.log(list);

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
      }}
    </TaskListContext.Consumer>
  );
});

export default PendingTasks;
