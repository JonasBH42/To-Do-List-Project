import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

export const ViewButton = styled(Button)({
  borderBottom: "4px solid #007206",
  position: "relative",
  left: "7px",
  top: "9px",
  color: "#007206",
  fontSize: "14px",
  fontFamily: "monospace",
});

export const ActionButton = styled(IconButton)(({ color }) => ({
  backgroundColor: color,
  height: "40px"
}));

export const AddButton = styled(Button)({
  width: "150px",
  height: "150px",
  backgroundColor: "#3ce2e8",
  position: "absolute",
  right: "370px",
  bottom: "450px",
  borderRadius: "35px",
  "&:hover": {
    backgroundColor: "#299fa3",
  },
});
