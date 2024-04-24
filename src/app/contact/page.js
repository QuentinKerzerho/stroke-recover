"use client";
import * as React from "react";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
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
