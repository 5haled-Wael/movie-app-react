import { Container } from "@mui/material";
import Nav from "./Nav";

// CUSTOM HOOK
import useMovie from "../hooks/useMovie";

import { useLoading } from "../contexts/LoadingContext";

export default function FilmDetailes() {
  const { movieDetails } = useMovie();

  if (movieDetails) {
    return (
      <>
        <Nav />
        <Container maxWidth="md">
          <h1>Movie id : {movieDetails.id}</h1>
          <h1>Title: {movieDetails.title}</h1>
        </Container>
      </>
    );
  }
}
