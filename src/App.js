import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import { createRoutesFromElements } from "react-router-dom";
// import { Route } from "react-router-dom";

import TaskListProvider from "./store/TaskListProvider";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import SignIn from "./pages/SignIn";

import AdminHome from "./pages/admin/Home"; // Default export renamed
import AdminNew from "./pages/admin/New"; // Default export renamed

import Home from "./pages/Home";
import New from "./pages/New";
import Scheduled from "./pages/Scheduled";
import Finished from "./pages/Finished";
import Trash from "./pages/Trash";
import ErrorView from "./pages/ErrorView";
import Update from "./pages/Update";

// ========================================
// -------------------------------
// x-x-x-x-x-x Step 01 x-x-x-x-x-x
// -------------------------------
// Defining Routes - Option 1
const routes_op1 = [
  {
    index: true,
    // path: "/",
    element: <SignIn></SignIn>,
    errorElement: <ErrorView source="ROOT"></ErrorView>,
  },
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <ErrorView source="USER"></ErrorView>,
    children: [
      // Relative Paths (without starting /)
      {
        index: true,
        // path: "",
        element: <Home></Home>,
        errorElement: <ErrorView source="USER/HOME"></ErrorView>,
      },
      {
        path: "new-task",
        element: <New></New>,
      },
      {
        path: "scheduled-tasks",
        element: <Scheduled></Scheduled>,
        errorElement: <ErrorView source="USER/SCHEDULED-TASKS"></ErrorView>,
      },
      {
        path: "finished-tasks",
        element: <Finished></Finished>,
      },
      {
        path: "deleted-tasks",
        element: <Trash></Trash>,
      },
      {
        path: "scheduled-tasks/:taskId",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    errorElement: <ErrorView source="ADMIN"></ErrorView>,
    children: [
      // Relative Paths (without starting /)
      {
        index: true,
        // path: "",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "new-task",
        element: <AdminNew></AdminNew>,
      },
    ],
  },
];
// -------------------------------
// Defining Routes - Option 2
// const routes_op2 = createRoutesFromElements(
//   <Route>
//     <Route
//       // path="/"
//       index
//       element={<SignIn></SignIn>}
//       errorElement={<ErrorView source="ROOT" />}
//     ></Route>
//     <Route
//       path="user"
//       element={<UserLayout></UserLayout>}
//       errorElement={<ErrorView source="USER" />}
//     >
//       <Route
//         // path=""
//         index
//         element={<Home></Home>}
//         errorElement={<ErrorView source="HOME" />}
//       ></Route>
//       <Route path="new-task" element={<New></New>}></Route>
//       <Route
//         path="scheduled-tasks"
//         element={<Scheduled></Scheduled>}
//         errorElement={<ErrorView source="SCHEDULED-TASKS" />}
//       ></Route>
//       <Route path="finished-tasks" element={<Finished></Finished>}></Route>
//       <Route path="deleted-tasks" element={<Trash></Trash>}></Route>
//       <Route path="scheduled-tasks/:taskId" element={<Update></Update>}></Route>
//     </Route>
//     <Route
//       path="/admin"
//       element={<AdminLayout></AdminLayout>}
//       errorElement={<ErrorView source="ADMIN" />}
//     >
//       <Route path="" index element={<AdminHome></AdminHome>}></Route>
//       <Route path="new-task" element={<AdminNew></AdminNew>}></Route>
//     </Route>
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
