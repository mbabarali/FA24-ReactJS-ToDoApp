import { useParams } from "react-router-dom";
import Edit from "../components/Edit";
import PendingTasks from "../components/PendingTasks";

function Update() {
  const params = useParams();

  return (
    <div>
      <PendingTasks headingContainer="h1"></PendingTasks>

      {/* [BETTER SOLUTION with key prop]*/}
      {/* - Resetting all state by passing params.taskId as a key attribute to the Edit component */}
      {/* - All Edit components with different key attribute are different components and they will not share any state. */}
      {/* ---- [SOLUTION-PROBLEM-REMOUNT] -------------- */}
      <Edit key={params.taskId} id={+params.taskId} />
    </div>
  );
}
export default Update;
