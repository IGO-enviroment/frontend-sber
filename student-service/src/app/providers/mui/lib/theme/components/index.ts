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

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ghost: true
  }
}

export const Components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline,
  MuiTextField: {
    styleOverrides: {
      root: {
        width: "100%",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        return {
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "20.8px",
          borderRadius: "12px",
          padding: ownerState.value ? "8.5px 16px" : `16px`,
          alignItems: "flex-end",
          legend: {
            display: "none",
          },
          "label ~ &.Mui-focused": {
            padding: "8.5px 16px",
          },
          fieldset: {
            top: "0px",
          },
          label: {
            left: "2px",
          },
          "&.Mui-focused": {
            padding: "16px",
          },
          "& ::placeholder": {
            color: theme.palette.grey[600],
            opacity: 1,
          },
          variants: [
            {
              props: {
                disabled: true,
              },
              style: ({ theme }) => ({
                backgroundColor: theme.palette.grey[200],
              }),
            },
          ],
        }
      },
      input: {
        padding: "0px",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      disabled: (props) => ({
        backgroundColor: props.theme.palette.grey[200],
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: "52px",
        borderRadius: "12px",
        padding: "0px",
        alignItems: "flex-end",
      },
      input: (props) => ({
        paddingTop: "0px",
        paddingBottom: "0px",
        "::placeholder": {
          color: props.theme.palette.grey[600],
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "21px",
          opacity: 1,
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
    styleOverrides: {
      root: {
        variants: [
          {
            props: {
              variant: "filled",
            },
            style: ({ theme }) => ({
              left: "2px",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "20.8px",
              color: theme.palette.grey[600],
            }),
          },
        ],
      },
    },
    defaultProps: {
      variant: "filled",
    },
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
        "&:hover": {
          boxShadow: "none",
        },
      },
      containedSecondary: (props) => ({
        color: props.theme.palette.primary.main,
      }),
      startIcon: {
        justifyContent: "space-between",
      },
      endIcon: {
        justifyContent: "space-between",
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
      {
        props: {
          color: "ghost",
        },
        style: ({ theme }) => ({
          background: theme.palette.grey[300],
        }),
      },
    ],
    defaultProps: {
      disableRipple: true,
    },
  },
}
