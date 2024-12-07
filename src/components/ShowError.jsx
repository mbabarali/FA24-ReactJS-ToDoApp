import "./ShowError.css";

export default function ShowError({ source, status, message }) {
  return (
    <span className="error-report">
      <div className="source-container">
        <span className="warning-logo">&#9888;</span>
        <span className="error-source">{source}</span>
        <span className="warning-logo">&#9888;</span>
      </div>

      <div className="status-container">
        <span className="error-status">
          {"[" +
            (status?.statusCode ||
              status?.statusText ||
              status?.status ||
              "n.a") +
            "]: " +
            (status?.statusText || status?.status || "n.a")}
        </span>
      </div>

      <div className="message-container">
        <span className="error-message">{message ?? "n.a"}</span>
      </div>
    </span>
  );
}
