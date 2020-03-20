import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { db } from "./firebase";

export default function ChangeTitle(props) {
  const [title, setTitle] = useState("");

  const handleSaveTitle = () => {
    db.collection("users")
      .doc(props.user.uid)
      .collection("albums")
      .doc(props.album_id)
      .collection("photos")
      .doc(props.photoId)
      .update({ title: title })
      .then(() => {
        props.onClose();
      });
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Enter a new title for this photo</DialogTitle>
        <DialogContent>
          <TextField
            label="New Photo Title"
            value={title}
            fullWidth
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            autoFocus
            variant="contained"
            onClick={handleSaveTitle}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
