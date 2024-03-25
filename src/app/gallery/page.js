import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import FormDialog from "@/src/components/FormDialog";
import ListPhotoComponent from "@/src/components/ListPhotoComponent";
import prisma from "@/lib/prisma";
import ListDiapo from "@/src/components/ListDiapo";
import { getLatestPhoto } from "@/src/query/photo.query";
import { getLatestDiapo } from "@/src/query/diapo.query";
import { createDiapo } from "@/src/query/diapo.query";
import { deleteDiapo } from "@/src/query/diapo.query";
import { createPhoto } from "@/src/query/photo.query";

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const photos = await getLatestPhoto();

  const newPhoto = async (photoUrl, nameData) => {
    "use server";
    return await createPhoto({ photoUrl, nameData });
  };

  const diapos = await getLatestDiapo();
  const deleteDia = async (id) => {
    "use server";
    return await deleteDiapo(id);
  };

  const newDiapo = async () => {
    "use server";
    return await createDiapo();
  };

  const handleChildVariable = (variable) => {
    setArticles(variable);
  };

  return (
    <div>
      <main>
        <ResponsiveAppBar />
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
        <ListDiapo diapos={diapos} newDiapo={newDiapo} deleteDia={deleteDia} />
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
            </Box>
          </Container>
        </Box>
        <ListPhotoComponent photos={photos} />
      </main>
    </div>
  );
}
