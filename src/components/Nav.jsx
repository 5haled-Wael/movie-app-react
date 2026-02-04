// NAV IMPORTS
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

// MENU IMPORTS
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Fade } from "@mui/material";

// ICON IMPORT
import MovieIcon from "@mui/icons-material/Movie";

// SEARCH BAR IMPORTS
import SearchBar from "./SearchBar";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
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
          <IconButton
            id="fade-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
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
          <MenuItem onClick={handleClose}>Tranding</MenuItem>
          <MenuItem onClick={handleClose}>Latest</MenuItem>
          <MenuItem onClick={handleClose}>Films</MenuItem>
        </Menu>
        {/*=== MENU ===*/}
      </AppBar>
    </>
  );
}
