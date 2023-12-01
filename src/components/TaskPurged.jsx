function TaskPurged(props) {
  const { id, title } = props;
  const { onRestore } = props;

  return (
    <div>
      <span className="taskItem">{title}</span>

      <button onClick={() => onRestore(id)}>restore</button>
    </div>
  );
}

export default TaskPurged;
