// Composant pour ajouter une photo

"use client";

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material//Dialog";
import DialogActions from "@mui/material//DialogActions";
import DialogContent from "@mui/material//DialogContent";
import DialogTitle from "@mui/material//DialogTitle";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/src/theme/theme";

export default function FormDialog({ newPhoto, photos }) {
  const [nameData, setName] = React.useState(""); // Gestion du nom de la photo
  const [photoUrl, setUrl] = React.useState(""); // Gestion de l'url de la photo
  const [open, setOpen] = React.useState(false); // Gestion de l'ouverture de la boîte de dialogue
  const nameDataTotal = { name: nameData }; // Objet contenant le nom de la photo

  const [localPhoto, setLocalPhoto] = useState([...photos]); // Gestion des photos et avec createdPhoto on ajoute une photo ligne 34

  const handleNameChange = (event) => {
    // Gestion du changement de nom
    setName(event.target.value);
  };
  const handleUrlChange = (event) => {
    // Gestion du changement d'url
    setUrl(event.target.value);
  };
  const handleSubmit = async (event) => {
    // Gestion de la soumission du formulaire
    event.preventDefault();
    const createdPhoto = await newPhoto(photoUrl, nameDataTotal);
    setLocalPhoto((prevPhotos) => [...prevPhotos, createdPhoto]);
    handleClose();
  };

  const handleClickOpen = () => {
    // Gestion de l'ouverture de la boîte de dialogue
    setOpen(true);
  };

  const handleClose = () => {
    // Gestion de la fermeture de la boîte de dialogue
    setOpen(false);
    setName("");
    setUrl("");
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}
