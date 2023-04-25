import { useAbsolutePosition } from "../hooks/useAbsolutePosition";
import { blogPost } from "../data/blogPost";
import { useContext } from "react";
import { useHeight } from "../hooks/useHeight";
import { useRouter } from "next/router";
import BlinkLogoNoTagline from "../assets/blink-no-tagline.svg";
import BlogBackButton from "../components/BlogBackButton";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import guyHoldingAppPic from "../assets/guy-holding-blink-app.png";
import Image from "next/image";
import LangContext from "../context";
import LanguageSelect from "../components/LanguageSelect";
import useMediaQuery from "@mui/material/useMediaQuery";

const BlogPage = () => {
  const { lang } = useContext(LangContext);
  const router = useRouter();
  const compact = useMediaQuery("(max-width:950px)", { defaultMatches: true });
  const mobile = useMediaQuery("(max-width:475px)", { defaultMatches: true });
  const [guyHoldingPhoneRef, guyHoldingPhoneHeight] = useHeight();
  const [headerBox, headerPosition] = useAbsolutePosition(compact);

  return (
    <main>
      {compact && (
        <Image
          width="0" // next/image needs a width & height prop
          height="0"
          sizes="100vw"
          onClick={() => router.push("/")}
          style={{
            position: "absolute",
            width: "100px",
            top: "20px",
            left: "20px",
            height: "auto",
            marginBottom: "30px",
            cursor: "pointer",
          }}
          src={BlinkLogoNoTagline.src}
          alt="Blink logo"
        />
      )}
      <LanguageSelect compact={compact} />
      <Box
        id="left-top-orange-box"
        sx={{
          backgroundImage: "linear-gradient(45deg, #FFBE0B 0%, #FB5607 100%)",
          width: compact ? "100%" : "55%",
          height: compact ? "75px" : guyHoldingPhoneHeight,
          borderRadius: compact ? "0px 0px 20px 20px" : "0px 53px 53px 0px",
          padding: compact ? "none" : "35px 40px 60px 40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!compact && (
          <Box ref={headerBox} sx={{ margin: "auto", maxWidth: "510px" }}>
            <Image
              width="0" // next/image needs a width & height prop
              height="0"
              sizes="100vw"
              style={{
                width: "156px",
                height: "auto",
                marginBottom: "30px",
                cursor: "pointer",
              }}
              src={BlinkLogoNoTagline.src}
              alt="Blink logo"
              onClick={() => router.push("/")}
            />
            <BlogBackButton />
            <span style={{ fontSize: "30px", fontWeight: 300 }}>{blogPost[lang]?.headline}</span>
          </Box>
        )}
      </Box>
      <Image
        width="0" // next/image needs a width & height prop
        height="0"
        sizes="100vw"
        ref={guyHoldingPhoneRef}
        alt="Guy holding Blink mobile app on iPhone"
        style={{
          width: compact ? "100%" : "auto",
          minWidth: compact ? "none" : "auto",
          height: compact ? "auto" : "400px",
          position: "absolute",
          zIndex: -1,
          top: compact ? "60px" : 0,
          right: 0,
          borderRadius: compact ? "0px 0px 20px 20px" : "none",
        }}
        src={guyHoldingAppPic.src}
      />
      <Box
        sx={{
          width: "100%",
          top: compact ? "" : `${60 + guyHoldingPhoneHeight}px`,
          display: "flex",
          justifyContent: compact ? "center" : "",
          alignItems: compact ? "center" : "",
          flexDirection: compact ? "column" : "row",
          gap: compact ? "" : 10,
          marginTop: compact ? `${guyHoldingPhoneHeight}px` : "20px",
          padding: compact ? "20px 25px 20px 25px" : `20px 25px 20px ${headerPosition.left}px`,
        }}
      >
        {!compact && <span style={{ fontSize: "16px" }}>{blogPost[lang]?.info}</span>}
        {compact && <BlogBackButton />}
        <Box
          sx={{
            maxWidth: "650px",
            color: "#454444",
          }}
        >
          {compact && <span style={{ textAlign: "center" }}>{blogPost[lang]?.headline}</span>}
          {compact && (
            <span style={{ fontSize: "14px", textAlign: "center" }}>{blogPost[lang]?.info}</span>
          )}

          <Box
            sx={{
              maxWidth: "650px",
              fontSize: mobile ? "16px" : compact ? "18px" : "20px",
              fontWeight: 300,
            }}
          >
            {blogPost[lang]?.text}
          </Box>
        </Box>
      </Box>
      <Footer compact={compact} />
    </main>
  );
};

export default BlogPage;
