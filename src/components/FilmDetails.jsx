import { Container, Typography } from "@mui/material";
import Nav from "./Nav";

// CUSTOM HOOK
import useMovie from "../hooks/useMovie";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function FilmDetailes() {
  const { movieDetails } = useMovie();
  console.log(movieDetails);

  if (movieDetails) {
    return (
      <>
        <Nav />
        {/* BANNER */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "100vh", md: "90vh" },
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.5))",
              padding: 4,
              color: "text.primary",
            }}
          >
            <Grid container spacing={4}>
              {/* POSTER */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    borderRadius: 2,
                    boxShadow: 6,
                    mx: { xs: "auto", md: 0 },
                    display: "block",
                  }}
                />
              </Grid>
              {/*=== POSTER ====*/}

              <Grid size={{ xs: 12, md: 8 }}>
                <Box display="flex" alignItems="center" gap="10px">
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "2rem", md: "3.75rem" },
                      fontWeight: 700,
                    }}
                  >
                    {movieDetails.title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.5,
                      fontSize: { xs: "1rem", md: "1.75rem" },
                    }}
                  >
                    ({movieDetails.release_date?.slice(0, 4)})
                  </Typography>
                </Box>
                {/* GENRES */}
                <Box sx={{ mt: 1 }}>
                  {movieDetails.genres.map((genre) => (
                    <Typography
                      key={genre.id}
                      variant="body2"
                      sx={{
                        display: "inline-block",
                        mr: 1.5,
                        mt: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      {genre.name}
                    </Typography>
                  ))}
                  <Typography sx={{ display: "inline-block", ml: 1 }}>
                    {Math.floor(movieDetails.runtime / 60)}h
                    {Math.floor(movieDetails.runtime % 60)}m
                  </Typography>
                </Box>
                {/*=== GENRES ===*/}
                {/* TAGLINE */}
                {movieDetails.tagline && (
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      opacity: 0.7,
                      mt: 3,
                    }}
                  >
                    {movieDetails.tagline}
                  </Typography>
                )}
                {/*=== TAGLINE ===*/}
                {/* OVERVIEW */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h4" fontWeight="400">
                    OverView
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {movieDetails.overview}
                  </Typography>
                </Box>
                {/*=== OVERVIEW ===*/}
                {/* RATTING */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h4">Ratting</Typography>
                  <Typography sx={{ mt: 1 }}>
                    {movieDetails.vote_average.toFixed(1)} From{" "}
                    {movieDetails.vote_count} Vote
                  </Typography>
                  {/* STARS */}
                  <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
                    {Array.from({ length: 5 }).map((_, i) => {
                      const rating = movieDetails.vote_average / 2;
                      return (
                        <Box
                          key={i}
                          sx={{
                            width: 16,
                            height: 16,
                            backgroundColor:
                              i < Math.round(rating)
                                ? "#FFD700"
                                : "rgba(255,255,255,0.3)",
                            clipPath:
                              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                          }}
                        />
                      );
                    })}
                  </Box>
                  {/*=== STARS ===*/}
                </Box>
                {/*=== RATTING ===*/}
              </Grid>
            </Grid>
          </Box>
          {/*=== OVERLAY ===*/}
        </Box>
        {/*=== BANNER ===*/}

        <Container maxWidth="lg"></Container>
      </>
    );
  }
}
