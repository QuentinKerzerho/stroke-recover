"use client";

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material//Dialog";
import DialogActions from "@mui/material//DialogActions";
import DialogContent from "@mui/material//DialogContent";
import DialogContentText from "@mui/material//DialogContentText";
import DialogTitle from "@mui/material//DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#FD853A" }}
        sx={{
          fontFamily: "Holtwood One Sc",
          paddingRight: "2em",
          paddingLeft: "2em",
          paddingTop: "1em",
          paddingBottom: "1em",
          fontSize: "1.5em",
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Ajouter des photos
      </Button>
      <Dialog
        maxWidth="sm"
        fullWidth="true"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter une photo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom de la photo"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Url de la photo"
            type="text"
            fullWidth
            className="mt-0"
          />
        </DialogContent>
        <DialogActions className="flex flex-row justify-center mb-3">
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#FD853A" }}
            sx={{
              fontFamily: "Holtwood One Sc",
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#FD853A" }}
            sx={{
              fontFamily: "Holtwood One Sc",
            }}
            variant="contained"
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
