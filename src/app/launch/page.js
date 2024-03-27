import React from "react";
import prisma from "@/lib/prisma";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { getLatestPhoto } from "@/src/query/photo.query";
import { ListPhoto } from "@/src/datas/ListPhoto"; // provisoir pour test
import TextField from "@mui/material/TextField";

export default async function Test() {
  // const photos = await getLatestPhoto(); // provisoir pour test
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            marginTop: "45px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "#FD853A",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "100px",
                  lg: "100px",
                },
                marginLeft: {
                  xs: "0px",
                  sm: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Votre réponse
            </h1>
            <TextField
              id="outlined-basic"
              variant="standard"
              sx={{
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "100px",
                  lg: "100px",
                },
                marginLeft: {
                  xs: "0px",
                  sm: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              key={ListPhoto[2].id}
              sx={{
                width: "400px",
                height: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
              component="img"
              image={ListPhoto[3].cover.src}
              alt="name"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            marginTop: "45px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "green",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
              }}
            >
              Bonne réponse
            </h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "red",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
                alignItems: "center",
              }}
            >
              Mauvaise réponse
            </h1>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

{
  /* <Container maxWidth>
        <Stack
          
          sx={{
            marginTop: "45px",direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
            borderRadius: "10px",
            border: "1px solid black",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "550px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                backgroundColor: "#FD853A",
                borderRadius: "20px",
                paddingRight: "2em",
                paddingLeft: "2em",
                paddingTop: "1em",
                paddingBottom: "1em",
                fontFamily: "Holtwood One Sc",
                color: "white",
                marginTop: "30px",
                marginLeft: "10px",
                width: "30vw",
              }}
            >
              Votre reponse
            </h1>
          </Card>
          <Card
            sx={{
              width: "550px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              key={ListPhoto[2].id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "400px",
                height: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
              component="img"
              image={ListPhoto[3].cover.src}
              alt="name"
            />
          </Card>
        </Stack>
      </Container> */
}
