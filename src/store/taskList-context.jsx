import { createContext } from "react";

//Upper case (e.g. TaskListContext) to be defined as component
const TaskListContext = createContext({
  taskList: [],
  onDone: () => {},
  onDelete: () => {},
  onRestore: () => {},
  onAdd: () => {},
});

export default TaskListContext;
