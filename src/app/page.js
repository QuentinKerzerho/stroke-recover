import ResponsiveAppBar from "../components/ResponsiveAppBar";
import BasicButtons from "../components/BasicButtons";
import TextIntro from "../components/TextIntro";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Home() {
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
          <BasicButtons name="Lancer" to="/" />
          <BasicButtons name="Ajouter" to="/gallery" />
        </Stack>
      </Box>
    </div>
  );
}
