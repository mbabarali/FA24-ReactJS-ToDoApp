import { useTasksDispatch } from "../store/TaskListProvider";

function TaskPurged(props) {
  const { id, title } = props;
  const { onRestore } = props;

  const dispatch = useTasksDispatch();

  return (
    <div>
      <span className="taskItem">{title}</span>

      <button onClick={() => onRestore(dispatch, id)}>restore</button>
    </div>
  );
}

export default TaskPurged;
