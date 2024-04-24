"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles"; // Pour utiliser le thème
import { theme } from "@/src/theme/theme";
import ContactForm from "@/src/components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <ContactForm />
      </ThemeProvider>
    </div>
  );
};

export default Contact;

//{
/* <Box
          component="form"
          sx={{
            marginTop: "50px",
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
              marginBottom: "20px",
            }}
          >
            ! En cours de développement non fonctionnel !
          </Typography>
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
          {/* <label>Prénom</label> */
//}
//   <TextField
//     sx={{ m: 1, width: "25ch" }}
//     id="outlined-basic"
//     label="Nom"
//     variant="outlined"
//   />
//   {/* <label>Nom</label> */}
//   <TextField
//     sx={{ m: 1, width: "25ch" }}
//     id="outlined-basic"
//     label="Prénom"
//     variant="outlined"
//   />
//   {/* <label>Mail</label> */}
//   <TextField
//     sx={{ m: 1, width: "25ch" }}
//     id="outlined-basic"
//     label="Mail"
//     variant="outlined"
//   />
//   <TextField
//     sx={{ m: 1, width: "25ch" }}
//     id="outlined-multiline-static"
//     label="Texte"
//     multiline
//     rows={4}
//     defaultValue=""
//   />
//   <Button
//     style={{ backgroundColor: "#FD853A" }}
//     sx={{
//       m: 1,
//       width: "25ch",
//       fontFamily: "Holtwood One Sc",
//       height: "3em",
//     }}
//     variant="contained"
//   >
//     Envoyer
//   </Button>
// </Box> */}
