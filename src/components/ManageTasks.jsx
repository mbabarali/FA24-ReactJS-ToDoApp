import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
// import ShowMessage from "./ShowMessage";
import PurgedTasks from "./PurgedTasks";

// import {Fragment} from "react"; // For Fragment
import React from "react"; // For React.Fragment

import { useState } from "react";
import { useRef } from "react";

// Stateless Functional Component
function ManageTasks() {
  const [showContent, setShowContent] = useState(true);

  const purgeInProgress = useRef();

  function toggleContentDisplay() {
    // setShowContent(!showContent); // Approach 01: Strongly NOT Recommended
    // setShowContent(showContent?false:true); // Approach 02: Strongly NOT Recommende

    setShowContent((currentState) => !currentState); // Approach 03: Use of anonymous function is Strongly RECOMMENDED
    // setShowContent(function (currentState) {
    //   return !currentState;
    // }); // Approach 04: Use of anonymous function is Strongly RECOMMENDED

    // Why Is This So:
    // ------------------------------
    // State funtions such as 'setShowContent' are called asynchronously,
    // instead of immediately which means (behind the scene) they are
    // scheduled to be executed later.
    //
    // -- With direct value as argument, react passes the argument value
    //    (current state value) at the time of scheduling to state function,
    //    hence that value might be obselete at the time of execution
    //    of the state function
    // -- With unnamed function as argument, React guarentees to pass the
    //    latest value to unnamed function at the time of execution
  }

  function onPurge() {
    console.log("[ManageTasks] Purge tasks ...");
    console.log("[ManageTasks] " + purgeInProgress.current);

    purgeInProgress.current.purgeAll();
  }

  // <React.Fragment></React.Fragment>
  // OR
  // <Fragment></Fragment>
  // OR
  // <></>
  return (
    <React.Fragment>
      <h1 onClick={toggleContentDisplay}>Manage Tasks</h1>
      {showContent && (
        <div>
          <button onClick={onPurge}>Purge Tasks</button>
          <PendingTasks
            ref={purgeInProgress}
            // Built-in JSX element identifiers are passed as string
            headingContainer="h2"

            // React component identifiers are passed in expression i.e. in {}
            // headingContainer={ShowMessage} // Require import
          ></PendingTasks>
          <CompletedTasks
            // Built-in JSX element identifiers are passed as string
            HeadingContainer="h2"

            // React component identifiers are passed in expression i.e. in {}
            // HeadingContainer={ShowMessage} // Require import
          ></CompletedTasks>
          <PurgedTasks
            // Built-in JSX element identifiers are passed as string
            HeadingContainer="h2"

            // React component identifiers are passed in expression i.e. in {}
            // HeadingContainer={ShowMessage} // Require import
          ></PurgedTasks>
        </div>
      )}
    </React.Fragment>
  );
}

export default ManageTasks;
