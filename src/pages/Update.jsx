import { useParams } from "react-router-dom";
import Edit from "../components/Edit";
import Header from "../components/Header";

function Update() {
  const params = useParams();

  return (
    <>
      <Header />
      <Edit id={+params.taskId} />
    </>
  );
}
export default Update;
