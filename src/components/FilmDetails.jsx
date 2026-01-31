import { Container } from "@mui/material";
import Nav from "./Nav";

// CUSTOM HOOK
import useMovie from "../hooks/useMovie";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FilmDetailes() {
  const { movieDetails } = useMovie();
  console.log(movieDetails);

  if (movieDetails) {
    return (
      <>
        <Nav />
        <Container maxWidth="lg">
          {/* FILM CARD */}
          <Card sx={{ width: "100%", mt: 3 }}>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                sx={{ width: "100%", height: "500px" }}
                image={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                title="green iguana"
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  zIndex: 5,
                  bottom: 32,
                  left: 32,
                  color: "#fff",
                  maxWidth: "60%",
                }}
              >
                <Typography gutterBottom variant="h3" component="div">
                  {movieDetails.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {movieDetails.overview}
                </Typography>
              </CardContent>
            </Box>
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
          {/*=== FILM CARD ===*/}
        </Container>
      </>
    );
  }
}
