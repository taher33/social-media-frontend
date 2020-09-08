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

function Create_page() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogContent>
          <DialogContentText>
            To create a new page you have to select a unique name , please enter
            a name here.
          </DialogContentText>
          <TextField
            autoFocus
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
          <Button onClick={handleClose} color="primary">
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Create_page;
