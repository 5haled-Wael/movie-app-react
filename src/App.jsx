// GLOBAL RESET
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@emotion/react";

import "./App.css";
import theme from "./theme/theme";
import Home from "./components/Home";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
