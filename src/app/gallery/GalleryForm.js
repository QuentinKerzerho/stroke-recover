"use client";

import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import FormDialog from "@/src/components/FormDialog";
import ListPhotoComponent from "@/src/components/ListPhotoComponent";
import ListDiapo from "@/src/components/ListDiapo";
import { ThemeContext } from "@emotion/react";

export const dynamic = "force-dynamic";

export default function GalleryForm({
  diapos,
  photos,
  newPhoto,
  newDiapo,
  deleteDia,
  supPhoto,
  addPhotoToDiapoFun,
  removePhotoFromDiapoFun,
}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleSelectedButton = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <main>
        <ResponsiveAppBar /> {/* Barre de navigation */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ marginTop: "1em" }}
          gutterBottom
        >
          Diaporama
        </Typography>
        <ListDiapo
          diapos={diapos}
          newDiapo={newDiapo}
          deleteDia={deleteDia}
          onSelectedButtonChange={handleSelectedButton}
        />{" "}
        {/* Liste des diapos */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Vous avez la possibilité d&apos;ajouter les photos qui vous
              conviennent ici.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormDialog newPhoto={newPhoto} photos={photos} />
              {/* Formulaire d'ajout de photo */}
            </Box>
          </Container>
        </Box>
        <ListPhotoComponent
          photos={photos}
          selectedButton={selectedButton}
          supPhoto={supPhoto}
          addPhotoToDiapoFun={addPhotoToDiapoFun}
          removePhotoFromDiapoFun={removePhotoFromDiapoFun}
        />{" "}
        {/* Liste des photos */}
      </main>
    </div>
  );
}
