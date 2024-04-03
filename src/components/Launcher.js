// Composant pour lancer le jeu

"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { ListPhoto } from "@/src/datas/ListPhoto"; // provisoir pour test
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/src/theme/theme";

export default function Launcher() {
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
            <TextField
              id="outlined-basic"
              variant="standard"
              className="mt-4 md:mt-24 lg:mt-24"
            />
          </Box>
          <Box className="flex justify-center items-center">
            <CardMedia
              key={ListPhoto[1].id}
              className="w-96 h-96 rounded-lg border border-black"
              component="img"
              image={ListPhoto[1].cover.src}
              alt="name"
            />
          </Box>
        </Box>
        <Box className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around mt-12">
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
