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

export const MuiIconButton: MuiIconButtonOverrides = {
  styleOverrides: {
    root: {
      padding: 4,
      minHeight: 0,
      minWidth: 0,

      border: '1px solid black',
      borderRadius: '8px',
    },
  },
  defaultProps: {
    disableRipple: true
  }
};
