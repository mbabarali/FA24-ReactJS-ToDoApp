// Functional Component
function ShowMessage({ children }) {
  console.log(children);

  return <div>{children}</div>;
}

export default ShowMessage;
