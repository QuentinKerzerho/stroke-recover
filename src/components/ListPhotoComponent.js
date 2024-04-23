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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export const dynamic = "force-dynamic";

export default function ListPhotoComponent({
  localPhoto,
  selectedButton,
  supPhoto,
  removePhotoFromDiapoFun,
  addPhotoToDiapoFun,
}) {
  if (!selectedButton) {
    return null;
  }

  const handleNewPhoto = (id) => {
    supPhoto(id);
  };

  console.log(localPhoto);
  const handleAddPhoto = (id) => {
    console.log(photos);
    addPhotoToDiapoFun(id, selectedButton);
  };
  const handleRemovePhoto = (id) => {
    removePhotoFromDiapoFun(id);
  };

  return (
    <Container sx={{ pt: 3, pb: 3 }} maxWidth="xl">
      <Grid container spacing={4}>
        {localPhoto
          .sort((a, b) => a.name.name.localeCompare(b.name.name))
          .map((photo) =>
            photo.diapo_id === selectedButton ? (
              <Grid key={`selected-${photo.id}`} item xs={12} sm={6} md={3}>
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
                        style={{ backgroundColor: "red" }}
                        sx={{
                          fontFamily: "Holtwood One Sc",
                          height: "50px",
                          fontSize: "15px",
                        }}
                        onClick={() => handleRemovePhoto(photo.id)}
                      >
                        Enlever
                      </Button>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleNewPhoto(photo.id)}
                      >
                        {" "}
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ) : (
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
                        style={{ backgroundColor: "green" }}
                        sx={{
                          fontFamily: "Holtwood One Sc",
                          width: "150px",
                          height: "50px",
                          fontSize: "15px",
                        }}
                        onClick={() => handleAddPhoto(photo.id)}
                      >
                        Ajouter
                      </Button>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleNewPhoto(photo.id)}
                      >
                        {" "}
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
      </Grid>
    </Container>
  );
}
