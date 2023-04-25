import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFBE0B",
    },
    secondary: {
      main: "#FB5607",
    },
  },
  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
    fontSize: 16,
    fontWeightRegular: 300,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          fontFamily: "IBM Plex Sans !important",
        },
      },
    },
  },
});
