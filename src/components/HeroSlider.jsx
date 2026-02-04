// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Button, Container, Typography } from "@mui/material";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

export default function HeroSlider({ movies }) {
  return (
    <Box
      sx={{
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "#fff",
          transition: "0.3s",
        },

        "& .swiper-button-next:hover, & .swiper-button-prev:hover": {
          color: "#90caf9",
          transform: "scale(1.1)",
        },

        "& .swiper-pagination-bullet": {
          backgroundColor: "rgba(255,255,255,0.5)",
          opacity: 1,
        },

        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#90caf9",
          width: 18,
          borderRadius: 10,
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Box
              sx={{
                position: "relative",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: {
                  xs: "calc(100vh - 104px)",
                  sm: "calc(100vh - 108px)",
                },
                display: "flex",
                alignItems: "center",
                p: 3,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 1,
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Container maxWidth="lg">
                  <Container maxWidth="lg">
                    <Typography
                      variant="h3"
                      color="text.primary"
                      sx={{
                        fontWeight: 800,
                        letterSpacing: 1,
                        mb: 1,
                        fontSize: { xs: "1.5rem", md: "3rem" },
                      }}
                    >
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        opacity: 0.85,
                        lineHeight: 1.7,
                        maxWidth: { xs: "90vw", sm: 520 },
                        overflow: "hidden",
                        mb: 2,
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                      }}
                    >
                      {movie.overview}
                    </Typography>
                    <StarRating value={movie.vote_average / 2} />
                    {/* ACTION BUTTON */}
                    <Button
                      component={Link}
                      to={`/movie/${movie.id}`}
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, fontWeight: "400" }}
                    >
                      Watch Now
                    </Button>
                    {/*=== ACTION BUTTON ===*/}
                  </Container>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
