import "./App.css";

import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import theme from "./theme/theme";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import FilmDetailes from "./components/FilmDetails";
import GlobalLoader from "./components/GlobalLoader";

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
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
