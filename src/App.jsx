import "./App.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalStyles } from "@mui/material";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import FilmDetailes from "./components/FilmDetails";
import GlobalLoader from "./components/GlobalLoader";
import Actor from "./components/Actor";
import MovieLibrary from "./components/movieLibrary";

// CONTEXTS IMPORTS
import { LoadingProvider } from "./contexts/LoadingContext";
import MoviesPage from "./components/MoviesPage";
import { MovieLibraryProvider } from "./contexts/MovieLibraryContext";

function App() {
  return (
    <>
      <LoadingProvider>
        <GlobalLoader />
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{
              html: {
                scrollBehavior: "smooth",
              },
              "::-webkit-scrollbar": {
                width: "10px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default,
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "8px",
                border: `2px solid ${theme.palette.background.default}`,
              },
              "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#3fd2f0",
              },

              "*": {
                scrollbarWidth: "thin",
                scrollbarColor: `${theme.palette.secondary.main} ${theme.palette.background.default}`,
              },
            }}
          />
          <MovieLibraryProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<FilmDetailes />} />
                <Route path="/actor/:id" element={<Actor />} />
                <Route
                  path="/popular"
                  element={
                    <MoviesPage
                      category="movie/popular"
                      title="Popular Movies"
                    />
                  }
                />
                <Route
                  path="/trending"
                  element={
                    <MoviesPage
                      category="trending/movie/week"
                      title="trending Movies"
                    />
                  }
                />
                <Route
                  path="/top-rated"
                  element={
                    <MoviesPage
                      category="movie/top_rated"
                      title="Top Rated Movies"
                    />
                  }
                />
                <Route
                  path="/upcoming"
                  element={
                    <MoviesPage
                      category="movie/upcoming"
                      title="Upcoming Movies"
                    />
                  }
                />
                <Route path="/library" element={<MovieLibrary />} />
              </Routes>
            </BrowserRouter>
          </MovieLibraryProvider>
        </ThemeProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
