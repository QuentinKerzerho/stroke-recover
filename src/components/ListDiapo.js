// Composant pour afficher la liste des diapositives et les ajouts/suppressions de diapositives

"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { createContext } from "react";

const ListDiapo = ({ diapos: initialDiapos, newDiapo, deleteDia }) => {
  // État pour suivre l'affichage des diapositives
  const [diapos, setDiapos] = useState([...initialDiapos]);

  // Bouton diaporama selectionné
  const [selectedButton, setSelectedButton] = useState(null);
  const SelectedButtonContext = createContext(selectedButton);

  // Gestion du clic sur un bouton
  const handleButtonClick = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

  // Gestion du clic sur le bouton +
  const handleButtonPlusClick = async () => {
    const diapo = await newDiapo();
    setDiapos((prevDiapos) => [...prevDiapos, diapo]);
  };

  // Gestion du clic sur le bouton -
  const handleButtonMinusClick = () => {
    deleteDia(selectedButton);
    setDiapos(diapos.filter((diapo) => diapo.id !== selectedButton));
    setSelectedButton(null);
  };

  // Rendu d'un bouton diaporama
  const renderButton = (id, title, key) => {
    return (
      <Card
        key={key}
        sx={{
          margin: "10px",
          minWidth: "180px",
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

  // Rendu du bouton - et +
  const renderButtonExtend = (id, title, key, fonction) => (
    <Card
      key={key}
      sx={{
        width: "170px",
        margin: "10px",
        backgroundColor: "#FD853A",
        color: "white",
      }}
      onClick={() => {
        fonction(id);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: "0px", textAlign: "center" }}
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
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
        {renderButtonExtend(6, "Ajouter", 1, handleButtonPlusClick)}
        {renderButtonExtend(7, "Supprimer", 2, handleButtonMinusClick)}
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          overflowY: "hidden",
          padding: "10px",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        {diapos.map((x, index) =>
          renderButton(x.id, "Diaporama" + " " + (index + 1), x.index)
        )}
      </Box>
    </Container>
  );
};

export default ListDiapo;
