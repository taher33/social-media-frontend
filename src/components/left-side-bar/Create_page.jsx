import React from "react";
import {
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { useForm } from "react-hook-form";
import { create_page } from "../../api/postData";

function Create_page() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = async data => {
    console.log(data);
    await create_page(data.name);
  };

  return (
    <div>
      <Tab
        onClick={handleClickOpen}
        icon={<PostAddIcon />}
        aria-label="new page"
        label="create a new page"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">create a page</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            <DialogContentText>
              To create a new page you have to select a unique name , please
              enter a name here.
            </DialogContentText>
            <TextField
              autoFocus
              inputRef={register}
              name="name"
              margin="dense"
              id="name"
              label="page name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default Create_page;
