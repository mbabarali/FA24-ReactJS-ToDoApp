import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

// Stateless Functional Component
function ManageTasks(props) {
  const pendingTasks = props.taskList.filter(function (task) {
    return task.done === false && task.trash === false;
  });

  const completedTasks = props.taskList.filter(
    (task) => task.done === true && task.trash === false
  );

  // const deletedTasks = props.taskList.filter((task) => task.trash === true);

  // console.log("pendingTasks ---> ", pendingTasks);
  // console.log("completedTasks ---> ", completedTasks);
  // console.log("deletedTasks ---> ", deletedTasks);

  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks
        tasks={pendingTasks}
        onDone={props.onDone}
        onDelete={props.onDelete}
      ></PendingTasks>
      <CompletedTasks
        tasks={completedTasks}
        onDelete={props.onDelete}
      ></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
