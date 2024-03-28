// composant pour les boutons de base

import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function BasicButtons(props) {
  const { to, name } = props;

  return (
    <Link href={to}>
      <Button
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
        {name}
      </Button>
    </Link>
  );
}
