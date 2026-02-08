// MUI IMPORTS
import { Box, Button, Container, Grid } from "@mui/material";
// BUTTON IMPORTS
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// COMPONENTS IMPORTS
import Nav from "./Nav";
import Footer from "./Footer";
import FilmCard from "./FilmCard";

// CONTEXTS IMPORTS
import { useMovieLibrary } from "../contexts/MovieLibraryContext";

export default function MovieLibrary() {
  const {
    movies,
    type,
    watchFilter,
    setType,
    setWatchFilter,
    toggleWatched,
    removeFromFavorite,
    removeFromWatchlist,
  } = useMovieLibrary();

  function handleChangeType(event, newValue) {
    if (!newValue) return;
    setType(newValue);
  }

  function handleWatchChange(event, newValue) {
    if (!newValue) return;
    setWatchFilter(newValue);
  }

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
      <Nav />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mt: 3, mb: 3 }}>
          <ToggleButtonGroup
            sx={{
              backgroundColor: "primary.main",
            }}
            value={type}
            exclusive
            onChange={handleChangeType}
            aria-label="Platform"
          >
            <ToggleButton
              value="favorite"
              sx={{
                backgroundColor:
                  type === "favorite" ? "primary.main" : "text.primary",
                color: type === "favorite" ? "text.primary" : "primary.main",
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
                  type === "watchlist" ? "primary.main" : "text.primary",
                color: type === "watchlist" ? "text.primary" : "primary.main",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              Watchlist
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {/* WATCH FILTER */}
        {type === "watchlist" && (
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
        {/*=== WATCH FILTER ===*/}
        {/* MOVIES GRID */}
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={movie.id}>
              <FilmCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                id={movie.id}
                watched={movie.watched}
                showToggleWatched={type === "watchlist"}
                onToggleWatched={() => toggleWatched(movie.id)}
                removeFromFavorite={() => removeFromFavorite(movie.id)}
                type={type}
                removeFromWatchlist={() => removeFromWatchlist(movie.id)}
              />
            </Grid>
          ))}
        </Grid>
        {/*=== MOVIES GRID ===*/}
      </Container>
      <Footer />
    </Box>
  );
}
