import { createTheme } from "@mui/material";
import * as Inputs from "./overrides/input.overrides";
import * as Buttons from "./overrides/button.overrides";

declare module "@mui/material/styles" {
  interface Palette {
    foreground: {
      primary: string;
      secondary: string;
      muted: string;
      accent: string;
      error: string;
    };
    border: Palette["divider"];
    input: Palette["divider"];
    ring: Palette["divider"];
    muted: Palette["primary"];
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    foreground?: {
      primary: string;
      secondary: string;
      muted: string;
      accent: string;
      error: string;
    };
    border?: Palette["divider"];
    input?: Palette["divider"];
    ring?: Palette["divider"];
    muted?: Partial<Palette["primary"]>;
    accent?: Partial<Palette["primary"]>;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(240 5.9% 10%)",
      contrastText: "hsl(0 0% 98%)",
    },
    secondary: {
      main: "hsl(240 3.7% 15.9%)",
      contrastText: "hsl(0 0% 98%)",
    },
    muted: {
      main: "hsl(240 3.7% 15.9%)",
      contrastText: "hsl(240 5% 64.9%)",
    },
    accent: {
      main: "hsl(240 3.7% 15.9%)",
      contrastText: "hsl(0 0% 98%)",
    },
    foreground: {
      primary: "hsl(0 0% 98%)",
      secondary: "hsl(0 0% 98%)",
      muted: "hsl(240 5% 64.9%)",
      accent: "hsl(0 0% 98%)",
      error: "hsl(0 85.7% 97.3%)",
    },
    border: "hsl(240 3.7% 15.9%)",
    input: "hsl(240 5.9% 90%)",
    ring: "hsl(240 4.9% 83.9%)",
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    ...Inputs,
    ...Buttons,
  },
});
