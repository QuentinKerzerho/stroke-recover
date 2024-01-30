import ListDiapo from "@/src/components/ListDiapo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function SeeTheSlidshow({ setArticles }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
      >
        <Button
          onClick={handleClickOpen}
          sx={[
            {
              color: "#FD853A",
              borderColor: "#FD853A",
              fontFamily: "Holtwood One Sc",
              width: "20em",
              height: "8em",
            },
            {
              "&:hover": {
                color: "#FD853A",
                backgroundColor: "white",
                borderColor: "#FD853A",
                boxShadow: "2",
              },
            },
          ]}
          variant="outlined"
        >
          Voir le diaporama
        </Button>
        <ListDiapo
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          setArticles={setArticles}
        />
      </Box>
    </div>
  );
}
