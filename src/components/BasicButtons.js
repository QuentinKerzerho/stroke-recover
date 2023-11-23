import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Gallery from "@/src/app/gallery/page";
import Link from "next/link";

export default function BasicButtons() {
  return (
    <Stack
      spacing={20}
      direction="row"
      sx={{ display: "flex", justifyContent: "center", marginTop: "10em" }}
      useFlexGap={false}
    >
      <Button
        style={{ backgroundColor: "#FD853A" }}
        sx={{
          fontFamily: "Holtwood One Sc",
          width: "20em",
          height: "10em",
        }}
        variant="contained"
      >
        LANCER
      </Button>
      <Link href="/gallery">
        <Button
          key={Gallery}
          style={{ backgroundColor: "#FD853A" }}
          sx={{
            fontFamily: "Holtwood One Sc",
            width: "20em",
            height: "10em",
          }}
          variant="contained"
        >
          Ajouter des photos
        </Button>
      </Link>
    </Stack>
  );
}
