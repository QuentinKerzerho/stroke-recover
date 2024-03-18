"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const ListDiapo = ({ diapos: initialDiapos, newDiapo, deleteDia }) => {
  // État pour suivre l'affichage es diapositives
  const [diapos, setDiapos] = useState(initialDiapos);

  // Bouton diaporama selectionné
  const [selectedButton, setSelectedButton] = useState(null);

  // Gestion du clic sur un bouton
  const handleButtonClick = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

  // Gestion du clic sur le bouton +
  const handleButtonPlusClick = () => {
    const diapo = newDiapo(); // Remplacez ceci par votre logique de création de diapo
    setDiapos([...diapos, diapo]);
  };

  // Gestion du clic sur le bouton -
  const handleButtonMinusClick = () => {
    deleteDia(selectedButton);
    setDiapos(diapos.filter((diapo) => diapo.id !== selectedButton));
    setSelectedButton(null);
  };

  // Rendu d'un bouton
  const renderButton = (id, title, key) => {
    return (
      <Card
        key={key}
        sx={{
          margin: "10px",
          backgroundColor: selectedButton === id ? "#FD853A" : "white",
          color: selectedButton === id ? "white" : "black",
        }}
        onClick={() => handleButtonClick(id)}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "0px" }}
            >
              {" "}
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  // Rendu du bouton +
  const renderButtonPlus = (id, title) => (
    <Card
      sx={{
        margin: "10px",
        backgroundColor: "#FD853A",
        color: "white",
      }}
      onClick={() => {
        handleButtonPlusClick(id);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: "0px" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  // Rendu du bouton -
  const renderButtonMinus = (id, title) => (
    <Card
      sx={{
        margin: "10px",
        backgroundColor: "#FD853A",
        color: "white",
      }}
      onClick={() => {
        handleButtonMinusClick(id);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: "0px" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <Container
      sx={{
        pt: 3,
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: "0px",
      }}
    >
      <Grid
        item
        xs={4}
        sm={8}
        md={12}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          pt: 3,
        }}
      >
        {diapos.map((x, index) =>
          renderButton(x.id, "Diaporama" + " " + x.id, x.id)
        )}
        {renderButtonPlus(6, "+")}
        {renderButtonMinus(7, "-")}
      </Grid>
    </Container>
  );
};

export default ListDiapo;
