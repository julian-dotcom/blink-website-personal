import { styled } from "@mui/material/styles";

const MyLink = styled(`a`)({
  // needs to be refactored into its own file in the future
  color: "inherit",
  "&:hover": { color: "#EC8623" },
});

export default MyLink;
