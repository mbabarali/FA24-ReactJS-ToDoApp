import EmptyTrash from "../components/EmptyTrash";
import PurgedTasks from "../components/PurgedTasks";

function Trash() {
  return (
    <>
      <EmptyTrash />
      <PurgedTasks HeadingContainer="h2" />
    </>
  );
}

export default Trash;
