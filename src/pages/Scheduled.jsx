import PendingTasks from "../components/PendingTasks";
import ReportError from "../components/ReportError";

function Scheduled() {
  // --- Uncomment to observe error handling ---
  // if (true) {
  //   throw new Error("An error found."); // Programmatically inform about Error.
  // }

  return (
    <>
      <ReportError message="Report error under scheduled tasks..." />
      <PendingTasks headingContainer="h2" />
    </>
  );
}

export default Scheduled;
