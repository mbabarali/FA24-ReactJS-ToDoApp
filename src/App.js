import AddTask from "./components/AddTask";
import ManageTasks from "./components/ManageTasks";

import { useReducer } from "react";

import "./App.css";

import { INITIAL_TASKS } from "./data/initialTasks";
import TaskListContext from "./store/taskList-context";

// Reducer function must be defined outside the component
// (e.g. App) to avoid recreation of reducer function on
// rerendering (e.g. App) of the component.
const reducerTaskList = (latestState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD": {
      console.log("latestState: ", latestState);

      // [STEP-1] Create copy // Shallow copy
      const newList = [...latestState];

      // [STEP-2] Update desired value(s) in copy
      newList.push({
        id: 0,
        title: "",
        createDate: "00.00.0000",
        done: false,
        trash: false,
      });
      newList[newList.length - 1].id = 100 + newList.length;
      newList[newList.length - 1].title = payload.newTitle;
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
    }
    // break;
    case "DONE": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.findIndex((task) => task.id === payload.id);

      const updatedList = [...latestState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].done = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Done-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> done: ",
        latestState[taskInd].done
      );

      return updatedList; // Do not forget to return updated copy
    }
    // break;
    case "DELETE": {
      console.log("latestState: ", latestState);

      const taskInd = latestState.findIndex((task) => task.id === payload.id);
      const updatedList = [...latestState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Trash-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> trash: ",
        latestState[taskInd].trash
      );

      return updatedList; // Do not forget to return updated copy
    }
    // break;
    case "RESTORE": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.findIndex((task) => task.id === payload.id);

      const updatedList = [...latestState]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = false; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Restore-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> trash: ",
        latestState[taskInd].trash
      );

      return updatedList; // Do not forget to return updated copy
    }
    // break;
    default:
      return latestState; // Do not forget to return ---- No change
  }
};

// Stateful Functional Component
function App() {
  const [taskList, dispatchTaskList] = useReducer(
    reducerTaskList,
    INITIAL_TASKS
  );

  function handleDone(id) {
    dispatchTaskList({ type: "DONE", payload: { id } });
    console.log("In Handler [Done-Scheduled] ==> Task " + id + " --> done ");
  }

  function handleDelete(id) {
    dispatchTaskList({ type: "DELETE", payload: { id } });
    console.log("In Handler [Trash-Scheduled] ==> Task " + id + " --> trash ");
  }

  function handleAdd(newTitle) {
    console.log("Add triggered!");
    if (newTitle) {
      dispatchTaskList({ type: "ADD", payload: { newTitle } });
      console.log("In Handler [Add-Scheduled] ==> Task --> Added ");
    }
  }

  function handleRestore(id) {
    dispatchTaskList({ type: "RESTORE", payload: { id } });
    console.log(
      "In Handler [Restore-Scheduled] ==> Task " + id + " --> trash "
    );
  }

  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <TaskListContext.Provider
      value={{
        taskList: taskList,
        onDone: handleDone,
        onDelete: handleDelete,
        onRestore: handleRestore,
      }}
    >
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask onAdd={handleAdd}></AddTask>
        <ManageTasks />
      </div>
    </TaskListContext.Provider>
  );
}

export default App;
