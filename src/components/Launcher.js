// Composant pour lancer le jeu

"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/src/theme/theme";
import { useState } from "react";

export default function Launcher({ id, photos, diapos, names }) {
  const [nameField, setNameField] = React.useState("");
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [goodRes, setGoodRes] = useState(false);
  const [badRes, setBadRes] = useState(false);

  const diapo = diapos.find((diapo) => diapo.id === id);
  let photo;
  let currentName = "Default Value";

  if (count < diapo.photos.length) {
    photo = diapo.photos[count];
    currentName =
      names.find((name) => name.id === photo.name_id) || "Default Value";
  }

  const handleSubmit = () => {
    setGoodRes(false);
    setBadRes(false);
    setNameField("");
  };

  const handleClick = () => {
    if (nameField === currentName.name) {
      console.log("Bonne réponse");
      setGoodRes(true);
    } else {
      setBadRes(true);
    }
    setCount(count + 1);
    if (count >= diapo.photos.length - 1) {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return <h1>Fin du jeu</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around mt-12">
          <Box className="flex flex-col justify-center items-center mb-16">
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "#FD853A",
                borderRadius: "20px",
                fontFamily: "Holtwood One Sc",
              }}
              className="px-8 py-4 font-serif text-white mt-15 md:mt-30 lg:mt-30"
            >
              Votre réponse
            </h1>
            <form
              className="flex flex-col"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
                handleClick(currentName);
              }}
            >
              <TextField
                sx={{ paddingBottom: "50px" }}
                id="outlined-basic"
                variant="standard"
                className="mt-4 md:mt-24 lg:mt-24"
                onChange={(event) => {
                  setNameField(event.target.value);
                }}
              />
              <Button
                style={{ backgroundColor: "#FD853A" }}
                variant="contained"
                name="Valider"
                to=""
                type="submit"
              >
                Valider
              </Button>
            </form>
          </Box>
          <Box className="flex justify-center items-center">
            <CardMedia
              key={diapo.photos[count].id}
              className="w-96 h-96 rounded-lg border border-black"
              component="img"
              image={diapo.photos[count].url}
              alt="name"
            />
          </Box>
        </Box>
        {}
        <Box className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around mt-12">
          {goodRes && (
            <Box className="flex justify-center">
              <h1
                style={{
                  fontSize: "20px",
                  backgroundColor: "green",
                  borderRadius: "20px",
                  fontFamily: "Holtwood One Sc",
                }}
                className="px-8 py-5 font-serif text-white items-center"
              >
                Bonne réponse
              </h1>
            </Box>
          )}
          {/* ... */}
          {badRes && (
            <Box className="flex justify-center mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0">
              <h1
                style={{
                  fontSize: "20px",
                  backgroundColor: "red",
                  borderRadius: "20px",
                  fontFamily: "Holtwood One Sc",
                }}
                className="px-8 py-5 font-serif text-white items-center"
              >
                Mauvaise réponse
              </h1>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
