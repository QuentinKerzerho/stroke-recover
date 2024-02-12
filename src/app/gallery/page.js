import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import { ListPhoto } from "@/src/datas/ListPhoto";
import SeeTheSlidshow from "@/src/components/SeeTheSlidshow";
import BasicButtons from "@/src/components/BasicButtons";
import ListPhotoComponent from "@/src/components/ListPhotoComponent";
import prisma from "@/lib/prisma";

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const feed = await prisma.photo.findMany({
    include: {
      name: true, // Inclure les données liées à 'photos'
    },
  });

  console.log(feed);
  const handleChildVariable = (variable) => {
    setArticles(variable);
  };
  return (
    <div>
      <main>
        <ResponsiveAppBar />
        {/* <SeeTheSlidshow /> */}
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
              <BasicButtons name="Ajouter des photos" to="/" />
            </Box>
          </Container>
        </Box>
        <ListPhotoComponent feed={feed} />
      </main>
    </div>
  );
}
