import Typography from "@mui/material/Typography";
import { homepageTranslations } from "../../data/homepageTranslations";

const BlinkDescription = ({ compact, lang }) => {
  return (
    <Typography
      as="h2"
      sx={{
        fontWeight: 400,
        maxWidth: "450px",
        fontSize: compact ? "28px" : "16px",
        textAlign: compact ? "center" : "left",
        margin: compact ? "90px auto 40px auto" : "40px 0px 40px 0px",
        paddingLeft: compact ? "20px" : "",
        paddingRight: compact ? "20px" : "",
      }}
    >
      <a href="https://bbw.sv" target="_blank" style={{ color: "black" }}>
        BBW
      </a>{" "}
      {homepageTranslations[lang].description} <span style={{ fontWeight: "bold" }}>Blink</span>.
    </Typography>
  );
};

export default BlinkDescription;
