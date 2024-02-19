import "../App.css";
// import * as React from "react";
// import { PieChart } from "@mui/x-charts/PieChart";
// import { DataGrid } from "@mui/x-data-grid";
// import { useState } from "react";
// import { colors } from "@mui/material";
// import { useSpring, animated } from "react-spring";

// const Spinner = ({ items }) => {
//   const [list, setList] = useState(items);

//   const dragStart = (e, index) => {
//     e.dataTransfer.setData("itemIndex", index);
//   };

//   const drop = (e, index) => {
//     const itemIndex = e.dataTransfer.getData("itemIndex");
//     const newList = [...list];
//     const temp = newList[itemIndex];
//     newList[itemIndex] = newList[index];
//     newList[index] = temp;

//     setList(newList);
//   };

//   return (
//     // <div className="t">
//       <ul>
//         {list.map((item, index) => (
//           <li
//             key={index}
//             className="m"
//             draggable
//             onDragStart={(e) => dragStart(e, index)}
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={(e) => {drop(e, index);}}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     // </div>
//   );
// };


// export default DraggableList;
