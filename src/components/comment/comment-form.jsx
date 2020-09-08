import React, { useState } from "react";
import {
  Modal,
  Fade,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import styles from "./comment.module.css";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import { useForm } from "react-hook-form";
import { createComment } from "../../api/postData";

function Comment_form(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [open, setOpen] = useState(false);
  const submit = async data => {
    const res = await createComment(props.postId, data);
    console.log(res.data);
    if (!res.error) setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="add to favorites">
        <CommentIcon onClick={handleOpen} />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={styles.paper}>
            <Typography variant="h6">
              write a reply to : {props.name}
            </Typography>
            <form onSubmit={handleSubmit(submit)} className={styles.form}>
              <TextField
                className={styles.input}
                inputRef={register}
                name="reply"
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
              <Button
                className={styles.btn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Reply
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export default Comment_form;
