import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import PlayStoreIcon from "./PlayStoreIcon";
import HuaweiIcon from "./HuaweiIcon";

const AppStoreButton = ({ mobile, link, appStoreName }) => {
  let text;
  let icon;
  const iconWidth = { width: mobile ? "19px" : "27px", height: "auto" };
  switch (appStoreName) {
    case "apple":
      text = "App Store";
      // Apple icon is slightly smaller naturally than the others
      icon = <AppleIcon style={{ width: mobile ? "22px" : "27px", height: "auto" }} />;
      break;
    case "google":
      text = "Google Play";
      icon = <PlayStoreIcon style={iconWidth} />;
      break;
    case "huawei":
      text = "AppGallery";
      icon = <HuaweiIcon style={iconWidth} />;
      break;
    default:
      throw Error(`Functionality for this app store type is not built: ${appStoreName}`);
  }
  return (
    <Box
      onClick={() => (window.location.href = link)}
      sx={{
        borderRadius: "50px",
        height: mobile ? "40px" : "47px",
        minWidth: mobile ? "120px" : "176px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: mobile ? "11px" : "23px",
        paddingRight: mobile ? "11px" : "23px",
        transform: "translate3d(0,-2px,0)",
        boxShadow: "0 12px 28px rgba(0,0,0,.12)",
        transition: "0.2s",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "white",
          "& *": {
            color: "black",
          },
        },
        " & *": {
          color: "white",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: mobile ? "14px" : "18px",
          transition: "color 0.3s ease",
        }}
      >
        {text}
      </Typography>
      {icon}
    </Box>
  );
};

export default AppStoreButton;
