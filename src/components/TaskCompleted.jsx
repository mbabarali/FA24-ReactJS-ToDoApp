import { useTasksDispatch } from "../store/TaskListProvider";

// Stateless Functional Component
function TaskCompleted(props) {
  const { id, title } = props;
  const { onDelete } = props;

  const dispatch = useTasksDispatch();

  return (
    <div>
      <span className="taskItem">{title}</span>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Named Function (A named function)
        onClick={function doHandleDelete() {
          onDelete(dispatch, id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCompleted;
