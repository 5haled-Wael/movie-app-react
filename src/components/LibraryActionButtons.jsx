import { Box, Button } from "@mui/material";

export default function LibraryActionButtons({ movieDetails }) {
  function handleFavClick() {
    const sortedFav = JSON.parse(localStorage.getItem("favorite")) || [];

    const isExsist = sortedFav.some((movie) => movie.id === movieDetails.id);

    if (!isExsist) {
      sortedFav.push(movieDetails);
      localStorage.setItem("favorite", JSON.stringify(sortedFav));
    }
  }

  function handleWatchClick() {
    const sortedWatch = JSON.parse(localStorage.getItem("watchlist")) || [];

    const isExsist = sortedWatch.some((movie) => movie.id === movieDetails.id);

    if (!isExsist) {
      sortedWatch.push({ ...movieDetails, watched: false });
      localStorage.setItem("watchlist", JSON.stringify(sortedWatch));
    }
  }

  return (
    <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, md: 0 } }}>
      <Button variant="contained" onClick={handleFavClick}>
        Add to favorite
      </Button>
      <Button variant="contained" onClick={handleWatchClick}>
        Add to watchlist
      </Button>
    </Box>
  );
}
