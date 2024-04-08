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
import Divider from "@mui/material/Divider";

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
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.secondary"
            sx={{ marginTop: "1em", marginBottom: "1em" }}
            gutterBottom
          >
            Diaporama
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ marginBottom: "1.2em" }}
          >
            Créez votre diaporama et ajouté les photos que vous souhaitez en
            sélectionnant votre diaporama.
          </Typography>
          <ListDiapo
            diapos={diapos}
            newDiapo={newDiapo}
            deleteDia={deleteDia}
            onSelectedButtonChange={handleSelectedButton}
          />
          {""}
        </Container>
        <Divider sx={{ marginTop: "50px" }} />
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 6,
            pb: 6,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{ marginBottom: "1em" }}
            >
              Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Cliquez sur &apos; Ajouter &apos; afin d&apos;ajouter une photo à
              un diaporama. Si vous souhaitez retirer une image, appuyez sur
              &apos; Enlever &apos;. Utilisez l&apos;icône de la corbeille pour
              supprimer définitivement une photo. Vous pouvez également importer
              des photos à l&apos;album avec le bouton &apos; Importer des
              photos &apos;.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4em",
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
