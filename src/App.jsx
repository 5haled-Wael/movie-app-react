import "./App.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import FilmDetailes from "./components/FilmDetails";
import GlobalLoader from "./components/GlobalLoader";
import Actor from "./components/Actor";

// CONTEXTS IMPORTS
import { LoadingProvider } from "./contexts/LoadingContext";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <>
      <LoadingProvider>
        <GlobalLoader />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<FilmDetailes />} />
              <Route path="/actor/:id" element={<Actor />} />
              <Route
                path="/popular"
                element={
                  <MoviesPage category="movie/popular" title="Popular Movies" />
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
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
