import { useReducer } from "react";
import { createContext, useContext } from "react";

import { INITIAL_TASKS } from "../data/initialTasks";
// import TaskListContext from "./taskList-context";

// ----------------- State Reducer --------------------
// Reducer function must be defined outside the component
// to avoid recreation of reducer function on rerendering of the component.
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
    case "MODIFY": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.findIndex(
        (task) => task.id === payload.task.id
      );

      const updatedList = [...latestState]; // [STEP-1] Create copy // Shallow copy

      // updatedList[taskInd] = {
      //   ...updatedList[taskInd],
      //   ...payload.task, // May update ID which might be undesireable
      //   createDate: payload.task.createDate,
      // }; // [STEP-2] Update desired value(s) in copy

      // updatedList[taskInd].id X=X payload.task.id; // [DONOT MODIFY - DONOT MODIFY - DONOT MODIFY ]
      updatedList[taskInd].title = payload.task.title; // [STEP-2] Update desired value(s) in copy
      updatedList[taskInd].createDate = payload.task.createDate; // [STEP-2] Update desired value(s) in copy
      updatedList[taskInd].done = payload.task.done; // [STEP-2] Update desired value(s) in copy
      updatedList[taskInd].trash = payload.task.trash; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Modify-Executed] ==> Task " +
          payload.task +
          " at " +
          taskInd +
          " --> task: ",
        latestState[taskInd]
      );

      return updatedList; // [STEP-3] Update state with copy -- Do not forget to return updated copy
    }
    // break;
    default:
      return latestState; // Do not forget to return ---- No change
  }
};

/** ******************************************************
 *
 *       Context Module Functions
 *       Context Module Pattern
 *
 ****************************************************** */

// ---------------- Create Context---------------------
//Upper case (e.g. TaskListContext) to be defined as component
const TaskListContext = createContext({
  taskList: [],
  dispatchTaskList: () => {},
  // onDone: () => {},
  // onDelete: () => {},
  // onRestore: () => {},
  // onAdd: () => {},
});

TaskListContext.displayName = "TaskListContext"; // [OPTIONAL] Debugging Purpose only

// export default TaskListContext;

// ----------------- Custom Hooks ---------------------
// Custom Hook
export function useTasksState() {
  const context = useContext(TaskListContext);

  if (context === undefined) {
    throw new Error(`useTaskState must be used within a TaskListProvider`);
  }

  return context.taskList;
}

// Custom Hook
export function useTasksDispatch() {
  const context = useContext(TaskListContext);

  if (context === undefined) {
    throw new Error(`useTaskState must be used within a TaskListProvider`);
  }

  return context.dispatchTaskList;
}

// Custom Hook
export function useTasks() {
  return [useTasksState(), useTasksDispatch()];
}

// ----------------- TaskListProvider -----------------
function TaskListProvider({ children }) {
  const [taskList, dispatchTaskList] = useReducer(
    reducerTaskList,
    INITIAL_TASKS
  );

  /*
  // ----------------- Helper Functions -----------------
  // --------------- Moved to helpers.jsx ---------------
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
      "In Handler [Restore-Scheduled] ==> Task " + id + " --> restore "
    );
  }
  */

  // ----------------- Context Provider -----------------
  const contextValue = {
    taskList: taskList,
    dispatchTaskList: dispatchTaskList,
    // onAdd: handleAdd,
    // onDone: handleDone,
    // onDelete: handleDelete,
    // onRestore: handleRestore,
  };

  return (
    <TaskListContext.Provider value={contextValue}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListProvider;
