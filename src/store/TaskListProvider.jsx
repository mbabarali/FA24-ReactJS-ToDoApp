import { createContext, useContext, useEffect, useReducer } from "react";

import { INITIAL_TASKS } from "../data/initialTasks";
import { getTasks } from "../services/db-services";
// import TaskListContext from "./taskList-context";

// ----------------- State Reducer --------------------
// Reducer function must be defined outside the component
// to avoid recreation of reducer function on rerendering of the component.
const reducerTaskList = (latestState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SUCCESS": {
      console.log("latestState: ", latestState);
      console.log("nextState: ", payload.tasks);

      return {
        ...latestState,
        tasks: payload.tasks,
      }; // Do not forget to return updated copy of the state
    }
    // break;
    case "ADD": {
      console.log("latestState: ", latestState);
      console.log("payload: ", payload);
      console.log(
        "latestState.tasks.concat([payload]): ",
        latestState.tasks.concat([payload])
      );

      return {
        ...latestState,
        tasks: latestState.tasks.concat([payload]),
      };

      /*
      // [STEP-1] Create copy // Shallow copy
      // const newList = [...latestState];
      // -----------------------------------------------
      // --- ERRONEOUS SHALLOW COPY of 'latestState' ---
      // const newState = { ...latestState }; // [SHALLOW-COPY-WRONG] Wrong use
      // const newList = newState.tasks;
      // -----------------------------------------------
      // --- CORRECT SHALLOW COPY of 'tasks' --------
      const newList = [...latestState.tasks]; // [SHALLOW-COPY-RIGHT] Right use

      // [STEP-2] Update desired value(s) in copy
      newList.push({
        id: "0",
        title: "",
        createDate: "00.00.0000",
        done: false,
        trash: false,
      });
      newList[newList.length - 1].id = String(100 + newList.length);
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

      // return newList; // Do not forget to return updated copy
      // -----------------------------------------------
      // --- ERRONEOUS SHALLOW COPY of 'latestState' ---
      // return newState; // Do not forget to return updated copy // [SHALLOW-COPY-WRONG] Wrong use
      // -----------------------------------------------
      // --- CORRECT SHALLOW COPY of 'taskList' --------
      return {
        ...latestState,
        tasks: newList,
      };
      */
    }
    // break;
    case "DONE": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.tasks.findIndex(
        (task) => task.id === payload.id
      );

      const updatedList = [...latestState.tasks]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].done = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Done-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> done: ",
        latestState.tasks[taskInd].done
      );

      return {
        ...latestState,
        tasks: updatedList,
      }; // Do not forget to return updated copy of the state
    }
    // break;
    case "DELETE": {
      console.log("latestState: ", latestState);

      const taskInd = latestState.tasks.findIndex(
        (task) => task.id === payload.id
      );
      const updatedList = [...latestState.tasks]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = true; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Trash-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> trash: ",
        latestState.tasks[taskInd].trash
      );

      return {
        ...latestState,
        tasks: updatedList,
      }; // Do not forget to return updated copy of the state
    }
    // break;
    case "RESTORE": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.tasks.findIndex(
        (task) => task.id === payload.id
      );

      const updatedList = [...latestState.tasks]; // [STEP-1] Create copy // Shallow copy
      updatedList[taskInd].trash = false; // [STEP-2] Update desired value(s) in copy

      console.log("updatedList: ", updatedList);
      console.log("taskInd: ", taskInd);
      console.log(
        "In Callback [Restore-Executed] ==> Task " +
          payload.id +
          " at " +
          taskInd +
          " --> trash: ",
        latestState.tasks[taskInd].trash
      );

      return {
        ...latestState,
        tasks: updatedList,
      }; // Do not forget to return updated copy of the state
    }
    // break;
    case "MODIFY": {
      console.log("latestState: ", latestState);
      const taskInd = latestState.tasks.findIndex(
        (task) => task.id === payload.task.id
      );

      const updatedList = [...latestState.tasks]; // [STEP-1] Create copy // Shallow copy

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
        latestState.tasks[taskInd]
      );

      return {
        ...latestState,
        tasks: updatedList,
      }; // Do not forget to return updated copy of the state
    }
    // break;
    case "REMOVE": {
      console.log("latestState: ", latestState);

      const newList = latestState.tasks.filter((task) => {
        return task.id !== payload.id;
      });

      return {
        ...latestState,
        tasks: newList,
      }; // Do not forget to return updated copy of the state
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
  const [state, dispatchState] = useReducer(reducerTaskList, {
    tasks: INITIAL_TASKS,
  });

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
      "In Handler [Restore-Scheduled] ==> Task " + id + " --> trash "
    );
  }    
  */

  // - [PROBLEM-ILR-ASYNC]: Infinite loop of rendering (ILR) -
  // ---------------------------------------------------------
  // getTasks().then((tasks) => {
  //   dispatchState({
  //     type: "FETCH_SUCCESS",
  //     payload: { tasks },
  //   });
  // });

  // ---- [SOLUTION-PROBLEM-ILR-ASYNC] -----------------------
  //     *  useEffect Hook
  //     *  Route Loaders
  //     *  Redux Thunks
  // ---------------------------------------------------------
  //  Asynchronous code
  // Observe various delays using network throttling from developer tools in the browser
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const tasks = await getTasks();
        dispatchState({
          type: "FETCH_SUCCESS",
          payload: { tasks },
        });
      } catch (err) {
        console.error(err);
      }
    };
    asyncWrapper();
  }, []); // With empty dependency array [Single execution]
  // }); // Without dependency array [Infinite loop of rendering]
  /*
  useEffect(() => {
    // Observe various delays using network throttling from developer tools in the browser
    getTasks()
      .then((tasks) => {
        console.log(tasks);
        dispatchState({
          type: "FETCH_SUCCESS",
          payload: { tasks },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // With empty dependency array [Single execution]
  // }); // Without dependency array [Infinite loop of rendering]
  */

  // ----------------- Context Provider -----------------
  const contextValue = {
    taskList: state.tasks,
    dispatchTaskList: dispatchState,
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
