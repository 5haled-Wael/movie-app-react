import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#081C2E",
    },

    secondary: {
      main: "#18b7da",
    },

    background: {
      default: "#081C2E",
      paper: "#0D253F",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },

  typography: {
    fontFamily: `"Oswald", "Arial", sans-serif`,
    h4: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h5: {
      fontWeight: 600,
    },
    body2: {
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
