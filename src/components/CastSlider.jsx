import { Box, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useCast from "../hooks/useCast";

export default function CastSlider({ movieId }) {
  const { cast } = useCast(movieId);

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        p: 2,
      }}
    >
      {cast.map((actor) => (
        <Box key={actor.id} sx={{ minWidth: 120, textAlign: "center" }}>
          <Link
            to={`/actor/${actor.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Avatar
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              sx={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="subtitle2">{actor.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {actor.character}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
