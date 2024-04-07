import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface MuiIconButtonOverrides {
  defaultProps?: ComponentsProps["MuiIconButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiIconButton"];
  variants?: ComponentsVariants["MuiIconButton"];
}

interface MuiButtonOverrides {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants["MuiButton"];
}

export const MuiButton: MuiButtonOverrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      maxWidth: "fit-content",
      lineHeight: "1",
      textTransform: "none",
      border: "1px solid",
      borderColor: theme.palette.input,
      borderRadius: "calc(0.5rem - 2px)",
      fontWeight: 500,
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1, 2),
      height: "2.25rem",
      boxShadow:
        "0 0 #0000, 0 0 #0000,0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)",
    }),
    contained: ({ theme }) => ({
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    }),
    sizeLarge: {
      height: "3rem",
    },
    sizeSmall: {
      height: "1.75rem",
    },
  },
};

export const MuiIconButton: MuiIconButtonOverrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 4,
      minHeight: 0,
      minWidth: 0,
      border: "1px solid",
      borderColor: theme.palette.input,
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(["background-color", "color"]),
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    }),
  },
  defaultProps: {
    disableRipple: true,
  },
};
