import { createTheme } from "@mui/material";
import * as Inputs from "./overrides/input.overrides";
import * as Buttons from "./overrides/button.overrides";

export const theme = createTheme({
  components: {
    ...Inputs,
    ...Buttons

  },
});


