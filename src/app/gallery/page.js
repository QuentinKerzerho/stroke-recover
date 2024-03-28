import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import FormDialog from "@/src/components/FormDialog";
import ListPhotoComponent from "@/src/components/ListPhotoComponent";
import ListDiapo from "@/src/components/ListDiapo";
import { getLatestPhoto } from "@/src/query/photo.query";
import { getLatestDiapo } from "@/src/query/diapo.query";
import { createDiapo } from "@/src/query/diapo.query";
import { deleteDiapo } from "@/src/query/diapo.query";
import { createPhoto } from "@/src/query/photo.query";

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const photos = await getLatestPhoto(); // On récupère les photos
  const diapos = await getLatestDiapo(); // On récupère les diapos

  const newPhoto = async (photoUrl, nameData) => {
    // On crée une nouvelle photo
    "use server";
    return await createPhoto({ photoUrl, nameData });
  };
  const deleteDia = async (id) => {
    // On supprime une diapo
    "use server";
    return await deleteDiapo(id);
  };

  const newDiapo = async () => {
    // On crée une nouvelle diapo
    "use server";
    return await createDiapo();
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
        <ListDiapo diapos={diapos} newDiapo={newDiapo} deleteDia={deleteDia} />{" "}
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
              <FormDialog newPhoto={newPhoto} photos={photos} />{" "}
              {/* Formulaire d'ajout de photo */}
            </Box>
          </Container>
        </Box>
        <ListPhotoComponent photos={photos} /> {/* Liste des photos */}
      </main>
    </div>
  );
}
