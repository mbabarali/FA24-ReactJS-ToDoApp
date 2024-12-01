import Header from "../components/Header";

function Error({ source }) {
  return (
    <>
      <Header></Header>
      <h1 className="App">{source} ERROR</h1>
    </>
  );
}

export default Error;
