// import "./List.css";
import React from "react";
import _ from "lodash";
import DraggableList from "./Draggables/DraggableList.jsx";
import Grid from "../../../src/Components/Grid/Grid.jsx";
const initialItems = _.range(1, 11).map((item) => {
  return {
    id: item,
    title: `Item ${item}`,
    description: `item ${item} is important`,
    date: new Date(),
    repeat: "always",
    steps: "1-2-3",
  };
});

export default function List() {
  const [items, setItems] = React.useState(initialItems);
  const handleDragEnd = (newOrderedItems) => {
    setItems(newOrderedItems);
  };

  return (
    <div className="list">
      {/* <DraggableList items={items} onDragEnd={handleDragEnd} /> */}
      <Grid></Grid>
    </div>
  );
}
