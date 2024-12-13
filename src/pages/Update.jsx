import { useParams } from "react-router-dom";
import Edit from "../components/Edit";
import PendingTasks from "../components/PendingTasks";
import CompletedTasks from "../components/CompletedTasks";
import PurgedTasks from "../components/PurgedTasks";
import { useRef, useState } from "react";

function Update() {
  const params = useParams();
  let [targetCode, setTargetCode] = useState("PENDING");
  let previewRef = useRef({ Preview: null });

  console.log("function Update()");

  const handleEdit = (targetCode) => {
    setTargetCode(targetCode);

    if (targetCode === "DELETED") {
      previewRef.current.Preview = PurgedTasks;
    } else if (targetCode === "COMPLETED") {
      previewRef.current.Preview = CompletedTasks;
    } else {
      previewRef.current.Preview = null; // PendingTasks already in UI/view
    }
  };

  return (
    <div>
      <PendingTasks headingContainer="h1"></PendingTasks>
      {targetCode !== "PENDING" && (
        <>
          <h2>Preview</h2>
          <previewRef.current.Preview HeadingContainer="h3"></previewRef.current.Preview>
        </>
      )}

      {/* [BETTER SOLUTION with key prop]*/}
      {/* - Resetting all state by passing params.taskId as a key attribute to the Edit component */}
      {/* - All Edit components with different key attribute are different components and they will not share any state. */}
      {/* ---- [SOLUTION-PROBLEM-REMOUNT] -------------- */}
      <Edit key={params.taskId} id={params.taskId} onEdit={handleEdit} />
    </div>
  );
}
export default Update;

// ***********************************************************************
// ***********************************************************************
// import { useParams } from "react-router-dom";
// import Edit from "../components/Edit";
// import PendingTasks from "../components/PendingTasks";
// import CompletedTasks from "../components/CompletedTasks";
// import PurgedTasks from "../components/PurgedTasks";
// import { useRef, useState } from "react";

// function Update() {
//   const params = useParams();
//   // let [PreviewTasks, setPreviewTasks] = useState(null);
//   let [showPreviewTasks, setShowPreviewTasks] = useState(false);
//   let previewRef = useRef({ Preview: null });

//   console.log("function Update()");

//   const handleEdit = (targetCode) => {
//     console.log(targetCode);

//     if (targetCode === "DELETED") {
//       console.log(targetCode);
//       // setPreviewTasks(PurgedTasks);
//       setShowPreviewTasks(true);
//       previewRef.current.Preview = PurgedTasks;
//     } else if (targetCode === "COMPLETED") {
//       console.log(targetCode);
//       // setPreviewTasks(CompletedTasks);
//       setShowPreviewTasks(true);
//       previewRef.current.Preview = CompletedTasks;
//     } else {
//       console.log(targetCode);
//       // setPreviewTasks(null); // PendingTasks already in UI/view
//       setShowPreviewTasks(false); // PendingTasks already in UI/view
//       previewRef.current.Preview = null;
//     }
//   };

//   return (
//     <div>
//       <PendingTasks headingContainer="h1"></PendingTasks>
//       {/* {PreviewTasks != null ? (
//         <PreviewTasks HeadingContainer="h1"></PreviewTasks>
//       ) : undefined} */}
//       {showPreviewTasks && (
//         <>
//           <h2>Preview</h2>
//           <previewRef.current.Preview HeadingContainer="h3"></previewRef.current.Preview>
//         </>
//       )}

//       {/* [BETTER SOLUTION with key prop]*/}
//       {/* - Resetting all state by passing params.taskId as a key attribute to the Edit component */}
//       {/* - All Edit components with different key attribute are different components and they will not share any state. */}
//       {/* ---- [SOLUTION-PROBLEM-REMOUNT] -------------- */}
//       <Edit key={params.taskId} id={+params.taskId} onEdit={handleEdit} />
//     </div>
//   );
// }
// export default Update;

// ***********************************************************************
// ***********************************************************************
// import { useParams } from "react-router-dom";
// import Edit from "../components/Edit";
// import PendingTasks from "../components/PendingTasks";
// import CompletedTasks from "../components/CompletedTasks";
// import PurgedTasks from "../components/PurgedTasks";
// import { useState } from "react";

// function Update() {
//   const params = useParams();
//   let [PreviewTasks, setPreviewTasks] = useState(null);

//   console.log("function Update()");

//   const handleEdit = (targetCode) => {
//     console.log(targetCode);

//     if (targetCode === "DELETED") {
//       console.log(targetCode);
//       setPreviewTasks(PurgedTasks);
//     } else if (targetCode === "COMPLETED") {
//       console.log(targetCode);
//       setPreviewTasks(CompletedTasks);
//     } else {
//       console.log(targetCode);
//       setPreviewTasks(null); // PendingTasks already in UI/view
//     }
//   };

//   return (
//     <div>
//       <PendingTasks headingContainer="h1"></PendingTasks>
//       {PreviewTasks != null ? (
//         <PreviewTasks HeadingContainer="h1"></PreviewTasks>
//       ) : undefined}

//       {/* [BETTER SOLUTION with key prop]*/}
//       {/* - Resetting all state by passing params.taskId as a key attribute to the Edit component */}
//       {/* - All Edit components with different key attribute are different components and they will not share any state. */}
//       {/* ---- [SOLUTION-PROBLEM-REMOUNT] -------------- */}
//       <Edit key={params.taskId} id={+params.taskId} onEdit={handleEdit} />
//     </div>
//   );
// }
// export default Update;
