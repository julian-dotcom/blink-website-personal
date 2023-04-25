import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ReadMoreButton = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        cursor: "pointer",
        borderRadius: "50px",
        minWidth: "170px",
        maxWidth: "170px",
        minHeight: "48px",
        maxHeight: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 28px rgba(0,0,0,.12)",
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(45deg, #FFBE0B 0%, #FB5607 100%) border-box",
        border: "2px solid transparent",

        "&:hover": {
          backgroundColor: "black",
          background: "black",
          "& *": {
            backgroundColor: "black",
            color: "white",
            fill: "white",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => router.push("/blog")}
      >
        <Typography
          sx={{
            fontSize: "18px",
            // fontWeight: "bold",
          }}
        >
          READ MORE
        </Typography>
        <ArrowForwardIosIcon sx={{ marginLeft: "13px", fontSize: "14px" }} />
      </Box>
    </Box>
  );
};

export default ReadMoreButton;
