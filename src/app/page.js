"use server";

import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import BasicButtons from "../components/BasicButtons";
import TextIntro from "../components/TextIntro";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListDiapo from "@/src/components/ListDiapo";
import { getLatestDiapo } from "@/src/query/diapo.query";
import ChoiceDiapo from "../components/ChoiceDiapo";

export default async function Home() {
  const diaposQuery = await getLatestDiapo();

  return (
    <div>
      <ResponsiveAppBar />
      <TextIntro />
      <Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5em",
            alignItems: "center",
          }}
        >
          <ChoiceDiapo diapos={diaposQuery} />
          <BasicButtons name="Gallery" to="/gallery" />
        </Stack>
      </Box>
    </div>
  );
}
