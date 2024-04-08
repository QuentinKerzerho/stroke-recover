// Composant pour afficher le texte d'introduction
import Typography from "@mui/material/Typography";

export default function TextIntro() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="51"
          viewBox="0 0 39 51"
          fill="none"
        >
          <path
            d="M2.91516 31.5312C2.91516 26.6094 6.62861 16.7656 2.91516 2M12.1988 37.2734C17.5626 30.4375 28.5379 13.8125 29.5282 2M15.9122 48.7578C19.2131 48.7578 28.0428 46.4609 36.9551 37.2734"
            stroke="#FEB273"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Typography
          variant="h3"
          align="center"
          color="text.secondary"
          sx={{ marginBottom: "20px", marginTop: "30px" }}
        >
          Bienvenue
        </Typography>
      </div>
      <Typography
        variant="h4"
        align="center"
        color="text.secondary"
        sx={{ marginBottom: "30px" }}
        width={3 / 4}
      >
        Réveillez la parole, ravivez les souvenirs : notre soutien après un AVC.
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        width={3 / 4}
        paragraph
      >
        Bienvenue sur notre site dédié à l&apos;aide aux personnes victimes
        d&apos;AVC. Vous allez pouvoir créer des diaporamas personnalisables
        avec vos propres photos pour améliorer la communication et la mémoire.
        Testez vos capacités en devinant les noms des photos que vous avez
        ajoutées. Bonne visite !
      </Typography>
    </div>
  );
}
