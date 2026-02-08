import { Container } from "@mui/material";
import Nav from "./Nav";

// COMPONENTS
import CastSlider from "./CastSlider";
import Reviews from "./Reviews";
import SimilerMovies from "./SimilarMovies";
import Footer from "./Footer";
import Banner from "./Banner";

// CUSTOM HOOK
import useMovie from "../hooks/useMovie";

import Box from "@mui/material/Box";

export default function FilmDetailes() {
  const { movieDetails } = useMovie();

  if (movieDetails) {
    return (
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }}>
        <Nav />
        {/* BANNER */}
        <Banner movieDetails={movieDetails} />
        {/*=== BANNER ===*/}
        <Container maxWidth="lg">
          {/* CAST */}
          <CastSlider movieId={movieDetails.id} />
          {/*=== CAST ===*/}
          {/* REVIEWS */}
          <Reviews movieId={movieDetails.id} />
          {/*=== REVIEWS ===*/}
          {/* SIMILAR MOVIES */}
          <SimilerMovies movieId={movieDetails.id} />
          {/*=== SIMILAR MOVIES ===*/}
        </Container>
        {/* FOOTER */}
        <Footer />
        {/*=== FOOTER ===*/}
      </Box>
    );
  }
}
