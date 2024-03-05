"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const ListDiapo = ({ diapos, newDiapo }) => {
  // État pour suivre si le bouton + a été cliqué
  const [isButtonPlusClicked, setIsButtonPlusClicked] = useState(false);

  // Bouton diaporama selectionné
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

  // bouton plus
  const handleButtonPlusClick = (id) => {
    console.log("button plus clicked");
    setIsButtonPlusClicked(true);
    newDiapo();
  };

  const renderButton = (id, title) => (
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
        {diapos.map((x, index) =>
          renderButton(diapos.id, "Diaporama" + " " + index)
        )}
        {renderButtonPlus(6, "+")}
      </Grid>
    </Container>
  );
};

export default ListDiapo;
