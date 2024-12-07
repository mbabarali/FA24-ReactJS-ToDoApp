import { useParams } from "react-router-dom";
import Edit from "../components/Edit";
import PendingTasks from "../components/PendingTasks";

function Update() {
  const params = useParams();

  return (
    <div>
      <PendingTasks headingContainer="h1"></PendingTasks>
      <Edit id={+params.taskId} />
    </div>
  );
}
export default Update;
