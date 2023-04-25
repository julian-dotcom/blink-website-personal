import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme";
import LangContext from "../context";
import HtmlHead from "../components/HtmlHead";
export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("en");

  return (
    <ThemeProvider theme={theme}>
      <LangContext.Provider value={{ lang, setLang }}>
        <CssBaseline />
        <HtmlHead />
        <Component {...pageProps} />
      </LangContext.Provider>
    </ThemeProvider>
  );
}
