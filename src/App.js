import AddTask from "./components/AddTask";
import ManageTasks from "./components/ManageTasks";

import { useState } from "react";

import "./App.css";

import { INITIAL_TASKS } from "./data/initialTasks";

// Stateful Functional Component
function App() {
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

  function handleAdd(newTitle) {
    console.log("Title changed");

    if (newTitle) {
      // ************** A HIGHLY RECOMMENDED APPROACH **************
      // ************ Update State Variable(s) immutably ***********
      // --- Three-step procedure to update the state, immutably ---

      // [STEP-1] Create copy // Shallow copy
      const newList = [...taskList];

      // [STEP-2] Update desired value(s) in copy
      newList.push({
        id: 0,
        title: "",
        createDate: "00.00.0000",
        done: false,
        trash: false,
      });
      newList[newList.length - 1].id = 100 + newList.length;
      newList[newList.length - 1].title = newTitle;
      newList[newList.length - 1].createDate = new Date().toLocaleDateString(
        "de-DE"
      );
      newList[newList.length - 1].done = false;
      newList[newList.length - 1].trash = false;
      console.log("newList: ", newList);

      // [STEP-3] Update state with copy
      setTaskList(newList);
      console.log(
        "Task " +
          newList[newList.length - 1].id +
          " at " +
          (newList.length - 1) +
          " --> Added "
      );
    }
  }

  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask onAdd={handleAdd}></AddTask>
      <ManageTasks
        taskList={taskList}
        onDone={handleDone}
        onDelete={handleDelete}
      ></ManageTasks>
    </div>
  );
}

export default App;
