import { useParams } from "react-router-dom";
import Edit from "../components/Edit";

function Update() {
  const params = useParams();
  return <Edit id={+params.taskId} />;
}
export default Update;
