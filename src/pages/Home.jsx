import AddTask from "../components/AddTask";
import ManageTasks from "../components/ManageTasks";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <AddTask />
      <ManageTasks />
    </>
  );
}

export default Home;
