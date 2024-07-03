import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions"; // Add this import
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ErrorModal = (props) => {
  return (
    <Dialog
      open="true"
      aria-labelledby="responsive-dialog-title"
      onClose={props.onConfirm}
    >
      <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onConfirm} variant="contained">OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
