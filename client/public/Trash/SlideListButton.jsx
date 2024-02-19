// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
// import React from "react";
// import { useCollapse } from "react-collapsed";

// const commonButtonSettings = {
//   position: "relative",
//   color: "#09316a",
//   left: "410px",
//   bottom: "110px",
//   width: "130px",
//   height: "28px",
//   justifyContent: "center",
//   alignItems: "center",

//   display: "grid",
//   fontSize: "12px",
// };

// const StatusItem = styled(Button)({
//   ...commonButtonSettings,
//   borderRadius: "0px",
// });

// const StatusButton = styled(Button)(({ indicator, isexpanded }) => {
//   const backgroundColor =
//     indicator === "To Do"
//       ? "#ff6c8f"
//       : indicator === "In Progress"
//       ? "yellow"
//       : "#45cc55";
//   return {
//     ...commonButtonSettings,
//     backgroundColor: backgroundColor,
//     borderRadius: "20px",
//     borderBottomRightRadius: isexpanded === "true" ? "0px" : "20px",
//     borderBottomLeftRadius: isexpanded === "true" ? "0px" : "20px",
//     ":hover": {
//       backgroundColor: backgroundColor,
//     },
//   };
// });

// export default function Collapsible() {
//   const [statusMenu, setStatusMenu] = React.useState({
//     isExpanded: false,
//     status: "To Do",
//   });
//   const { getCollapseProps, getToggleProps } = useCollapse(
//     statusMenu.isExpanded
//   );

//   const onStatusClick = (setStatus) => {
//     typeof setStatus === "string"
//       ? setStatusMenu((prevState) => ({
//           ...prevState,
//           status: setStatus,
//         }))
//       : setStatusMenu((prevState) => ({
//           ...prevState,
//           isExpanded: !statusMenu.isExpanded,
//         }));
//   };

//   const Buttons = [
//     {
//       status: "To Do",
//       style: { backgroundColor: "#ff6c8f" },
//     },
//     {
//       status: "In Progress",
//       style: { backgroundColor: "yellow" },
//     },
//     {
//       status: "Done",
//       style: {
//         borderBottomRightRadius: "20px",
//         borderBottomLeftRadius: "20px",
//         backgroundColor: "#45cc55",
//       },
//     },
//   ];

//   return (
//     <>
//       <StatusButton
//         key={statusMenu?.status}
//         indicator={statusMenu?.status}
//         isexpanded={`${statusMenu?.isExpanded}`}
//         {...getToggleProps({ onClick: onStatusClick })}
//       >
//         {statusMenu?.status}
//       </StatusButton>
//       <div {...getCollapseProps()}>
//         {Buttons.map((button) => (
//           <StatusItem
//             key={button.status}
//             style={button.style}
//             onClick={() =>
//               onStatusClick(button.status, button.style.backgroundColor)
//             }
//           >
//             {button.status}
//           </StatusItem>
//         ))}
//       </div>
//     </>
//   );
// }