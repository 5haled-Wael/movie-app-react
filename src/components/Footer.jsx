import { Box, Container, Typography, Link } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 6, py: 3, backgroundColor: "primary.main", color: "white" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CopyrightIcon sx={{ mr: 1, opacity: 0.9 }} />
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {new Date().getFullYear()} Movie App - Built With React & MUI
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ ml: 1, opacity: 0.8 }}>
            Data provided by
          </Typography>
          <Link
            href="https://www.themoviedb.org/"
            target="_blank"
            underline="hover"
            color="inherit"
            sx={{
              ml: 1,
              fontSize: "0.75rem",
              cursor: "pointer",
              transition: "opacity 0.3s",
              "&:hover": { opacity: 0.8 },
            }}
          >
            TMDB
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
