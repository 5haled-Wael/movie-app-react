import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

// COMPONENTS
import FilmCard from "./FilmCard";
import Nav from "./Nav";
import Footer from "./Footer";

// CUSTOM HOOKS
import useMovies from "../hooks/useMovies";

// CUSTOM CONTEXTS
import { useLoading } from "../contexts/LoadingContext";

export default function MoviesPage({ category, title }) {
  const { movies, setPage } = useMovies(category);
  const { loading } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, setPage]);

  return (
    <Box>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          {title}
        </Typography>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
              <FilmCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                id={movie.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
