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
    console.log(id);
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

  deleteDia = (id) => {
    return diapos.filter((diapo) => diapo.id !== id);
  };

  // Gestion du clic sur le bouton -
  const handleButtonMinusClick = () => {
    console.log(selectedButton);
    const deleteD = deleteDia(selectedButton); // Remplacez ceci par votre logique de delete de diapo
    setDiapos(deleteD);
    setSelectedButton(null);
  };

  // Rendu d'un bouton
  const renderButton = (id, title) => {
    return (
      <Card
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
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          pt: 3,
        }}
      >
        {diapos.map((x, index) => renderButton(x.id, "Diaporama" + " " + x.id))}
        {renderButtonPlus(6, "+")}
        {renderButtonMinus(7, "-")}
      </Grid>
    </Container>
  );
};

export default ListDiapo;
