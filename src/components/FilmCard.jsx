import { Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FilmCard({ title, image, id }) {
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
    </Card>
  );
}
