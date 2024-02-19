import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Info.css";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Collapsible from "../../../../src/Components/MenuList/MenuList";

const ViewButton = styled(Button)({
  borderBottom: "4px solid #066510",
  position: "relative",
  left: "220px",
  bottom: "15%",
  color: "#066510",
  fontSize: "15px",
  fontFamily: "monospace",
});

const StatusButton = styled(Button)(({ indicator }) => ({
  backgroundColor:
    indicator === 1 ? "red" : indicator === 2 ? "green" : "black",
  position: "relative",
  color: "#09316a",
  left: "360px",
  width: "80px",
  borderRadius: "20px",
  ":hover": {
    backgroundColor: "red",

    // color:""
  },
}));

const DraggableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const [indicator, setIndicator] = useState(1);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "16px",
    marginBottom: "8px",
    borderRadius: "15px",
    backgroundColor: "#4287f5",
    width: "550px",
    height: "100px",
    boxShadow:
      "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
    borderLeft: "15px solid green",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="title-description ">
        <b>{item.title}</b>
      </div>
      <div className="title-description ">{item.description}</div>
      <ViewButton onClick={() => setIndicator(2)}>View Task</ViewButton>
      {/* <Collapsible></Collapsible> */}
    </div>
    
  );
};

export default DraggableItem;
