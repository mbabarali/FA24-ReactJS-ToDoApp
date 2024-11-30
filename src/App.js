import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import { createRoutesFromElements } from "react-router-dom";
// import { Route } from "react-router-dom";

import TaskListProvider from "./store/TaskListProvider";

import Home from "./pages/Home";
import New from "./pages/New";
import Scheduled from "./pages/Scheduled";
import Finished from "./pages/Finished";
import Trash from "./pages/Trash";

// ========================================
// -------------------------------
// x-x-x-x-x-x Step 01 x-x-x-x-x-x
// -------------------------------
// Defining Routes - Option 1
const routes_op1 = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/new-task",
    element: <New></New>,
  },
  {
    path: "/scheduled-tasks",
    element: <Scheduled></Scheduled>,
  },
  {
    path: "/finished-tasks",
    element: <Finished></Finished>,
  },
  {
    path: "/deleted-tasks",
    element: <Trash></Trash>,
  },
];
// -------------------------------
// Defining Routes - Option 2
// const routes_op2 = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home></Home>}></Route>
//     <Route path="/new-task" element={<New></New>}></Route>
//     <Route path="/scheduled-tasks" element={<Scheduled></Scheduled>}></Route>
//     <Route path="/finished-tasks" element={<Finished></Finished>}></Route>
//     <Route path="/deleted-tasks" element={<Trash></Trash>}></Route>
//   </Route>
// );

// -------------------------------
// x-x-x-x-x-x Step 02 x-x-x-x-x-x
// -------------------------------
// Create Router with any of the above route definitions
// i.e. routes_op1 or routes_op1
const router = createBrowserRouter(routes_op1); // With routes_op1 route definitions
// OR
// const router = createBrowserRouter(routes_op2); // With routes_op2 route definitions
// ========================================

// Stateful Functional Component
function App() {
  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <TaskListProvider>
      <RouterProvider router={router}></RouterProvider>
    </TaskListProvider>
  );
}

export default App;
