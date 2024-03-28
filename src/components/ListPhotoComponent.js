// composant pour afficher les photos

"use client";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import React from "react";

export default function ListPhotoComponent({ photos }) {
  return (
    <Container sx={{ pt: 3, pb: 3 }}>
      {/* End hero unit */}
      <Grid container spacing={6}>
        {photos.map((photo) => (
          <Grid key={photo.id} item xs={12} sm={6} md={3}>
            <Card
              key={photo.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  key={photo.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "250px",
                  }}
                  component="img"
                  src={photo.url}
                  alt="name"
                />

                <Typography
                  sx={{ marginTop: "40px", marginBottom: "30px" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {photo.name.name}
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
  );
}
