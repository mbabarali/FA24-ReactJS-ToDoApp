import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

const INITIAL_TASKS = [
  {
    id: 101,
    title: "Going to admission office",
    createDate: "20.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 102,
    title: "Visit library",
    createDate: "16.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 103,
    title: "Attending seminar",
    createDate: "19.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 104,
    title: "Taking breakfast",
    createDate: "15.10.2023",
    done: true,
    trash: false,
  },
  {
    id: 105,
    title: "Meet batch advisor",
    createDate: "13.09.2023",
    done: true,
    trash: false,
  },
  {
    id: 106,
    title: "Community service",
    createDate: "29.10.2023",
    done: true,
    trash: false,
  },
];

// Functional Component
function ManageTasks() {
  function handleDone(id) {
    console.log("Task " + id + " --> done");
  }

  function handleDelete(id) {
    console.log("Task " + id + " --> trash: ");
  }

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
      <PendingTasks
        tasks={pendingTasks}
        onDone={handleDone}
        onDelete={handleDelete}
      ></PendingTasks>
      <CompletedTasks
        tasks={completedTasks}
        onDelete={handleDelete}
      ></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
