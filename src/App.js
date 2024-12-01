import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import { createRoutesFromElements } from "react-router-dom";
// import { Route } from "react-router-dom";

import TaskListProvider from "./store/TaskListProvider";
import UserLayout from "./layouts/UserLayout";

import Home from "./pages/Home";
import New from "./pages/New";
import Scheduled from "./pages/Scheduled";
import Finished from "./pages/Finished";
import Trash from "./pages/Trash";
import Error from "./pages/Error";
import Update from "./pages/Update";

// ========================================
// -------------------------------
// x-x-x-x-x-x Step 01 x-x-x-x-x-x
// -------------------------------
// Defining Routes - Option 1
const routes_op1 = [
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <Error source="USER"></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error source="USER/HOME"></Error>,
      },
      {
        path: "/new-task",
        element: <New></New>,
      },
      {
        path: "/scheduled-tasks",
        element: <Scheduled></Scheduled>,
        errorElement: <Error source="USER/SCHEDULED-TASKS"></Error>,
      },
      {
        path: "/finished-tasks",
        element: <Finished></Finished>,
      },
      {
        path: "/deleted-tasks",
        element: <Trash></Trash>,
      },
      {
        path: "/scheduled-tasks/:taskId",
        element: <Update></Update>,
      },
    ],
  },
];
// -------------------------------
// Defining Routes - Option 2
// const routes_op2 = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home></Home>} errorElement: {<Error source="HOME" />}></Route>
//     <Route path="/new-task" element={<New></New>}></Route>
//     <Route path="/scheduled-tasks" element={<Scheduled></Scheduled>} errorElement: {<Error source="SCHEDULED-TASKS" />}></Route>
//     <Route path="/finished-tasks" element={<Finished></Finished>}></Route>
//     <Route path="/deleted-tasks" element={<Trash></Trash>}></Route>
//     <Route path="/scheduled-tasks/:taskId" element={<Update></Update>}></Route>
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
