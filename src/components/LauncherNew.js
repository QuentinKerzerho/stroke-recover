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
import Image from "next/image";
export const dynamic = "force-dynamic";

import "@fontsource-variable/quicksand";

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
      <Container maxWidth="full" fixed>
        <Box className="flex w-3/5">
          <img
            style={{ borderRadius: "52px" }}
            key={diapo.photos[count].id}
            className="w-full rounded-large border border-black"
            component="img"
            image={diapo.photos[count].url}
            src={diapo.photos[count].url}
            alt="name"
          />
          <Box className="flex justify-center bg-white w-96">
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "5vw",
                WebkitTextStroke: "5px black",
                textShadow:
                  "5px 5px 0px black, 4px 5px 0px black, 5px 4px 0px black,4px 4px 0px black",
                transform: "translateX(-70px) translateY(40px)",
              }}
              className="font-bold text-center absolute text-white tracking-tighter"
            >
              00:45’
            </p>
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "5vw",
                transform: "translateX(-70px) translateY(40px)",
                color: "#EDEDE9",
              }}
              className="font-bold text-center absolute z-20 tracking-tighter"
            >
              00:45’
            </p>
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
