// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTasksDispatch } from "../store/TaskListProvider";

// Stateless Functional Component
function TaskPending(props) {
  const { id, createDate, title, className } = props;
  const { onDone, onDelete, onInProgress } = props;

  // const navigate = useNavigate();
  const dispatch = useTasksDispatch();

  return (
    <div className={className}>
      <span className="taskItem">{createDate}</span>
      <span className="taskItem">{title}</span>

      <button
        // Arrow Function (An anonymous function)

        // By default, event will bubble up through parent chain upto the top most parent 'windows',
        // via all elements whihc have event listener configured for the same event, 'onClick'
        onClick={(event) => {
          console.log("[onClick]: <button> ");
          event.stopPropagation();
          onInProgress(id);
        }}
        // onClickCapture={() => console.log("[onClick]: <button>")}
      >
        progressing
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Legacy Anonymous Function (An anonymous function)
        onClick={function (event) {
          event.stopPropagation();
          onDone(dispatch, id);
        }}
      >
        done
      </button>

      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      <button
        // Arrow Function (An anonymous function)
        onClick={(event) => {
          event.stopPropagation();
          onDelete(dispatch, id);
        }}
      >
        delete
      </button>

      {/* ---------- OPTION 1: Using useNavigate Hook ---------- */}
      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      {/* Relative Paths (without starting /) */}
      {/* <button
        // Arrow Function (An anonymous function)
        // onClick={(event) => {
        //   event.stopPropagation();
        //   onEdit(id);
        // }}
        onClick={(event) => {
          event.stopPropagation(); //Stop event bubbling
          navigate(`scheduled-tasks/${id}`); // Relative Paths (without starting /) 
        }}
      >
        edit
      </button> */}

      {/* ---------- OPTION 2: Using <Link> ---------- */}
      {/* This component's UI will change onClick as result of the change in state variable in its incestor */}
      {/* Absolute Paths (starting /) */}
      <Link
        onClick={(event) => event.stopPropagation()} //Stop event bubbling
        to={`/user/scheduled-tasks/${id}`} // Absolute Path
        // relative="route" // [Default]
        // relative="path"
        className="linkToButton"
      >
        edit
      </Link>
    </div>
  );
}

export default TaskPending;
