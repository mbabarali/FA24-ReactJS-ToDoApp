import { handleEmptyTrash as onEmpty } from "../store/helpers";
import { useTasksDispatch, useTasksState } from "../store/TaskListProvider";
import "./EmptyTrash.css";

function EmptyTrash({ count }) {
  const dispatch = useTasksDispatch();
  const tasks = useTasksState();

  const handleEmpty = () => {
    tasks.forEach((task) => {
      if (task.trash) {
        onEmpty(dispatch, task.id);
      }
    });
  };

  return (
    <div className="emptybin-container">
      <button className="emptybin-btn" onClick={handleEmpty}>
        Permanently remove {count} tasks...
      </button>
    </div>
  );
}

export default EmptyTrash;
