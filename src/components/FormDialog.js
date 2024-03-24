"use client";

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material//Dialog";
import DialogActions from "@mui/material//DialogActions";
import DialogContent from "@mui/material//DialogContent";
import DialogContentText from "@mui/material//DialogContentText";
import DialogTitle from "@mui/material//DialogTitle";
import { useState } from "react";

export default function FormDialog({ newPhoto, newName }) {
  const [nameData, setName] = React.useState("");
  const [photoUrl, setUrl] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const nameDataTotal = { name: nameData };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameData, photoUrl);
    newPhoto(photoUrl, nameDataTotal);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setUrl("");
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
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter une photo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="photoName"
            label="Nom de la photo"
            type="text"
            value={nameData}
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            id="photoUrl"
            label="Url de la photo"
            type="text"
            className="mt-0"
            value={photoUrl}
            onChange={handleUrlChange}
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
            style={{ backgroundColor: "#FD853A" }}
            sx={{
              fontFamily: "Holtwood One Sc",
            }}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
