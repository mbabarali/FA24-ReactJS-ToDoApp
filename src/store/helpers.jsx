function handleDone(dispatchTaskList, id) {
  dispatchTaskList({ type: "DONE", payload: { id } });
  console.log("In Handler [Done-Scheduled] ==> Task " + id + " --> done ");
}

function handleDelete(dispatchTaskList, id) {
  dispatchTaskList({ type: "DELETE", payload: { id } });
  console.log("In Handler [Trash-Scheduled] ==> Task " + id + " --> trash ");
}

function handleAdd(dispatchTaskList, newTitle) {
  console.log("Add triggered!");
  if (newTitle) {
    dispatchTaskList({ type: "ADD", payload: { newTitle } });
    console.log("In Handler [Add-Scheduled] ==> Task --> Added ");
  }
}

function handleRestore(dispatchTaskList, id) {
  dispatchTaskList({ type: "RESTORE", payload: { id } });
  console.log(
    "In Handler [Restore-Scheduled] ==> Task " + id + " --> restore "
  );
}

function handleModify(dispatchTaskList, task) {
  dispatchTaskList({ type: "MODIFY", payload: { task: { ...task } } });
  console.log("In Handler [Modify-Scheduled] ==> Task ", task, " --> modify ");
}

export { handleDone, handleDelete, handleAdd, handleRestore, handleModify };
// export {
//   handleDone as onDone,
//   handleDelete as onDelete,
//   handleAdd as onAdd,
//   handleRestore as onRestore,
//   handleModify as onModify,
// };
