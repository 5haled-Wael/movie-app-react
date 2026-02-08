import { Box, Grid, Typography } from "@mui/material";

// COPONENTS IMPORTS
import StarRating from "./StarRating";
import LibraryActionButtons from "./LibraryActionButtons";

export default function Banner({ movieDetails }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "auto", md: "90vh" },
        minHeight: { md: "90vh" },
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          inset: { md: 0 },
          background:
            "linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.5))",
          padding: { xs: 2, md: 4 },
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
                width: { xs: 200, md: "100%" },
                maxWidth: 300,
                borderRadius: 2,
                boxShadow: 6,
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>
          {/*=== POSTER ====*/}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              gap="10px"
            >
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
              <Typography variant="body2" sx={{ mt: 1 }}>
                {movieDetails.overview}
              </Typography>
            </Box>
            {/*=== OVERVIEW ===*/}
            {/* RATING */}
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
              >
                Rating
              </Typography>
              <Typography sx={{ mt: 1 }}>
                {movieDetails.vote_average.toFixed(1)}/10 From {""}
                {movieDetails.vote_count} Vote
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  gap: { xs: "flex-start", md: 5 },
                }}
              >
                {/* STARS */}
                <Box sx={{ mt: 1 }}>
                  <StarRating value={movieDetails.vote_average / 2} />
                </Box>
                {/*=== STARS ===*/}
                {/* ACTION BUTTONS */}
                <LibraryActionButtons movieDetails={movieDetails} />
                {/*=== ACTION BUTTONS ===*/}
              </Box>
            </Box>
            {/*=== RATING ===*/}
          </Grid>
        </Grid>
      </Box>
      {/*=== OVERLAY ===*/}
    </Box>
  );
}
