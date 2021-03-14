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

// import { useForm } from "react-hook-form";
// import { createComment } from "../../api/postData";

function Comment_Form(props) {
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const submit = async data => {
  //   const res = await createComment(props.postId, data);
  //   console.log(res.data);
  //   if (!res.error) setOpen(false);
  // };

  return (
    <div>
      <IconButton aria-label="add to favorites">
        <CommentIcon onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        fullWidth
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

// <div>
// <IconButton aria-label="add to favorites">
//   <CommentIcon onClick={handleOpen} />
// </IconButton>
// <Modal
//   aria-labelledby="transition-modal-title"
//   aria-describedby="transition-modal-description"
//   className={styles.modal}
//   open={open}
//   onClose={handleClose}
//   closeAfterTransition
//   BackdropComponent={Backdrop}
//   BackdropProps={{
//     timeout: 500,
//   }}
// >
//   <Fade in={open}>
//     <Paper className={styles.paper}>
//       <Typography variant="h6">
//         write a reply to : {props.name}
//       </Typography>
//       <form onSubmit={handleSubmit(submit)} className={styles.form}>
//         <TextField
//           className={styles.input}
//           inputRef={register}
//           name="reply"
//           id="standard-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//         />
//         <Button
//           className={styles.btn}
//           type="submit"
//           variant="contained"
//           color="primary"
//         >
//           Reply
//         </Button>
//       </form>
//     </Paper>
//   </Fade>
// </Modal>
// </div>
