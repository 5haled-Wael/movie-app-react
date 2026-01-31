import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#01B4E4",
    },

    secondary: {
      main: "#90CEA1",
    },

    background: {
      default: "#0D253F",
      paper: "#0F2A44",
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
    },
    h5: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
