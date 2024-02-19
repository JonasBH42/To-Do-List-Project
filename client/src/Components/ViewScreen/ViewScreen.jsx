import { forwardRef } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

export const Screen = styled(Dialog)({
  width: "400px",
  height: "400px",
  position: "absolute",
  top: "20%",
  left: "40%",
  borderRadius: "123px",
});

export function ViewScreen({ noteViewInfo, seOpen }) {
  return (
    <>
      <Screen
        fullScreen={true}
        open={noteViewInfo?.isOpened}
        onClose={() => seOpen((prev) => ({ ...prev, isOpened: false }))}
      >
        <DialogTitle>{noteViewInfo?.info?.title}</DialogTitle>
        <DialogContent sx={{ position: "absolute", top: "80px" }}>
          {noteViewInfo?.info?.content}
        </DialogContent>
      </Screen>
    </>
  );
}
