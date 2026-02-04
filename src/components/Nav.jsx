// NAV IMPORTS
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

// MENU IMPORTS
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Divider, Fade } from "@mui/material";

// ICON IMPORT
import MovieIcon from "@mui/icons-material/Movie";

// SEARCH BAR IMPORTS
import SearchBar from "./SearchBar";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  // NAV ITEMS
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Popular", path: "/popular" },
    { title: "Trending", path: "/trending" },
    { title: "Top Rated", path: "/top-rated" },
    { title: "Upcoming", path: "/upcoming" },
  ];

  // MENU LOGIC
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //=== MENU LOGIC ===//

  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          {/* MENU ICON IN MOBILE */}
          <IconButton
            id="fade-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          {/*=== MENU ICON IN MOBILE ===*/}
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* LOGO */}
            <Link
              to={`/`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <MovieIcon sx={{ marginRight: "10px", color: "text.primary" }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "text.primary",
                  mr: 1,
                }}
              >
                Movie App
              </Typography>
            </Link>
            {/*=== LOGO ===*/}
            {/* NAVIGATION */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    sx={{
                      color: isActive ? "secondary.main" : "text.primary",
                      fontSize: "1rem",
                      fontWeight: isActive ? "bold" : "normal",
                    }}
                    component={Link}
                    to={item.path}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
            {/*=== NAVIGATION ===*/}
            {/* SEARCH BAR */}
            <SearchBar />
            {/*=== SEARCH BAR ===*/}
          </Box>
        </Toolbar>
        {/* MENU */}
        <Menu
          id="fade-menu"
          slotProps={{
            list: {
              "aria-labelledby": "fade-button",
            },
          }}
          slots={{ transition: Fade }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <MenuItem
                key={item.path}
                onClick={handleClose}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive ? "secondary.main" : "text.primary",
                  fontWeight: isActive ? "bold" : "normal",
                  typography: "body1",
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                  },
                }}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
        {/*=== MENU ===*/}
      </AppBar>
    </>
  );
}
