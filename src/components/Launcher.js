"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { ListPhoto } from "@/src/datas/ListPhoto"; // provisoir pour test
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Launcher() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#FD853A",
        main: "#FD853A",
        dark: "#FD853A",
        contrastText: "#fff",
      },
      secondary: {
        light: "#FD853A",
        main: "#FD853A",
        dark: "#FD853A",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            marginTop: "45px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "#FD853A",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "100px",
                  lg: "100px",
                },
              }}
            >
              Votre réponse
            </h1>
            <TextField
              id="outlined-basic"
              variant="standard"
              sx={{
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "100px",
                  lg: "100px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              key={ListPhoto[2].id}
              sx={{
                width: "400px",
                height: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
              component="img"
              image={ListPhoto[3].cover.src}
              alt="name"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            marginTop: "45px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "green",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
              }}
            >
              Bonne réponse
            </h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "red",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
                alignItems: "center",
              }}
            >
              Mauvaise réponse
            </h1>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
