"use client";

import React from "react";
import Image from "next/image";
import Slider from "@/src/components/Slider";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/src/theme/theme";

// Supports weights 300-700
import "@fontsource-variable/quicksand";
import ChoiceDiapo from "@/src/components/ChoiceDiapo";

export default function PageForm({ diapos }) {
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
            <Link href="/gallery">
              <Button
                name="Name"
                disableElevation={true}
                disableFocusRipple={true}
                variant="outlined"
                color="secondary"
                sx={{
                  borderWidth: "2px",
                  borderColor: "black",
                  borderRadius: "100%",
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
            </Link>
          </Box>
        </AppBar>
        <Container maxWidth="xl">
          <Box
            className="absolute left-36 top-16"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Image
              src="/assets/image/puzzlesvg.svg"
              alt=""
              width={250}
              height={250}
            />
          </Box>
          <Box className="flex flex-col items-center relative w-auto">
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "3vw",
              }}
              className="font-bold text-center absolute tracking-tighter"
            >
              Réveillez la parole, ravivez les
            </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "50%",
              }}
            >
              <p
                style={{
                  fontFamily: "Quicksand Variable",
                  fontSize: "3vw",
                  top: "3vw",
                  right: "5vw",
                  marginRight: "13vw",
                }}
                className="font-bold justify-center relative tracking-tighter"
              >
                souvenirs &#58;
              </p>
              <p
                style={{
                  fontFamily: "Quicksand Variable",
                  fontSize: "3vw",
                  WebkitTextStroke: "5px black",
                  textShadow:
                    "5px 5px 0px black, 4px 5px 0px black, 5px 4px 0px black,4px 4px 0px black",
                  top: "3vw",
                  marginLeft: "13vw",
                }}
                className="font-bold text-center absolute text-white tracking-tighter"
              >
                l&apos;outil post-AVC
              </p>
              <p
                style={{
                  fontFamily: "Quicksand Variable",
                  fontSize: "3vw",
                  top: "3vw",
                  marginLeft: "13vw",
                }}
                className="font-bold text-center absolute text-white z-20 tracking-tighter"
              >
                l&apos;outil post-AVC
              </p>
            </Box>
          </Box>
          <Box className="flex flex-col items-center mt-10 relative w-auto">
            <p
              style={{
                fontFamily: "Quicksand Variable",
                fontSize: "1.3vw",
                marginTop: "0.8rem",
              }}
              className="font-bold text-center tracking-tighter"
            >
              jusqu&apos;à 70% des personnes ayant subi un AVC peuvent souffrir
              de troubles cognitifs, y <br /> compris des problèmes de mémoire,
              dans les mois suivant l&apos;AVC.
            </p>
          </Box>
          <div className="flex flex-col items-center relative w-auto">
            <ChoiceDiapo diapos={diapos} />
          </div>
          <div
            style={{
              zIndex: "-10",
              position: "absolute",
              display: "block",
              left: "5%",
              width: "90%",
              height: "260px",
              background: "#130D00",
              borderRadius: "10px",
            }}
          ></div>
          <Box
            className="absolute right-16 top-64 z-50"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Image
              src="/assets/image/bonhommesvg.svg"
              alt="Titre Stroke Recover"
              width={200}
              height={200}
            />
          </Box>

          <Box
            style={{
              position: "relative",
              left: "10%",
              marginTop: "10px",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slider />
          </Box>
          <Box
            component={"footer"}
            style={{
              display: "flex",
              position: "absolute",
              background: "black",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "30px",
              color: "white",
              justifyContent: "end",
              paddingRight: "2rem",
              alignItems: "center",
            }}
          >
            Mentions légales
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
