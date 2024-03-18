"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ListDiapo from "@/src/components/ListDiapo";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function TestTrucHome({ diapos }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    return () => {
      setOpen(newOpen);
    };
  };

  const [selectedButton, setSelectedButton] = useState(null);

  // Gestion du clic sur un bouton
  const handleButtonClick = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

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

  const DrawerList = (
    <Box
      sx={{ width: 1000 }}
      onClick={toggleDrawer(false)}
      display="flex"
      alignItems="center"
    >
      {diapos.map((x, index) =>
        renderButton(x.id, "Diaporama" + " " + (index + 1), x.index)
      )}
    </Box>
  );

  return (
    <div>
      <Button
        name="Name"
        to=""
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
        {DrawerList}
      </Drawer>
    </div>
  );
}
