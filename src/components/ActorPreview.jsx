import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActorPreview({ title, actors }) {
  if (!actors || actors.length === 0) return null;

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {actors.slice(0, 6).map((actor) => (
          <Grid size={{ xs: 6, sm: 4, md: 2 }} key={actor.id}>
            <Link to={`/actor/${actor.id}`} style={{ textDecoration: "none" }}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  alt={actor.name}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "primary.main" }}
                >
                  {actor.name}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
