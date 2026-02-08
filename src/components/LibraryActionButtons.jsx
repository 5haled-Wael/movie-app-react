import { useState } from "react";
import { Box, Button } from "@mui/material";
import CustomSnackbar from "./CustomSnackbar";
import { useMovieLibrary } from "../contexts/MovieLibraryContext";

export default function LibraryActionButtons({ movieDetails }) {
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const { addToFavorite, addToWatchlist } = useMovieLibrary();

  function handleFavClick() {
    addToFavorite(movieDetails);
    setMessage("Movie added to favorite list");
    setSnackbar(true);
  }

  function handleWatchClick() {
    addToWatchlist(movieDetails);
    setMessage("Movie added to watchlist");
    setSnackbar(true);
  }

  return (
    <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, md: 0 } }}>
      <Button variant="contained" onClick={handleFavClick}>
        Add to favorite
      </Button>
      <Button variant="contained" onClick={handleWatchClick}>
        Add to watchlist
      </Button>
      <CustomSnackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        message={message}
      />
    </Box>
  );
}
