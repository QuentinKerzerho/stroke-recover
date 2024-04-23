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
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function Launcher({ id, diapos, names }) {
  const [nameField, setNameField] = useState("");
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [goodRes, setGoodRes] = useState(false);
  const [badRes, setBadRes] = useState(false);
  const [hint, setHint] = useState(false);

  const diapo = diapos.find((diapo) => diapo.id === id);

  let photo;
  let currentName = "Default Value";

  if (count < diapo.photos.length) {
    photo = diapo.photos[count];
    currentName =
      names.find((name) => name.id === photo.name_id) || "Default Value";
  }

  const handleHint = () => {
    setHint(true);
  };

  const clearTextField = () => setNameField("");

  const handleNext = () => {
    setCount(count + 1);
    clearTextField();
    setGoodRes(false);
    setBadRes(false);
    setHint(false);
    setGameOver;
    if (count >= diapo.photos.length - 1) {
      setGameOver(true);
    }
  };

  const handleClick = () => {
    if (nameField.toLowerCase() === currentName.name.toLowerCase()) {
      setGoodRes(true);
      setBadRes(false);
    } else {
      setBadRes(true);
      setGoodRes(false);
    }
  };

  if (gameOver) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.secondary"
          sx={{ marginTop: "1em", marginBottom: "1em" }}
          gutterBottom
        >
          Fin de la séance
        </Typography>
        <Link
          href="/"
          style={{
            alignSelf: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#FD853A",
            }}
            sx={{
              fontFamily: "Holtwood One Sc",
              paddingRight: "2em",
              paddingLeft: "2em",
              paddingTop: "1em",
              paddingBottom: "1em",
              fontSize: "1.5em",
            }}
            variant="contained"
          >
            Accueil
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around mt-8 ">
          <Box className="flex flex-col justify-center items-center">
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "#FD853A",
                borderRadius: "20px",
                fontFamily: "Holtwood One Sc",
              }}
              className="px-8 py-4 font-serif text-white"
            >
              Votre réponse
            </h1>
            <div>
              <form
                className="flex flex-col"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleClick(currentName);
                }}
              >
                <TextField
                  sx={{ paddingBottom: "50px", marginTop: "3rem" }}
                  id="outlined-basic"
                  variant="standard"
                  value={nameField ? nameField : ""}
                  onChange={(event) => {
                    setNameField(event.target.value);
                  }}
                />
                <Button
                  style={{ backgroundColor: "#FD853A", marginBottom: "50px" }}
                  variant="contained"
                  name="Valider"
                  to=""
                  type="submit"
                >
                  Valider
                </Button>
                {hint && <h1>Indice : {currentName.name}</h1>}
                {!hint && (
                  <IconButton
                    style={{
                      alignSelf: "center",
                      width: "50px",
                      height: "50px",
                    }}
                    onClick={handleHint}
                  >
                    {" "}
                    <TipsAndUpdatesIcon />
                  </IconButton>
                )}
              </form>
            </div>
          </Box>
          <Box className="flex justify-center items-center mt-12">
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
          {goodRes && !badRes && (
            <Box className="flex justify-center">
              <h1
                style={{
                  fontSize: "20px",
                  backgroundColor: "green",
                  borderRadius: "20px",
                  fontFamily: "Holtwood One Sc",
                  marginBottom: "50px",
                }}
                className="px-8 py-5 font-serif text-white items-center"
              >
                Bonne réponse
              </h1>
            </Box>
          )}
          {/* ... */}
          {badRes && !goodRes && (
            <Box className="flex justify-center mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0">
              <h1
                style={{
                  fontSize: "20px",
                  backgroundColor: "red",
                  borderRadius: "20px",
                  fontFamily: "Holtwood One Sc",
                  marginBottom: "50px",
                }}
                className="px-8 py-5 font-serif text-white items-center"
              >
                Mauvaise réponse
              </h1>
            </Box>
          )}
          {(badRes || goodRes) && (
            <Button
              style={{
                backgroundColor: "#FD853A",
                width: "200px",
                height: "50px",

                alignSelf: "center",
                marginBottom: "50px",
              }}
              variant="contained"
              name="Valider"
              to=""
              type="submit"
              onClick={handleNext}
            >
              Suivant
            </Button>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
