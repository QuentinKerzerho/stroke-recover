"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import { ListPhoto } from "@/src/datas/ListPhoto";
import ListDiapo from "@/src/components/ListDiapo";
import SeeTheSlidshow from "@/src/components/SeeTheSlidshow";
import BasicButtons from "@/src/components/BasicButtons";

// ----------------------------------------------------------------------------------------------------------
export default function Gallery() {
  //   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [articles, setArticles] = useState([]);

  const addToList = () => {
    setArticles([...ListPhoto]);
  };

  return (
    <div>
      <main>
        <ResponsiveAppBar />
        <SeeTheSlidshow />
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
              Vous avez la possibilité d'ajouter les photos qui vous conviennent
              ici.
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ListPhoto.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <CardMedia
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      component="img"
                      height="50"
                      image={card.cover.src}
                      alt="name"
                    />
                    <Typography
                      sx={{ marginTop: "40px" }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.name}
                    </Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#FD853A" }}
                        sx={{
                          fontFamily: "Holtwood One Sc",
                          width: "150px",
                          height: "50px",
                          fontSize: "15px",
                        }}
                      >
                        Ajouter
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
