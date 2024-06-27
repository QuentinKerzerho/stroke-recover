"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function ChoiceDiapo({ diapos }) {
  const [open, setOpen] = useState(false); // Gestion de l'ouverture du tiroir
  const [selectedButton, setSelectedButton] = useState(""); // Gestion du bouton sélectionné

  const toggleDrawer = (newOpen) => {
    // Fonction pour ouvrir ou fermer le tiroir
    return () => {
      setOpen(newOpen);
    };
  };

  // Gestion du clic sur un bouton diaporama
  function handleButtonClick(id) {
    setSelectedButton(id);
  }

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
          <Link
            href={{
              pathname: "/newlaunch",
              query: { id: `${id}` },
            }}
          >
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
          </Link>
        </CardActionArea>
      </Card>
    );
  };

  // Liste des boutons diaporama et rendu du tiroir
  const DrawerList = (
    <Box
      sx={{
        padding: "10px",
        overflow: "auto",
      }}
      onClick={toggleDrawer(false)}
      display="flex"
      alignItems="center"
      justifyContent="start"
    >
      {diapos.map((x, index) =>
        renderButton(x.id, "Diaporama" + " " + (index + 1), index)
      )}
    </Box>
  );

  return (
    <div>
      <Button
        name="Name"
        onClick={toggleDrawer(true)}
        style={{ backgroundColor: "#FD853A" }}
        sx={{
          fontFamily: "Holtwood One Sc",
          paddingRight: "2em",
          paddingLeft: "2em",
          paddingTop: "1em",
          paddingBottom: "1em",
          fontSize: "1.5em",
        }}
        variant="contained"
      >
        Lancer
      </Button>
      <Drawer anchor={"bottom"} open={open} onClose={toggleDrawer(false)}>
        {/* Tiroir pour afficher les diaporamas */}
        {DrawerList}
      </Drawer>
    </div>
  );
}
