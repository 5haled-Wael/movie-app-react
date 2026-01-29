// NAV IMPORTS
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

// MENU IMPORTS
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade } from "@mui/material";

import { useState } from "react";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
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
