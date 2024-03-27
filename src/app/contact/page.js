"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Contact = () => {
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
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Box
          component="form"
          sx={{
            marginTop: "50px",
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Formulaire de contact
          </Typography>
          {/* <label>Prénom</label> */}
          <TextField id="outlined-basic" label="Nom" variant="outlined" />
          {/* <label>Nom</label> */}
          <TextField id="outlined-basic" label="Prénom" variant="outlined" />
          {/* <label>Mail</label> */}
          <TextField id="outlined-basic" label="Mail" variant="outlined" />
          <TextField
            id="outlined-multiline-static"
            label="Texte"
            multiline
            rows={4}
            defaultValue=""
          />
          <Button
            style={{ backgroundColor: "#FD853A" }}
            sx={{
              fontFamily: "Holtwood One Sc",
              width: "10px",
              height: "3em",
            }}
            variant="contained"
          >
            Envoyer
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
