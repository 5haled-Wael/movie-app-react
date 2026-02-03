import { Box, Typography, Avatar, Button } from "@mui/material";
import { useState } from "react";

// COMPONENTS
import StarRating from "./StarRating";

// CUSTOM HOOKS
import useReviews from "../hooks/useReviews";

export default function Reviews({ movieId }) {
  const { reviews } = useReviews(movieId);
  const [expandedReviews, setExpandedReviews] = useState({});

  function toggleExpanded(id) {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Reviews
      </Typography>
      {reviews.length === 0 ? (
        <Typography>No reviews available.</Typography>
      ) : (
        reviews.map((review) => {
          const expanded = expandedReviews[review.id] || false;
          const author = review.author_details;

          return (
            <Box
              key={review.id}
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
            >
              {/* AUTHOR */}
              <Box display="flex" alignItems="center">
                <Avatar
                  alt={author.name}
                  src={`https://image.tmdb.org/t/p/w45${author.avatar_path}`}
                />
                <Box sx={{ ml: 1, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontSize: 20, ml: 1 }}>
                    {author.username}
                  </Typography>
                  <StarRating value={author.rating / 2} />
                </Box>
              </Box>
              {/*=== AUTHOR ===*/}
              {/* REVIEW CONTENT */}
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: expanded ? "none" : 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {review.content}
              </Typography>
              {review.content.split(" ").length > 50 && (
                <Button
                  onClick={() => toggleExpanded(review.id)}
                  sx={{ mt: 1, color: "#4386ca", fontWeight: "400" }}
                  size="small"
                >
                  {expanded ? "Show Less" : "Show More"}
                </Button>
              )}
              {/*=== REVIEW CONTENT ===*/}
            </Box>
          );
        })
      )}
    </Box>
  );
}
