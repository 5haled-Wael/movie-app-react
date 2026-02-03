import { Box } from "@mui/material";

// ICONS IMPORTS
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function StarRating({ value, max = 5, fnSize = 23 }) {
  const filledStars = Math.min(value);

  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      {Array.from({ length: max }).map((_, index) =>
        index < filledStars ? (
          <StarIcon key={index} sx={{ color: "#f5c518", fontSize: fnSize }} />
        ) : (
          <StarBorderIcon
            key={index}
            sx={{ color: "#f5c518", fontSize: fnSize }}
          />
        ),
      )}
    </Box>
  );
}
