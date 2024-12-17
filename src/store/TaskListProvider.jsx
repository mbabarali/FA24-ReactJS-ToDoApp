import { useReducer } from "react";
import { createContext, useContext } from "react";
import { useEffect } from "react";

import { INITIAL_TASKS } from "../data/initialTasks";
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
      // --- CORRECT SHALLOW COPY of 'tasks' --------
      return {
        ...latestState,
        tasks: newList,
      };
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

  // ----------------- Load State [XHR API] ------------------

  function handleGetResponse() {
    console.log("[handleGetResponse]");
    console.log(this.getAllResponseHeaders());
    console.log(this.response);
    console.log("typeof this.response:", typeof this.response); // 'string' because 'responseType' was default i.e. "" treated as "text"
    // console.log(this.responseText); // 'responseText' property accessible with 'responseType' equals "" or "text"
    // console.log("typeof this.responseText:", typeof this.responseText); // 'responseText' property accessible with 'responseType' equals "" or "text"

    // Load Task list with items from Ajax response
    // NOTE: XMLHttpRequest object's 'responseType' is '' (default, treated as "text")
    let tasks = [];

    if (this.responseType === "json") {
      tasks = this.response;
    } else if (this.responseType === "" || this.responseType === "text") {
      tasks = JSON.parse(this.responseText);
    } else {
      tasks = [];
    }

    dispatchState({
      type: "FETCH_SUCCESS",
      payload: { tasks },
    });
  }

  function handlePostResponse() {
    console.log("[handlePostResponse]");
    console.log(this.getAllResponseHeaders());

    console.log(this.response);
    console.log("typeof this.response:", typeof this.response); // 'object' because 'responseType' was set to 'json'

    // console.log(this.responseText); // The responseText is only accessible if the XMLHttpRequest object's 'responseType' is '' or 'text'
    // console.log("typeof this.responseText:", typeof this.responseText); // The responseText is only accessible if the XMLHttpRequest object's 'responseType' is '' or 'text'
    // console.log(JSON.parse(this.responseText)); // The responseText is only accessible if the XMLHttpRequest object's 'responseType' is '' or 'text'

    // Dispatch action to state here...
    // TODO
  }

  function statusLogHandler() {
    console.log("%c[READY STATE CHANGE]", "background-color: magenta");
    // console.log(this.readyState);

    // ----------------------------------
    // States of an XMLHttpRequest client
    // ----------------------------------
    // 0   UNSENT	          Client has been created. open() not called yet.
    // 1	  OPENED	          open() has been called.
    // 2	  HEADERS_RECEIVED	send() has been called, and RESPONSE headers and RESPONSE status are available.
    // 3	  LOADING	          Downloading; 'responseText' holds partial data.
    // 4	  DONE              The operation is complete.
    // ----------------------------------

    switch (this.readyState) {
      case 0:
        console.log("UNSENT: Client has been created. open() not called yet.");
        break;
      case 1:
        console.log("OPENED: 'open' has been called.");
        break;
      case 2:
        console.log(
          "HEADERS_RECEIVED: The response headers and status are available."
        );
        break;
      case 3:
        console.log(
          "LOADING: Downloading..., 'responseText' holds partial data."
        );
        break;
      case 4:
        console.log("DONE: The operation is complete.");
        break;
      default:
        console.log("[INFO-MESSAGE]: State missmatch.");
        break;
    }
  }

  function processStateHandler(e) {
    console.log("%c[STATE PROCESSOR]", "background-color: DodgerBlue");

    switch (this.readyState) {
      case 0:
        console.log(e.type + " : UNSENT"); // event type : xhr client state
        break;
      case 1:
        console.log(e.type + " : OPENED"); // event type : xhr client state
        break;
      case 2:
        console.log(e.type + " : HEADERS_RECEIVED"); // event type : xhr client state
        break;
      case 3:
        console.log(e.type + " : LOADING"); // event type : xhr client state
        break;
      case 4:
        console.log(e.type + " : DONE"); // event type : xhr client state

        const status = this.status;
        console.log("status: ", this.status);

        if (status === 0 || (status >= 200 && status < 400)) {
          // Request completed successfully
          console.log(this.response);
        } else {
          // An error with the request
        }
        break;
      default:
        console.log("[INFO-MESSAGE]: State (" + e.type + ") missmatch.");
        break;
    }
  }

  // [PROBLEM-ILR-ASYNC-XHR]: Infinite loop of rendering (ILR)
  // ---------------------------------------------------------
  // // Create client object
  // const httpAJAX = new XMLHttpRequest();

  // // Register event handlers
  // // * [RECOMMENDED] Add the event listeners before calling open() on the request. Otherwise the some events will not fire.
  // httpAJAX.addEventListener("load", handleGetResponse);
  // // httpAJAX.onload = handleGetResponse;
  // httpAJAX.addEventListener("readystatechange", statusLogHandler);
  // httpAJAX.addEventListener("readystatechange", processStateHandler);
  // // httpAJAX.readystatechange = statusLogHandler;

  // // Configure request
  // let isAysnc = true; // [Default = true] If false, the send() method does not return until the response is received.
  // httpAJAX.open("get", "http://localhost:5000/tasks", isAysnc);

  // // Add/modify headers/properties
  // httpAJAX.responseType = "json"; // [Default] "" as "text"
  // // httpAJAX.setRequestHeader("Accept", "application/json"); // 'setRequestHeader' must be called after calling open() and before calling send()

  // // Send request
  // httpAJAX.send();
  // console.log("httpAJAX.responseType:", httpAJAX.responseType); // [Default] "" treated as "text"

  // ---- [SOLUTION-PROBLEM-ILR-ASYNC-XHR] -------------------
  //     *  useEffect Hook
  //     *  Route Loaders
  //     *  Redux Thunks
  // ---------------------------------------------------------
  //  Asynchronous code
  // Observe various delays using network throttling from developer tools in the browser
  useEffect(() => {
    // Create client object
    const httpAJAX = new XMLHttpRequest();

    // Register event handlers
    // * [RECOMMENDED] Add the event listeners before calling open() on the request. Otherwise the some events will not fire.
    // httpAJAX.addEventListener("load", handleGetResponse);
    httpAJAX.addEventListener("load", handlePostResponse);
    // httpAJAX.onload = handleGetResponse;
    httpAJAX.addEventListener("readystatechange", statusLogHandler);
    httpAJAX.addEventListener("readystatechange", processStateHandler);
    // httpAJAX.readystatechange = statusLogHandler;

    // Configure request
    let isAysnc = true; // [Default = true] If false, the send() method does not return until the response is received.
    // httpAJAX.open("get", "http://localhost:5000/tasks", isAysnc);
    httpAJAX.open("post", "http://localhost:5000/tasks", isAysnc);

    // Add/modify headers/properties
    httpAJAX.responseType = "json"; // [Default] "" as "text"
    // httpAJAX.setRequestHeader("Accept", "application/json"); // 'setRequestHeader' must be called after calling open() and before calling send()
    httpAJAX.setRequestHeader(
      "Content-type",
      "application/json; charset=utf-8"
    );

    // Send request
    // httpAJAX.send();
    httpAJAX.send(
      JSON.stringify({
        id: "postExample",
        title: "New task posted",
        createDate: new Date().toLocaleDateString("de-DE"),
        done: false,
        trash: false,
      })
    ); // [Example] Body for post method

    console.log("httpAJAX.responseType:", httpAJAX.responseType); // [Default] "" treated as "text"
  }, []); // With empty dependency array [Single execution]
  // }); // Without dependency array [Infinite loop of rendering]

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
