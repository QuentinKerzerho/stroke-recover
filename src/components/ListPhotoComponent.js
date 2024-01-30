import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ListPhoto } from "@/src/datas/ListPhoto";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function ListPhotoComponent({ setArticles }) {
  const [articles, setLocalArticles] = useState([]);

  const addToList = (card) => {
    setLocalArticles((prevArticles) => [...prevArticles, card]);
    setArticles((prevArticles) => [...prevArticles, card]);
  };

  return (
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
                    key={index}
                    onClick={() => addToList(card.name)}
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
