import { styled } from "@mui/material";
import { Link as L } from "react-router-dom";

export const Link = styled(L)({
  all: "unset",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});
