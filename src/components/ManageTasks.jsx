import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
import { useState } from "react";

const INITIAL_TASKS = [
  {
    id: 101,
    title: "Going to admission office",
    createDate: "20.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 102,
    title: "Visit library",
    createDate: "16.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 103,
    title: "Attending seminar",
    createDate: "19.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 104,
    title: "Taking breakfast",
    createDate: "15.10.2023",
    done: true,
    trash: false,
  },
  {
    id: 105,
    title: "Meet batch advisor",
    createDate: "13.09.2023",
    done: true,
    trash: false,
  },
  {
    id: 106,
    title: "Community service",
    createDate: "29.10.2023",
    done: true,
    trash: false,
  },
];

// Stateful Functional Component
function ManageTasks() {
  const [taskList, setTaskList] = useState(INITIAL_TASKS);

  function handleDone(id) {
    const taskInd = taskList.findIndex((task) => task.id === id);
    console.log("taskList: ", taskList);

    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---

    const updatedList = [...taskList]; // [STEP-1] Create copy // Shallow copy

    updatedList[taskInd].done = true; // [STEP-2] Update desired value(s) in copy
    console.log("updatedList: ", updatedList);

    setTaskList(updatedList); // [STEP-3] Update state with copy
    console.log("taskInd: ", taskInd);

    console.log(
      "Task " + id + " at " + taskInd + " --> done: ",
      taskList[taskInd].done
    );
  }

  function handleDelete(id) {
    const taskInd = taskList.findIndex((task) => task.id === id);
    console.log("taskList: ", taskList);

    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---

    const updatedList = [...taskList]; // [STEP-1] Create copy // Shallow copy

    updatedList[taskInd].trash = true; // [STEP-2] Update desired value(s) in copy
    console.log("updatedList: ", updatedList);

    setTaskList(updatedList); // [STEP-3] Update state with copy
    console.log("taskInd: ", taskInd);

    console.log(
      "Task " + id + " at " + taskInd + " --> trash: ",
      taskList[taskInd].trash
    );
  }

  const pendingTasks = taskList.filter(function (task) {
    return task.done === false && task.trash === false;
  });

  const completedTasks = taskList.filter(
    (task) => task.done === true && task.trash === false
  );

  // const deletedTasks = taskList.filter((task) => task.trash === true);

  // console.log("pendingTasks ---> ", pendingTasks);
  // console.log("completedTasks ---> ", completedTasks);
  // console.log("deletedTasks ---> ", deletedTasks);

  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks
        tasks={pendingTasks}
        onDone={handleDone}
        onDelete={handleDelete}
      ></PendingTasks>
      <CompletedTasks
        tasks={completedTasks}
        onDelete={handleDelete}
      ></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
