// Composant pour la bar de navigation

"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "@fontsource/holtwood-one-sc"; // Defaults to weight 400
import Link from "next/link";
import Home from "@/src/app/page";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "40px",
        background: "#171717",
        width: "auto",
        margin: "15px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex" },
              paddingLeft: "10px",
              fontFamily: "Holtwood One Sc",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: "0.8em", sm: "1.2rem", md: "1.2rem" },
            }}
          >
            Stroke Recover
          </Typography>

          <Box
            sx={{
              flexDirection: "row-reverse",
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "block", md: "block" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <Link href="/">
                <MenuItem key={Home} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Accueil</Typography>
                </MenuItem>
              </Link>
              <Link href="/gallery">
                <MenuItem key={Contact} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Galerie</Typography>
                </MenuItem>
              </Link>
              {/* ))} */}
            </Menu>
          </Box>
          <Box
            sx={{
              flexDirection: "row-reverse",
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            <Link href="/gallery">
              <Button
                key={Home}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Galerie
              </Button>
            </Link>
            <Link href="/">
              <Button
                key={Home}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Accueil
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
