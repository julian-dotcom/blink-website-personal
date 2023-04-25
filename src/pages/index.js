import { blinkLinks } from "../data/blinkLinks";
import { homepageTranslations } from "../data/homepageTranslations";
import { useContext } from "react";
import { useHeight } from "../hooks/useHeight";
import AppStoreButton from "../components/AppStoreButton";
import backgroundPattern from "../assets/pattern-black01.png";
import BlinkDescription from "../components/BlinkDescription";
import BlinkLogo from "../assets/blink-logo.svg";
import BlinkMobileApp from "../assets/mobile-shape.png";
import BlogCard from "../components/BlogCard";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Image from "next/image";
import kidHoldingPhone from "../assets/bbw-cover-photo-blink.jpg";
import LangContext from "../context";
import LanguageSelect from "../components/LanguageSelect";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const LEFT_SIDE = "60%"; // for desktop, width of left side
const RIGHT_SIDE = "40%"; // for desktop, width of right side

export default function Home() {
  const { lang } = useContext(LangContext);
  const compact = useMediaQuery("(max-width:1024px)", { defaultMatches: true });
  const mobile = useMediaQuery("(max-width:475px)", { defaultMatches: true });
  const [orangeRef, orangeBoxHeight] = useHeight();
  const [phoneRef, phoneHeight] = useHeight();

  return (
    <>
      <main>
        <LanguageSelect compact={compact} />
        <Image
          width="0" // next/image needs a width & height prop
          height="0"
          sizes="100vw"
          ref={phoneRef}
          style={{
            position: "absolute",
            top: compact ? `${orangeBoxHeight - 35}px` : "150px",
            left: compact ? "50%" : "63%",
            transform: "translateX(-50%)",
            width: compact ? "60%" : "300px",
            maxWidth: compact ? "290px" : "none",
            height: "auto",
          }}
          src={BlinkMobileApp.src}
          alt="Blink Mobile App on an iPhone"
        />
        <Box
          sx={{
            height: compact ? "auto" : "800px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: compact ? "column" : "row",
              width: "100%",
              backgroundImage: `url(${backgroundPattern.src})`,
            }}
          >
            <Box
              id="orange-box"
              ref={orangeRef}
              sx={{
                backgroundImage: "linear-gradient(45deg, #FFBE0B 0%, #FB5607 100%)",
                width: compact ? "none" : LEFT_SIDE,
                borderRadius: compact ? "0px 0px 53px 53px" : "0px 53px 53px 0px",
                padding: compact ? "40px 20px 60px 20px" : "65px 40px 60px 40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: compact ? "center" : "flex-start",
                  maxWidth: compact ? "420px" : "565px",
                  margin: "auto",
                  "@media (max-width: 1390px)": {
                    paddingRight: "20px", // Padding for screens below 1390px
                  },
                }}
              >
                <img // This image is causing issues when using next.js image on iPhone
                  style={{
                    width: compact ? "200px" : "250px",
                    height: "auto",
                    marginBottom: "30px",
                  }}
                  src={BlinkLogo.src}
                  alt="Blink logo"
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 300,
                    fontSize: mobile ? "30px" : compact ? "38px" : "42px",
                    textAlign: compact ? "center" : "left",
                    marginBottom: compact ? "50px" : "none",
                    lineHeight: "1.3",
                  }}
                >
                  {homepageTranslations[lang].headline}
                </Typography>
                {!compact && <BlinkDescription compact={compact} lang={lang} />}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: compact ? "center" : "left",
                    gap: 2,
                  }}
                >
                  <AppStoreButton mobile={mobile} link={blinkLinks.apple} appStoreName="apple" />
                  <AppStoreButton mobile={mobile} link={blinkLinks.google} appStoreName="google" />
                  <AppStoreButton mobile={mobile} link={blinkLinks.huawei} appStoreName="huawei" />
                </Box>
              </Box>
            </Box>
            <Box
              id="black-pattern-background"
              sx={{
                width: compact ? "none" : RIGHT_SIDE,
                height: compact ? `${phoneHeight}px` : "none",
                background: "none",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
              }}
            >
              {!compact && (
                <Image
                  width="0" // next/image needs a width & height prop
                  height="0"
                  sizes="100vw"
                  src={kidHoldingPhone.src}
                  alt="Boy in El Salvador holding up Bitcoin Beach Wallet App & smiling."
                  style={{
                    margin: "120px auto 0",
                    right: "50%",
                    width: "70%",
                    height: "auto",
                    borderRadius: "40px",
                    display: "block",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
        {compact && <BlinkDescription compact={compact} lang={lang} />}
        <Box
          sx={{
            width: "100%",
            padding: compact ? "40px 0px 40px 0px" : "80px 0px 40px 40px",
          }}
        >
          <Box
            sx={{
              width: compact ? "100%" : "68%",
              display: compact ? "flex" : "",
              justifyContent: compact ? "center" : "",
            }}
          >
            <BlogCard mobile={mobile} compact={compact} />
          </Box>
        </Box>
        <Footer compact={compact} />
      </main>
    </>
  );
}
