import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
// import ShowMessage from "./ShowMessage";

// Stateless Functional Component
function ManageTasks(props) {
  const { taskList, onDone, onDelete } = props;

  const pendingTasks = taskList.filter(function (task) {
    return task.done === false && task.trash === false;
  });

  const completedTasks = taskList.filter(
    (task) => task.done === true && task.trash === false
  );

  // const deletedTasks = taskList.filter((task) => task.trash === true);

  // console.log("pendingTasks ---> ", pendingTasks);
  // console.log("completedTasks ---> ", completedTasks);
  // console.log("deletedTasks ---> ", deletedTasks);

  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks
        tasks={pendingTasks}
        onDone={onDone}
        onDelete={onDelete}
        // Built-in JSX element identifiers are passed as string
        headingContainer="h2"

        // React component identifiers are passed in expression i.e. in {}
        // headingContainer={ShowMessage} // Require import
      ></PendingTasks>
      <CompletedTasks
        tasks={completedTasks}
        onDelete={onDelete}
        // Built-in JSX element identifiers are passed as string
        HeadingContainer="h2"

        // React component identifiers are passed in expression i.e. in {}
        // HeadingContainer={ShowMessage} // Require import
      ></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
