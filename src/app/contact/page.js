"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div>
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
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
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
    </div>
  );
};

export default Contact;
