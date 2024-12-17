import {
  deleteTask,
  patchTask,
  postTask,
  putTask,
} from "../services/db-services";

function handleDone(dispatchTaskList, id) {
  patchTask(id, { done: true })
    .then((task) => {
      console.log("Task at Server: ", task);
      dispatchTaskList({ type: "DONE", payload: { id } });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("In Handler [Done-Scheduled] ==> Task " + id + " --> done ");
}

function handleDelete(dispatchTaskList, id) {
  patchTask(id, { trash: true })
    .then((task) => {
      console.log("Task at Server: ", task);
      dispatchTaskList({ type: "DELETE", payload: { id } });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("In Handler [Trash-Scheduled] ==> Task " + id + " --> trash ");
}

function handleEmptyTrash(dispatchTaskList, id) {
  deleteTask(id)
    .then((task) => {
      console.log("Task at Server: ", task);
      dispatchTaskList({ type: "REMOVE", payload: { id } });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("In Handler [Remove-Scheduled] ==> Tasks ", id, " --> remove ");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // min (included) and max (excluded)
}

function handleAdd(dispatchTaskList, newTitle) {
  console.log("Add triggered!");

  if (newTitle) {
    const newTask = {
      id: String(getRandomNumber(200, 1000)),
      title: newTitle,
      createDate: new Date().toLocaleDateString("de-DE"),
      done: false,
      trash: false,
    };

    postTask(newTask)
      .then((task) => {
        console.log("Task at Server: ", task);
        dispatchTaskList({ type: "ADD", payload: newTask });
      })
      .catch((err) => {
        console.error(err);
      });

    console.log("In Handler [Add-Scheduled] ==> Task --> Added ");
  }
}

function handleRestore(dispatchTaskList, id) {
  patchTask(id, { trash: false })
    .then((task) => {
      console.log("Task at Server: ", task);
      dispatchTaskList({ type: "RESTORE", payload: { id } });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log(
    "In Handler [Restore-Scheduled] ==> Task " + id + " --> restore "
  );
}

function handleModify(dispatchTaskList, task) {
  // patchTask(task.id, { ...task }).then((task) => {
  //   console.log("Task at Server: ", task);
  //   dispatchTaskList({ type: "MODIFY", payload: { task: { ...task } } });
  // });
  putTask(task.id, { ...task })
    .then((task) => {
      console.log("Task at Server: ", task);
      dispatchTaskList({ type: "MODIFY", payload: { task: { ...task } } });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("In Handler [Modify-Scheduled] ==> Task ", task, " --> modify ");
}

export {
  handleDone,
  handleDelete,
  handleAdd,
  handleRestore,
  handleModify,
  handleEmptyTrash,
};
// export {
//   handleDone as onDone,
//   handleDelete as onDelete,
//   handleAdd as onAdd,
//   handleRestore as onRestore,
//   handleModify as onModify,
//   handleEmptyTrash as onEmpty,
// };
