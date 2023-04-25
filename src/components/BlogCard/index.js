import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import guyHoldingAppPic from "../../assets/guy-holding-blink-app.png";
import ReadMoreButton from "../ReadMoreButton";
import Image from "next/image";

const BlogCard = ({ mobile, compact }) => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: compact ? "column" : "row",
          maxWidth: mobile ? "80%" : compact ? "300px" : "none",
        }}
      >
        <Box
          sx={{
            width: mobile ? "200px" : "300px",
            height: mobile ? "190px" : "285px",
            overflow: "hidden",
            borderRadius: "30px",
          }}
        >
          <Image
            width="0" // next/image needs a width & height prop
            height="0"
            sizes="100vw"
            src={guyHoldingAppPic.src}
            alt="Blog post preview picture"
            style={{ objectFit: "cover", width: "100%", height: "100%", cursor: "pointer" }}
            onClick={() => router.push("/blog")}
          />
        </Box>
        <Box
          sx={{
            marginTop: compact ? "20px" : "",
            marginLeft: compact ? "" : "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: compact ? "center" : "flex-start",
            gap: 1,
            maxWidth: "400px",
          }}
        >
          <Typography
            as="h2"
            sx={{ color: "#EC8623", fontSize: "22px", textAlign: compact ? "center" : "left" }}
          >
            BLOG
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              lineHeight: "50px",
              fontSize: "35px",
              textAlign: compact ? "center" : "left",
              cursor: "pointer",
            }}
            onClick={() => router.push("/blog")}
          >
            Introducing Blink
          </Typography>
          <Typography
            sx={{ color: "#717171", fontSize: "15px", textAlign: compact ? "center" : "left" }}
          >
            30.03.2023
          </Typography>
          <Typography
            sx={{
              marginBottom: "15px",
              color: "#5B5861",
              fontSize: "18px",
              textAlign: compact ? "center" : "left",
              fontWeight: 400,
            }}
          >
            Bitcoin Beach Wallet gets a new name, new features for bottom-up bitcoin adoption
          </Typography>
          <ReadMoreButton />
        </Box>
      </Box>
    </>
  );
};

export default BlogCard;
