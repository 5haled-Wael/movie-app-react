import Container from "@mui/material/Container";

// COMPONENTS IMPORTS
import FilmCard from "./FilmCard";
import Nav from "./Nav";
import Footer from "./Footer";
import HeroSlider from "./HeroSlider";

// LAYOUT IMPORTS
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

// CUSTOM HOOKS IMPORT
import useMovies from "../hooks/useMovies";

// CONTEXTS IMPORTS
import { Link } from "react-router-dom";

export default function Home() {
  const { movies } = useMovies();
  const top4Movies = movies.slice(0, 4);

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
      <Nav />
      {/* HERO SECTION */}
      <HeroSlider movies={top4Movies} />
      {/*=== HERO SECTION ===*/}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Check out popular movies
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/popular"
          >
            See All
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
