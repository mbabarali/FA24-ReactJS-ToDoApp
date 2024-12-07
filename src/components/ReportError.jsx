import "./ReportError.css";

function ReportError({ message }) {
  // --- Uncomment to observe error handling ---
  // if (true) {
  //   throw new Error("[ReportError] An error found."); // Programmatically inform about Error.
  // }

  const onReportError = () => {
    throw new Error(message); // Programmatically inform about Error.
  };

  return (
    <div className="error-container">
      <button className="error-btn" onClick={onReportError}>
        Report Error: {message}
      </button>
    </div>
  );
}

export default ReportError;
