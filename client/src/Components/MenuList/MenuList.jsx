import * as React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StatusItem = styled(Button)(({ indicator }) => {
  const BackgroundColor =
    indicator === "To Do"
      ? "#ff6c8f"
      : indicator === "In Progress"
      ? "yellow"
      : "#45cc55";
  return {
    backgroundColor: BackgroundColor,
    position: "relative",
    color: "#09316a",
    left: "410px",
    bottom: "110px",
    width: "130px",
    height: "34px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    borderRadius: "20px",
    ":hover": {
      backgroundColor: BackgroundColor,
    },
  };
});

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (setStatus) => {
    if (setStatus) {
      props.statchange({ id: props.id, status: setStatus });
    }
    setAnchorEl(null);
  };

  let statusvalue = "";
  switch (props.status) {
    case 1:
      statusvalue = "To Do";
      break;
    case 2:
      statusvalue = "In Progress";
      break;
    case 3:
      statusvalue = "Done";
      break;
  }

  return (
    <div>
      <StatusItem
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        indicator={statusvalue}
      >
        {statusvalue}
      </StatusItem>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{ backgroundColor: "#ff6c8f" }}
          onClick={() => handleClose(1)}
        >
          To Do
        </MenuItem>
        <MenuItem
          style={{ backgroundColor: "yellow" }}
          onClick={() => handleClose(2)}
        >
          In Progress
        </MenuItem>
        <MenuItem
          style={{ backgroundColor: "#45cc55" }}
          onClick={() => handleClose(3)}
        >
          Done
        </MenuItem>
      </Menu>
    </div>
  );
}
