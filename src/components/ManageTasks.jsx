import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

const INITIAL_TASKS = [
  {
    title: "Going to admission office",
    createDate: "20.10.2023",
    done: false,
    trash: false,
  },
  {
    title: "Visit library",
    createDate: "16.10.2023",
    done: false,
    trash: false,
  },
  {
    title: "Attending seminar",
    createDate: "19.10.2023",
    done: false,
    trash: false,
  },
  {
    title: "Taking breakfast",
    createDate: "15.10.2023",
    done: true,
    trash: false,
  },
  {
    title: "Meet batch advisor",
    createDate: "13.09.2023",
    done: true,
    trash: false,
  },
  {
    title: "Community service",
    createDate: "29.10.2023",
    done: true,
    trash: false,
  },
];

// Functional Component
function ManageTasks() {
  const pendingTasks = INITIAL_TASKS.filter(function (task) {
    return task.done === false && task.trash === false;
  });

  const completedTasks = INITIAL_TASKS.filter(
    (task) => task.done === true && task.trash === false
  );

  // const deletedTasks = INITIAL_TASKS.filter((task) => task.trash === true);

  // console.log("pendingTasks ---> ", pendingTasks);
  // console.log("completedTasks ---> ", completedTasks);
  // console.log("deletedTasks ---> ", deletedTasks);

  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks tasks={pendingTasks}></PendingTasks>
      <CompletedTasks tasks={completedTasks}></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
