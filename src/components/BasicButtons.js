import * as React from "react";

import Button from "@mui/material/Button";
import Link from "next/link";
import Gallery from "@/src/app/gallery/page";

export default function BasicButtons(props) {
  const { to, name } = props;
  console.log(to);

  return (
    <Link href={to}>
      <Button
        style={{ backgroundColor: "#FD853A" }}
        sx={{
          fontFamily: "Holtwood One Sc",
          width: "20em",
          height: "10em",
        }}
        variant="contained"
      >
        {name}
      </Button>
    </Link>
  );
}
