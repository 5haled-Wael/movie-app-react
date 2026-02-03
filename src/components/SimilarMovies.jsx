import { Box, Typography } from "@mui/material";
import useSimilarMovies from "../hooks/useSimilarMovies";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

export default function SimilerMovies({ movieId }) {
  const navigate = useNavigate();
  const { similarMovies } = useSimilarMovies(movieId);
  if (similarMovies.length === 0) return;

  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
        Similer Movies
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.05)",
          display: "flex",
          overflowX: "auto",
          gap: 2,
          p: 2,
          mt: 2,
          borderRadius: 3,
        }}
      >
        {similarMovies.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              minWidth: 130,
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: 2,
              p: 1,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#999999",
              },
            }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              sx={{
                width: 100,
                height: 150,
                objectFit: "cover",
                borderRadius: 2,
                mb: 0.5,
              }}
            />
            <Typography variant="subtitle2" noWrap>
              {movie.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 0.5,
                mt: 0.5,
              }}
            >
              <StarRating value={movie.vote_average / 2} fnSize={18} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
