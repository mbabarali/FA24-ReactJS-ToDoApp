import AddTask from "./components/AddTask";
import ManageTasks from "./components/ManageTasks";

import { useState } from "react";

import "./App.css";

import { INITIAL_TASKS } from "./data/initialTasks";

// Stateful Functional Component
function App() {
  const [taskList, setTaskList] = useState(INITIAL_TASKS);

  function handleDone(id) {
    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---
    setTaskList((currentListState) => {
      console.log("currentListState: ", currentListState);
      const taskInd = currentListState.findIndex((task) => task.id === id);

      const updatedList = [...currentListState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].done = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Done-Executed] ==> Task " +
          id +
          " at " +
          taskInd +
          " --> done: ",
        currentListState[taskInd].done
      );

      return updatedList; // Do not forget to return updated copy
    }); // [STEP-3] Update state with copy

    console.log("In Handler [Done-Scheduled] ==> Task " + id + " --> done ");
  }

  function handleDelete(id) {
    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---
    setTaskList((currentListState) => {
      console.log("currentListState: ", currentListState);

      const taskInd = currentListState.findIndex((task) => task.id === id);
      const updatedList = [...currentListState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Trash-Executed] ==> Task " +
          id +
          " at " +
          taskInd +
          " --> trash: ",
        currentListState[taskInd].trash
      );

      return updatedList; // Do not forget to return updated copy
    }); // [STEP-3] Update state with copy

    console.log("In Handler [Trash-Scheduled] ==> Task " + id + " --> trash ");
  }

  function handleAdd(newTitle) {
    console.log("Add triggered!");

    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---
    if (newTitle) {
      setTaskList((currentListState) => {
        console.log("currentListState: ", currentListState);

        // [STEP-1] Create copy // Shallow copy
        const newList = [...currentListState];

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
        console.log(
          "In Callback [Add-Executed] ==> Task " +
            newList[newList.length - 1].id +
            " at " +
            (newList.length - 1) +
            " --> Added "
        );

        return newList; // Do not forget to return updated copy
      }); // [STEP-3] Update state with copy

      console.log("In Handler [Add-Scheduled] ==> Task --> Added ");
    }
  }

  function handleRestore(id) {
    // ************** A HIGHLY RECOMMENDED APPROACH **************
    // ************ Update State Variable(s) immutably ***********
    // --- Three-step procedure to update the state, immutably ---
    setTaskList((currentListState) => {
      console.log("currentListState: ", currentListState);
      const taskInd = currentListState.findIndex((task) => task.id === id);

      const updatedList = [...currentListState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = false; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Restore-Executed] ==> Task " +
          id +
          " at " +
          taskInd +
          " --> trash: ",
        currentListState[taskInd].trash
      );

      return updatedList; // Do not forget to return updated copy
    }); // [STEP-3] Update state with copy

    console.log(
      "In Handler [Restore-Scheduled] ==> Task " + id + " --> trash "
    );
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
        onRestore={handleRestore}
      ></ManageTasks>
    </div>
  );
}

export default App;
