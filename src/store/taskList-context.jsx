import { createContext } from "react";

//Upper case (e.g. TaskListContext) to be defined as component
const TaskListContext = createContext({
  taskList: [],
});

export default TaskListContext;
