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
import Typography from "@mui/material/Typography";
import Link from "next/link";
export const dynamic = "force-dynamic";

import "@fontsource-variable/quicksand";

export default function NewLauncher({ id, diapos, names }) {
  const [nameField, setNameField] = useState("");
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [goodRes, setGoodRes] = useState(false);
  const [badRes, setBadRes] = useState(false);
  const [hint, setHint] = useState(false);

  const [color, setColor] = useState(goodRes ? "green" : "white");

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

  const handleClick = () => {
    if (nameField.toLowerCase() === currentName.name.toLowerCase()) {
      setGoodRes(true);
      setBadRes(false);
      setColor("#009B4D");
      console.log("Bonnes réponse");
    } else {
      setBadRes(true);
      setGoodRes(false);
      setColor("#E7473C");
      console.log("Mauvaise réponse");
    }
    setTimeout(() => {
      setColor("white"); // Réinitialiser la couleur
      setCount(count + 1); // Passer à l'image suivante
      setGoodRes(false);
      setBadRes(false);
      setHint(false);
      if (count >= diapo.photos.length - 1) {
        clearTextField();
        setGameOver(true);
      }
    }, 2000);
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
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" fixed>
          <Box className="flex justify-center mt-10">
            <Box className="flex w-2/5 z-10">
              <CardMedia
                component="img"
                width={300}
                style={{ borderRadius: "52px" }}
                key={diapo.photos[count].id}
                className="rounded-large border border-black"
                image={diapo.photos[count].url}
                src={diapo.photos[count].url}
                alt="name"
                sx={{ width: 600, height: 600, borderRadius: "52px" }}
              />
              <Box className="absolute flex mt-8 w-2/5 justify-end">
                {/* <Box className="flex justify-between gap-2 ml-10">
                  <Box
                    style={{
                      backgroundColor: "#D9D9D9",
                    }}
                    className="flex self-center items-center border-2 border-black justify-center w-8 h-8 rounded-full text-white font-bold"
                  ></Box>
                  <Box
                    style={{
                      backgroundColor: "#D9D9D9",
                    }}
                    className="flex self-center items-center border-2 border-black justify-center w-8 h-8 rounded-full text-white font-bold"
                  ></Box>
                  <Box
                    style={{
                      backgroundColor: "#D9D9D9",
                    }}
                    className="flex self-center items-center border-2 border-black justify-center w-8 h-8 rounded-full font-bold"
                  >
                    ?
                  </Box>
                </Box> */}
                <Box className="flex mr-14" style={{}}>
                  <Box
                    style={{
                      fontSize: "20px",
                      WebkitTextStroke: "5px black",
                    }}
                    className=" self-center items-center justify-center font-bold text-white"
                  >
                    {count + 1}/{diapo.photos.length}
                  </Box>
                  <Box
                    style={{
                      fontSize: "20px",
                    }}
                    className="absolute self-center items-center justify-center font-bold text-white"
                  >
                    {count + 1}/{diapo.photos.length}
                  </Box>
                </Box>
              </Box>

              <form
                style={{ width: "600px", paddingBottom: "2rem" }}
                onSubmit={(event) => {
                  event.preventDefault();
                  handleClick(currentName);
                }}
                className="flex flex-col absolute self-end items-center"
              >
                <TextField
                  onChange={(event) => {
                    setNameField(event.target.value);
                  }}
                  placeholder="écrire ici le nom..."
                  size="small"
                  InputLabelProps={{
                    style: {
                      color: "white",
                      textTransform: "uppercase",
                      fontSize: "13px",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "15px",
                      backdropFilter: "blur(10px)",
                      backdropFilter: "brightness(30%)",
                      color: "white",
                    },
                  }}
                  color="tertiary"
                  style={{
                    width: "70%",
                  }}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  className="border-2 border-black rounded-full"
                  style={{
                    backgroundColor: "#FD853A",
                    color: "black",
                    marginTop: "1rem",
                    backgroundColor: "black",
                    color: "white",
                    width: "70%",
                  }}
                  sx={{
                    fontFamily: "Quicksand Variable",
                    textTransform: "none",
                    color: "black",
                    "&:hover": {
                      borderWidth: "2px", // Changez cette valeur pour ajuster la taille du contour lors du survol
                      borderColor: "black",
                    },
                  }}
                >
                  Valider
                </Button>
              </form>
            </Box>

            <Box
              className="flex flex-col w-2/5 bg-white right-10 relative drop-shadow-lg"
              style={{
                borderTopRightRadius: "35px",
                borderBottomRightRadius: "35px",
                backgroundColor: color,
              }}
            >
              {/* <Box className="flex w-auto justify-center mt-10"> */}
              {/* <Box
                  className=" flex relative"
                  style={{ transform: "translateX(-50px) translateY(20px)" }}
                >
                  <p
                    style={{
                      fontSize: "5vw",
                      WebkitTextStroke: "5px black",
                      textShadow:
                        "5px 5px 0px black, 4px 5px 0px black, 5px 4px 0px black,4px 4px 0px black",
                    }}
                    className="font-bold text-center absolute text-white tracking-tighter"
                  >
                    00:45’
                  </p>
                  <p
                    style={{
                      fontSize: "5vw",
                      color: "#EDEDE9",
                    }}
                    className="font-bold text-center  z-20 tracking-tighter"
                  >
                    00:45’
                  </p>
                </Box> */}
              {/* <Box
                  style={{ transform: "translateY(40px) translateX(50px)" }}
                  className="flex flex-col items-end"
                >
                  <p
                    style={{
                      fontSize: "1vw",
                      fontWeight: "bold",
                      transform: "translateY(10px)",
                    }}
                  >
                    TON SCORE
                  </p>
                  <p
                    style={{
                      marginTop: "0",
                      fontSize: "3vw",
                      fontWeight: "bold",
                    }}
                  >
                    04
                  </p>
                </Box> */}
              {/* </Box> */}
              {/* <Box className="flex self-center justify-between mt-8 ml-10 border-4	 rounded-full w-4/5 h-16">
                <Box className="flex ml-2 self-center  items-center justify-center w-10 h-10 bg-black rounded-full text-white font-bold">
                  30&apos;
                </Box>
                <Box className="flex text-lg mr-2 self-center items-center justify-center w-16 h-10 bg-white rounded-full font-bold ">
                  🎨👀
                </Box>
              </Box> */}
              <Box className="flex self-center justify-between mt-10 ml-10 border-4 rounded-full w-4/5 h-16">
                {/* <Box className="flex ml-2 self-center items-center justify-center w-10 h-10 bg-black rounded-full text-white font-bold">
                  60
                </Box> */}
                {/* Echanger si on veut mettre l'ancien */}
                <Button
                  onClick={handleHint}
                  className="hover:bg-red flex ml-2 self-center items-center justify-center w-10 h-10 bg-black text-white font-bold"
                  style={{ borderRadius: "100%" }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "grey", // Changez cette valeur pour ajuster la taille du contour lors du survol
                    },
                  }}
                >
                  ?
                </Button>
                {hint && (
                  <Box className="flex text-md mr-4 self-center items-center justify-center">
                    {currentName.name}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
