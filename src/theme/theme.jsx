import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff3d3d",
    },
    secondary: {
      main: "#ffc107",
    },
    background: {
      default: "#121212",
      paper: "#1f1f1f",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },

  typography: {
    fontFamily: "Oswald, Arial",
    h6: { fontWeight: 700 },
    h5: { fontWeight: 500 },
    body1: { fontWeight: 400 },
    button: { fontWeight: 500 },
  },
});

export default theme;
