import Container from "@mui/material/Container";
import { useEffect } from "react";

// COMPONENTS IMPORTS
import FilmCard from "./FilmCard";
import Nav from "./Nav";

// LAYOUT IMPORTS
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// CUSTOM HOOKS IMPORT
import useMovies from "../hooks/useMovies";

// CONTEXTS IMPORTS
import { useLoading } from "../contexts/LoadingContext";

export default function Home() {
  const { movies, setPage } = useMovies();
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
    <>
      <Nav />
      <Container maxWidth="lg">
        {/* MAIN LAYOUT */}
        <Box sx={{ marginTop: "20px", flexGrow: 1 }}>
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
        </Box>
        {/*=== MAIN LAYOUT ===*/}
      </Container>
    </>
  );
}
