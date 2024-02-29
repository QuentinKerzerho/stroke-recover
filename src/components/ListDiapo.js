"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const ListDiapo = ({ feed }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    if (selectedButton === id) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

  const handleButtonPlusClick = (id) => {
    renderButton(6, "Diaporama 6");
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
      onClick={() => handleButtonPlusClick(id)}
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
        {renderButton(1, "Diaporama 1")}
        {renderButton(2, "Diaporama 2")}
        {renderButton(3, "Diaporama 3")}
        {renderButton(4, "Diaporama 4")}
        {renderButton(5, "Diaporama 5")}
        {renderButtonPlus(6, "+")}
      </Grid>
    </Container>
  );
};

export default ListDiapo;
