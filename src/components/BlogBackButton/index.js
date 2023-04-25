import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BlogBackButton = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        marginTop: "20px",
        marginBottom: "10px",
        width: "fit-content",
      }}
      onClick={() => router.push("/")}
    >
      <ArrowBackIosIcon sx={{ fontSize: "10px", alignSelf: "center" }} />
      <Typography
        sx={{
          marginLeft: "9.5px",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        BLOG
      </Typography>
    </Box>
  );
};

export default BlogBackButton;
