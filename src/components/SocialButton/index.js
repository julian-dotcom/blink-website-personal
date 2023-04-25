import Box from "@mui/material/Box";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NostrIcon from "./NostrIcon";
import { styled } from "@mui/material/styles";

const ButtonBox = styled(Box)({
  cursor: "pointer",
  borderRadius: "50%",
  minWidth: "55px",
  maxWidth: "55px",
  minHeight: "55px",
  maxHeight: "55px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 12px 28px rgba(0,0,0,.12)",
  background:
    "linear-gradient(white, white) padding-box, linear-gradient(45deg, #FFBE0B 0%, #FB5607 100%) border-box",
  border: "2px solid transparent",

  "&:hover": {
    backgroundColor: "black",
    background: "none",
    "& *": {
      backgroundColor: "black",
      color: "white",
      fill: "white", // for custom Nostr icon
    },
  },
  "& *": {
    // add transition here if needed
  },
});

const SocialButton = ({ link, socialMediaName }) => {
  return (
    <ButtonBox onClick={() => window.open(link, "_blank").location}>
      <Box
        sx={{
          borderRadius: "50%",
          minWidth: "51px",
          maxWidth: "51px",
          minHeight: "51px",
          maxHeight: "51px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {socialMediaName === "twitter" ? (
          <TwitterIcon />
        ) : socialMediaName === "whatsapp" ? (
          <WhatsAppIcon />
        ) : socialMediaName === "telegram" ? (
          <TelegramIcon />
        ) : (
          <NostrIcon />
        )}
      </Box>
    </ButtonBox>
  );
};

export default SocialButton;
