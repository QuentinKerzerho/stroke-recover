"use client";

import React from "react";
import Image from "next/image";
import Slider from "@/src/components/Slider";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/src/theme/theme";

// Supports weights 300-700
import "@fontsource-variable/quicksand";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          color="transparent"
          sx={{
            boxShadow: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "center",
              sm: "space-between",
              md: "space-between",
            },
            alignItems: "center",
            padding: "2rem",
          }}
          position="relative"
        >
          <Box
            className="w-52"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          ></Box>{" "}
          {/* Spacer */}
          <Box className="flex">
            <Image
              src="/assets/image/titresvg.svg"
              alt="Titre Stroke Recover"
              width={200}
              height={200}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            <Button
              disableElevation={true}
              disableFocusRipple={true}
              variant="outlined"
              color="tertiary"
              className="border-2 border-black rounded-full"
              sx={{
                fontFamily: "Quicksand Variable",
                textTransform: "none",
                color: "black",
                "&:hover": {
                  borderWidth: "2px", // Changez cette valeur pour ajuster la taille du contour lors du survol
                },
              }}
            >
              Accèder à son espace client
            </Button>
          </Box>
        </AppBar>
        <Container maxWidth="xl">
          <div className="absolute left-36 top-16">
            <Image
              src="/assets/image/puzzlesvg.svg"
              alt="Titre Stroke Recover"
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col items-center mt-4 relative w-auto">
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "3rem",
              }}
              className="font-bold text-center absolute tracking-tighter"
            >
              Réveillez la parole, ravivez les &#58;
            </p>
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "3rem",
                top: "3rem",
                marginRight: "20rem",
              }}
              className="font-bold justify-center relative tracking-tighter"
            >
              souvenirs &#58;
            </p>
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "3rem",
                marginLeft: "15rem",
                marginTop: "3rem",
                WebkitTextStroke: "5px black",
                textShadow:
                  "5px 5px 0px black, 4px 5px 0px black, 5px 4px 0px black,4px 4px 0px black",
              }}
              className="font-bold text-center absolute text-white tracking-tighter"
            >
              le jeu post-AVC
            </p>
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "3rem",
                marginTop: "3rem",
                marginLeft: "15rem",
              }}
              className="font-bold text-center mt-10 absolute text-white z-20 tracking-tighter"
            >
              le jeu post-AVC
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 relative w-auto">
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "1.3rem",
                marginTop: "0.8rem",
              }}
              className="font-bold text-center tracking-tighter"
            >
              jusqu&apos;à 70% des survivants d&apos;AVC peuvent souffrir de
              troubles cognitifs, y <br /> compris des problèmes de mémoire,
              dans les mois suivant l&apos;AVC.
            </p>
          </div>
          <div className="flex flex-col items-center relative w-auto">
            <button className="w-40 h-10 border-2 bg-black border-black rounded-md m-6">
              <p
                style={{ fontFamily: "Quicksand Variable" }}
                className="text-xs font-bold text-white"
              >
                Jouer 🚀
              </p>
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              display: "block",
              left: "5%",
              width: "90%",
              height: "270px",
              background: "#130D00",
              borderRadius: "10px",
            }}
          ></div>
          <div className="absolute right-16 top-64 z-50">
            <Image
              src="/assets/image/bonhommesvg.svg"
              alt="Titre Stroke Recover"
              width={200}
              height={200}
            />
          </div>

          <div
            style={{
              position: "absolute",
              left: "10%",
              marginTop: "10px",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slider />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}
