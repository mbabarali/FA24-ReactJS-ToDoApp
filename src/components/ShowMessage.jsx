// Functional Component
function ShowMessage(props) {
  console.log(props.children);

  return <div>{props.children}</div>;
}

export default ShowMessage;
