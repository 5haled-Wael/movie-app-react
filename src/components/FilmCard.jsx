import { Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FilmCard({ title, image, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card onClick={handleClick} sx={{ cursor: "pointer" }}>
      <img
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
        src={image}
        alt="Film"
      />
      <Typography sx={{ textAlign: "center", m: 1 }}>{title}</Typography>
    </Card>
  );
}
