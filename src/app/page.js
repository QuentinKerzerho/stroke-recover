import ResponsiveAppBar from "../components/ResponsiveAppBar";
import BasicButtons from "../components/BasicButtons";
import TextIntro from "../components/TextIntro";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <TextIntro />
      <Stack
        spacing={10}
        direction="row"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10em" }}
        useFlexGap={false}
      >
        <BasicButtons name="Lancer" to="/" />
        <BasicButtons name="Ajouter" to="/gallery" />
      </Stack>
    </div>
  );
}
