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

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const photos = await getLatestPhoto();
  const diapos = await getLatestDiapo();
  const test = async () => {
    "use server";
    await createDiapo();
  };

  const handleChildVariable = (variable) => {
    setArticles(variable);
  };

  return (
    <div>
      <main>
        <ResponsiveAppBar />
        {/* <SeeTheSlidshow /> */}
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
        <ListDiapo diapos={diapos} newDiapo={test} />
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
              <FormDialog />
            </Box>
          </Container>
        </Box>
        <ListPhotoComponent photos={photos} />
      </main>
    </div>
  );
}
