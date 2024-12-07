import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import ShowError from "../components/ShowError";

function ErrorView({ source }) {
  const error = useRouteError();

  let message = "";
  let statusCode = "";
  let statusText = "";
  let pageHeader;

  console.log(error);

  if (isRouteErrorResponse(error)) {
    // error implements `ErrorResponse` interface
    console.error(error);
    message = error?.data || error.error?.message;
    statusCode = error.status;
    statusText = error.statusText;
  } else if (typeof error === "string") {
    // error type is 'string'
    console.error(error);
    message = error;
  } else if (error instanceof Error) {
    console.error(error);
    // error of type `Error`
    message = error.message;
  } else {
    // error unknown
    console.error(error);
    message = "Unknown error";
  }

  const MainNav = function ({ to }) {
    return (
      <header>
        <Link to={to} style={{ textDecoration: "none" }}>
          Home
        </Link>
      </header>
    );
  };

  switch (source) {
    case "USER":
      pageHeader = <Header></Header>;
      break;
    case "ADMIN":
      pageHeader = <MainNav to="/admin"></MainNav>;
      break;
    case "ROOT":
      pageHeader = pageHeader = <MainNav to="/"></MainNav>;
      break;
    case "USER/SCHEDULED-TASKS":
    case "USER/HOME":
    default:
      pageHeader = undefined;
      break;
  }

  return (
    <>
      {pageHeader}
      <ShowError
        source={source}
        status={{ statusCode, statusText }}
        message={message}
      ></ShowError>
    </>
  );
}

export default ErrorView;
