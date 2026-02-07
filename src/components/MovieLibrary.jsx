import Nav from "./Nav";
import Footer from "./Footer";
import { Box, Container, Grid } from "@mui/material";

// BUTTON IMPORTS
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useEffect, useState } from "react";

import FilmCard from "./FilmCard";

export default function MovieLibrary() {
  const [moviesType, setMoviesType] = useState("favorite");
  const [movies, setMovies] = useState([]);
  const [watchFilter, setWatchFilter] = useState("all");

  function handleChangeType(event, newValue) {
    if (!newValue) return;
    setMoviesType(newValue);
  }

  function handleWatchChange(event, newValue) {
    if (!newValue) return;
    setWatchFilter(newValue);
  }

  useEffect(() => {
    const sortedMovies = JSON.parse(localStorage.getItem(moviesType)) || [];

    if (moviesType === "watchlist") {
      if (watchFilter === "watched") {
        sortedMovies = sortedMovies.filter((movie) => movie.watched);
      } else if (watchFilter === "notWatched") {
        sortedMovies = sortedMovies.filter((movie) => !movie.watched);
      }
    }

    setMovies(sortedMovies);
  }, [moviesType, watchFilter]);

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
      <Nav />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mt: 3, mb: 3 }}>
          <ToggleButtonGroup
            sx={{
              backgroundColor: "primary.main",
            }}
            value={moviesType}
            exclusive
            onChange={handleChangeType}
            aria-label="Platform"
          >
            <ToggleButton
              value="favorite"
              sx={{
                backgroundColor:
                  moviesType === "favorite" ? "primary.main" : "text.primary",
                color:
                  moviesType === "favorite" ? "text.primary" : "primary.main",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Favorite
            </ToggleButton>
            <ToggleButton
              value="watchlist"
              sx={{
                backgroundColor:
                  moviesType === "watchlist" ? "primary.main" : "text.primary",
                color:
                  moviesType === "watchlist" ? "text.primary" : "primary.main",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Watchlist
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {moviesType === "watchlist" && (
          <Box sx={{ textAlign: "center", mt: 3, mb: 3 }}>
            <ToggleButtonGroup
              sx={{
                backgroundColor: "primary.main",
              }}
              value={watchFilter}
              exclusive
              onChange={handleWatchChange}
              aria-label="Platform"
            >
              <ToggleButton
                value="all"
                sx={{
                  backgroundColor:
                    watchFilter === "all" ? "primary.main" : "text.primary",
                  color:
                    watchFilter === "all" ? "text.primary" : "primary.main",
                  "&:hover": {
                    color: "text.primary",
                  },
                }}
              >
                All
              </ToggleButton>
              <ToggleButton
                value="watched"
                sx={{
                  backgroundColor:
                    watchFilter === "watched" ? "primary.main" : "text.primary",
                  color:
                    watchFilter === "watched" ? "text.primary" : "primary.main",
                  "&:hover": {
                    color: "text.primary",
                  },
                }}
              >
                Watched
              </ToggleButton>
              <ToggleButton
                value="notWatched"
                sx={{
                  backgroundColor:
                    watchFilter === "notWatched"
                      ? "primary.main"
                      : "text.primary",
                  color:
                    watchFilter === "notWatched"
                      ? "text.primary"
                      : "primary.main",
                  "&:hover": {
                    color: "text.primary",
                  },
                }}
              >
                Not Watched
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <FilmCard
              key={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              id={movie.id}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
