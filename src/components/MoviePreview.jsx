import { Box, Button, Grid, Typography } from "@mui/material";
import FilmCard from "./FilmCard";
import { Link } from "react-router-dom";

export default function MoviePreview({ title, movies, link }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {movies.slice(0, 4).map((movie) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={movie.id}>
            <FilmCard
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              id={movie.id}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button component={Link} to={link} variant="contained">
          See All
        </Button>
      </Box>
    </Box>
  );
}
