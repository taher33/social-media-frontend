import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";

function Comment_Form(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="add to favorites">
        <CommentIcon onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">leave a comment</DialogTitle>
        <DialogContent>
          <DialogContentText>comment</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="text"
            required
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Comment_Form;
