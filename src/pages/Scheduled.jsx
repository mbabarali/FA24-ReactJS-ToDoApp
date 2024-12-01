import PendingTasks from "../components/PendingTasks";
import Header from "../components/Header";

function Scheduled() {
  // --- Uncomment to observe error handling ---
  // if (true) {
  //   throw new Error("An error found."); /// Manually inform about Error.
  // }

  return (
    <>
      <Header />
      <PendingTasks headingContainer="h2" />
    </>
  );
}

export default Scheduled;
