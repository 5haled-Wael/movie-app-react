import { useEffect, useRef, useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";
import {
  Box,
  List,
  ListItemButton,
  Paper,
  TextField,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { result } = useSearchMovies(query);
  const [showInput, setShowInput] = useState(true);

  const wrapperRef = useRef(null);

  // CLICK OUTSIDE LOGIC
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (window.innerWidth < 600) {
          setShowInput(false);
        } else {
          setShowInput(true);
        }
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box
      ref={wrapperRef}
      sx={{
        position: "relative",
        width: {
          xs: showInput ? 250 : "auto",
          sm: 300,
        },
      }}
    >
      {/* MOBILE ICON */}
      {!showInput && (
        <IconButton
          sx={{ display: { xs: "block", sm: "none" }, marginLeft: "auto" }}
          onClick={() => setShowInput(true)}
        >
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      )}
      {/*=== MOBILE ICON ===*/}

      {/* INPUT */}
      {showInput && (
        <TextField
          fullWidth
          size="small"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              "&.Mui-focused fieldset": {
                borderColor: "white",
                boxShadow: "0 0 8px rgba(25, 118, 210, 0.5)",
              },
            },
            width: { xs: "120px", sm: "250px", md: "300px" },
          }}
        />
      )}
      {/*=== INPUT ===*/}

      {/* DROPDOWN */}
      {showInput && result.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "110%",
            right: 0,
            mt: 1,
            maxHeight: 320,
            overflowY: "auto",
            borderRadius: 2,
            zIndex: 10,
            width: 300,
          }}
        >
          <List disablePadding>
            {result.slice(0, 6).map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => {
                  setQuery("");
                  if (window.innerWidth < 600) {
                    setShowInput(false);
                  }
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.08)",
                    },
                  }}
                >
                  {/* POSTER */}
                  <Avatar
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                        : undefined
                    }
                    alt={movie.title}
                    variant="rounded"
                    sx={{ width: 40, height: 60 }}
                  />
                  {/*=== POSTER ===*/}
                  {/* TITLE + YEAR */}
                  <Box>
                    <Typography variant="body1">{movie.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "Unknown year"}
                    </Typography>
                  </Box>
                  {/*=== TITLE + YEAR ===*/}
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Paper>
      )}
      {/*=== DROPDOWN ===*/}
    </Box>
  );
}
