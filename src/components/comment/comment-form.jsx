import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createComment } from "../../api/postData";
//mui imports
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

function Comment_Form({ postId }) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = async (data) => {
    await createComment(postId, data.body);
    console.log(data);
  };

  return (
    <div>
      <IconButton aria-label="add to favorites">
        <CommentIcon onClick={handleClickOpen} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle id="form-dialog-title">leave a comment</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            <DialogContentText>comment</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="body"
              label=""
              type="text"
              required
              multiline
              fullWidth
              inputRef={register}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              comment
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default Comment_Form;
