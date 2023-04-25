import { useContext } from "react";
import Box from "@mui/material/Box";
import LangContext from "../../context";
import NativeSelect from "@mui/material/NativeSelect";

const LanguageSelect = ({ compact }) => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <Box
      sx={{
        position: "absolute",
        top: compact ? "17px" : "40px",
        right: compact ? "20px" : "17%",
        display: "flex",
        justifyContent: "center",
        display: "inline-block",
        backgroundColor: "black",
        borderRadius: "50px",
        padding: "2px 5px 2px 12px",
      }}
    >
      <NativeSelect
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        classes={{ icon: "icon" }}
        disableUnderline
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          "& .icon": {
            color: "white",
          },
        }}
      >
        <option style={{ color: "black" }} value="en">
          EN
        </option>
        <option style={{ color: "black" }} value="es">
          ES
        </option>
        <option style={{ color: "black" }} value="fr">
          FR
        </option>
      </NativeSelect>
    </Box>
  );
};

export default LanguageSelect;
