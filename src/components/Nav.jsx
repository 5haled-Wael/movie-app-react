// NAV IMPORTS
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

// MENU IMPORTS
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade, TextField } from "@mui/material";

// ICON IMPORT
import MovieIcon from "@mui/icons-material/Movie";

// SEARCH BAR IMPORTS
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

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
          <MovieIcon sx={{ marginRight: "10px" }} />
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>

          {/* SEARCH BAR */}
          <Autocomplete
            sx={{
              width: 300,
              display: { xs: "none", sm: "block" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "25px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
            freeSolo
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Movies..."
                size="small"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <SearchIcon sx={{ ml: 1 }} />
                      {params.inputProps.startAdornment}
                    </>
                  ),
                }}
              />
            )}
          />

          {/* MOBILE */}
          <SearchIcon sx={{ display: { xs: "block", sm: "none" } }} />

          {/*=== SEARCH BAR ===*/}
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
