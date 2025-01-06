import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars"
import { MuiCssBaseline } from "./css-base-line"

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    l: true
    m: true
    s: true
    xs: true
  }
}

export const Components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline,
  MuiTextField: {
    styleOverrides: {
      root: {},
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "20.8px",
        borderRadius: "12px",
        padding: `16px`,
        ">*": {
          legend: {
            display: "none",
          },
        },
      },
      input: {
        padding: "0px",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: "52px",
        borderRadius: "12px",
        padding: "0px",
      },
      input: (props) => ({
        borderRadius: "12px",
        paddingTop: "0px",
        paddingBottom: "0px",
        "::placeholder": {
          color: props.theme.palette.grey[600],
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "21px",
        },
      }),
    },
    variants: [
      {
        props: {
          size: "small",
        },
        style: {
          padding: 0,
        },
      },
    ],
  },
  MuiInputLabel: {
    defaultProps: {
      variant: "filled",
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
    defaultProps: {},
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "21.6px",
        textTransform: "none",
        boxShadow: "none",
      },
    },
    variants: [
      {
        props: {
          size: "l",
        },
        style: {
          padding: "17px 22px",
        },
      },
      {
        props: {
          size: "m",
        },
        style: {
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "20.8px",
          padding: "13.5px 20px",
        },
      },
      {
        props: {
          size: "s",
        },
        style: {
          padding: "11px 16px",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "18.2px",
        },
      },
      {
        props: {
          size: "xs",
        },
        style: {
          padding: "9px 16px",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "14.4px",
        },
      },
    ],
    defaultProps: {
      disableRipple: true,
    },
  },
}
