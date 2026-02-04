// LAYOUT IMPORTS
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";

// COMPONENTS IMPORTS
import Nav from "./Nav";
import Footer from "./Footer";
import HeroSlider from "./HeroSlider";
import MoviePreview from "./MoviePreview";
import ActorPreview from "./ActorPreview";

// CUSTOM HOOKS IMPORT
import useMovies from "../hooks/useMovies";
import useTopActors from "../hooks/useTopActors";

// CONTEXTS IMPORTS
import { Link } from "react-router-dom";

export default function Home() {
  const { topActors } = useTopActors();
  const { movies: upcomingMovies } = useMovies("movie/upcoming");
  const { movies: topRatedMovies } = useMovies("movie/top_rated");
  const { movies: trendingMovies } = useMovies("trending/movie/week");
  const { movies: popularMovies } = useMovies("movie/popular");
  const top4Movies = popularMovies.slice(0, 4);

  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
      <Nav />
      {/* HERO SECTION */}
      <HeroSlider movies={top4Movies} />
      {/*=== HERO SECTION ===*/}
      <Container maxWidth="lg">
        {/* GO TO POPULAR SECTION */}
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
        {/*=== GO TO POPULAR SECTION ===*/}
        {/* PREVIEW MOVIES */}
        <MoviePreview
          title={"Trending Movies"}
          movies={trendingMovies}
          link={"/trending"}
        />
        <MoviePreview
          title={"Top Rated Movies"}
          movies={topRatedMovies}
          link={"/top-rated"}
        />
        <MoviePreview
          title={"Upcoming Movies"}
          movies={upcomingMovies}
          link={"/upcoming"}
        />
        {/*=== PREVIEW MOVIES ===*/}
        {/* PREVIEW ACTORS */}
        <ActorPreview title="Top Actors" actors={topActors} />
        {/*=== PREVIEW ACTORS ===*/}
      </Container>
      <Footer />
    </Box>
  );
}
