import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
  alpha,
} from "@mui/material";

interface MuiInputBaseOverride {
  defaultProps?: ComponentsProps["MuiInputBase"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInputBase"];
  variants?: ComponentsVariants["MuiInputBase"];
}
interface MuiFormLabelOverride {
  defaultProps?: ComponentsProps["MuiFormLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormLabel"];
  variants?: ComponentsVariants["MuiFormLabel"];
}

export const MuiInputBase: MuiInputBaseOverride = {
  styleOverrides: {
    root: ({ theme }) => ({
      "label + &": {
        marginTop: theme.spacing(2),
      },
    }),

    input: ({ theme }) => ({
      borderRadius: 4,
      position: "relative",
      border: "1px solid",
      borderColor: theme.palette.input,
      fontSize: 16,
      padding: "10px 12px",
      height: "1rem",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    }),
    // formControl: ({ theme }) => ({
    //   "&.Mui-error": {
    //     svg: {
    //       color: theme.palette.error.main,
    //     },
    //   },
    // }),
  },
};

export const MuiFormLabel: MuiFormLabelOverride = {
  styleOverrides: {
    root: {},
  },
};
