import { useForm, ValidationError } from "@formspree/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { FormControl } from "@mui/material";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
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
          }}
        >
          Formulaire de contact
        </Typography>
        <FormControl>
          <TextField
            id="nom"
            type="nom"
            name="nom"
            label="Nom"
            variant="outlined"
            sx={{ marginTop: "50px" }}
          />
          <ValidationError prefix="Nom" field="nom" errors={state.errors} />
          <TextField
            id="prenom"
            type="prenom"
            name="prenom"
            label="Prénom"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <ValidationError
            prefix="Prenom"
            field="prenom"
            errors={state.errors}
          />
          <TextField
            id="email"
            type="email"
            name="email"
            label="Email Address"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            sx={{ marginTop: "20px" }}
            label="Message"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            style={{ backgroundColor: "#FD853A", marginTop: "20px" }}
            sx={{
              m: 1,
              width: "25ch",
              fontFamily: "Holtwood One Sc",
              height: "3em",
            }}
            variant="contained"
            type="submit"
            disabled={state.submitting}
          >
            Envoyer
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
