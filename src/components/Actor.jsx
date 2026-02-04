import { useParams, Link } from "react-router-dom";
import { Box, Typography, Grid, Container } from "@mui/material";
import useActor from "../hooks/useActor";
import { useState } from "react";

// COMPONENTS
import Nav from "./Nav";
import Footer from "./Footer";

export default function Actor() {
  const { id } = useParams();
  const { actorDetails, actorMovies } = useActor(id);
  const [bioExpended, setBioExpended] = useState(false);

  if (!actorDetails) return <Typography>Loading...</Typography>;

  // EXPANDED BUTTON
  const maxLength = 770;
  const biography = actorDetails.biography || "No Biography Available.";
  const displayBio =
    !bioExpended && biography.length > maxLength
      ? biography.slice(0, maxLength) + "..."
      : biography;

  // TOP RATED MOVIES
  const sortedMovies = [...actorMovies].sort(
    (a, b) => b.vote_average - a.vote_average,
  );
  const top4Movies = sortedMovies.slice(0, 4);
  const remainingMovies = sortedMovies.slice(4);

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
      <Nav />
      <Container maxWidth="lg">
        <Box sx={{ pt: 2, mb: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: { xs: "center", md: "flex-start" },
              mb: 4,
            }}
          >
            {/* ACTOR IMAGE */}
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w300${actorDetails.profile_path}`}
              alt={actorDetails.name}
              sx={{
                borderRadius: 2,
                width: { xs: 200, md: 300 },
                height: "auto",
                boxShadow: 3,
              }}
            />
            {/*=== ACTOR IMAGE ===*/}
            {/* ACTOR INFORMATIONS */}
            <Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: "700" }}>
                  {actorDetails.name}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                  {actorDetails.place_of_birth || "Unknown place"} -{" "}
                  {actorDetails.birthday || "Unknown date"}
                </Typography>
                {actorDetails.deathday ? (
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    Died: {actorDetails.deathday}
                  </Typography>
                ) : null}
              </Box>
              {/* BIOGRAPHY */}
              <Box sx={{ mb: 6, mt: 3 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Biography
                </Typography>
                <Typography variant="body1">{displayBio}</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "primary.main", cursor: "pointer", mt: 1 }}
                  onClick={() => setBioExpended(!bioExpended)}
                >
                  {bioExpended ? "Show Less" : "Read More"}
                </Typography>
              </Box>
              {/*=== BIOGRAPHY ===*/}
            </Box>
            {/*=== ACTOR INFORMATIONS ===*/}
          </Box>
          {/* ACTORS MOVIES */}
          <Box>
            {/* TOP MOVIES */}
            <Typography variant="h5" sx={{ mb: 2 }}>
              Top Movies
            </Typography>
            <Grid container spacing={2}>
              {top4Movies.map((movie) => (
                <Grid key={movie.id} size={{ xs: 12, md: 3, lg: 3 }}>
                  <Link
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component="img"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : "https://placeholdpicsum.dev/300x450"
                      }
                      alt={movie.title}
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        mb: 1,
                        objectFit: "cover",
                        height: 320,
                        transition: "0.3s",
                        "&:hover": { opacity: 0.7 },
                      }}
                    />
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        opacity: 0.7,
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      {movie.character || "Unkown Role"}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        opacity: 0.7,
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "Unknown Year"}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            {/*=== TOP MOVIES ===*/}
            {/* ALL MOVIES */}
            <Typography variant="h5" sx={{ mb: 2 }}>
              All Movies
            </Typography>
            <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 2 }}>
              {remainingMovies.map((movie) => (
                <Box
                  key={movie.id}
                  size={{ xs: 12, md: 3, lg: 3 }}
                  sx={{ textAlign: "center" }}
                >
                  <Link
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component="img"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : "https://placeholdpicsum.dev/300x450"
                      }
                      alt={movie.title}
                      sx={{
                        width: 150,
                        borderRadius: 2,
                        mb: 1,
                        objectFit: "cover",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                    <Typography variant="body2">{movie.title}</Typography>
                    <Typography
                      variant="caption"
                      sx={{ opacity: 0.7, display: "block" }}
                    >
                      {movie.character || "Unkown Role"}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        opacity: 0.7,
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "Unknown Year"}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
            {/* ALL MOVIES */}
          </Box>
          {/*=== ACTORS MOVIES ===*/}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
