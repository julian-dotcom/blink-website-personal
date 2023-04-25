import { useContext } from "react";
import Box from "@mui/material/Box";
import SocialButton from "../SocialButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { blinkLinks } from "../../data/blinkLinks";
import LangContext from "../../context";
import { homepageTranslations } from "../../data/homepageTranslations";

const Footer = ({ compact }) => {
  const { lang } = useContext(LangContext);

  return (
    <Box
      sx={{
        position: "static",
        height: "225px",
        width: "100%",
        marginTop: "auto",
        paddingTop: "50px",
        bottom: "0",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: compact ? "column" : "row",
        marginBottom: compact ? "70px" : "none",
      }}
    >
      <Box
        sx={{
          height: "225px",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: compact ? "column" : "row",
        }}
      >
        <Typography
          sx={{
            fontSize: compact ? "20px" : "18px",
            marginRight: compact ? "none" : "24px",
            textAlign: compact ? "center" : "left",
            marginBottom: compact ? "50px" : "none",
            textAlign: "center",
          }}
        >
          {homepageTranslations[lang].connect}
        </Typography>
        <Stack direction="row" spacing={2}>
          <SocialButton link={blinkLinks.twitter} socialMediaName="twitter" />
          <SocialButton link={blinkLinks.whatsapp} socialMediaName="whatsapp" />
          <SocialButton link={blinkLinks.telegram} socialMediaName="telegram" />
          <SocialButton link={blinkLinks.nostr} socialMediaName="nostr" />
        </Stack>
      </Box>
      <Box sx={{ width: "40%", marginTop: compact ? "50px" : "none" }}>
        <Typography
          sx={{ fontSize: compact ? "16px" : "12px", color: "#777778D9", textAlign: "center" }}
        >
          ©2023 BBW, SV.{" "}
          <a href="https://www.bbw.sv/terms" target="_blank">
            Terms and conditions
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
