import { useNavigate } from "react-router-dom";
import { Typography, Card, Box, Button } from "@mui/material";

export default function FilmCard({
  title,
  image,
  id,
  watched,
  showToggleWatched,
  onToggleWatched,
  removeFromFavorite,
  type,
  removeFromWatchlist,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <img
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          transition: "0.3s",
        }}
        src={image}
        alt={title}
      />
      <Typography sx={{ textAlign: "center", m: 1 }}>{title}</Typography>

      {showToggleWatched && (
        <Box
          sx={{
            textAlign: "center",
            mb: 1,
            display: "flex",
            gap: 1,
            alignItems: "center",
            mr: 1,
            ml: 1,
          }}
        >
          <Button
            sx={{ width: "50%", minHeight: 53 }}
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatched();
            }}
          >
            {watched ? "Mark as Not Watched" : "Mark as Watched"}
          </Button>
          <Button
            sx={{ width: "50%", minHeight: 53 }}
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              removeFromWatchlist();
            }}
          >
            remove From Watchlist
          </Button>
        </Box>
      )}

      {type === "favorite" && (
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              removeFromFavorite();
            }}
          >
            Remove From Favorite
          </Button>
        </Box>
      )}
    </Card>
  );
}
