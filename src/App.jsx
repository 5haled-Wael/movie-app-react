import "./App.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import FilmDetailes from "./components/FilmDetails";
import GlobalLoader from "./components/GlobalLoader";
import Actor from "./components/Actor";
import PopularMovies from "./components/PopularMovies";

// CONTEXTS IMPORTS
import { LoadingProvider } from "./contexts/LoadingContext";

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
              <Route path="/popular" element={<PopularMovies />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
