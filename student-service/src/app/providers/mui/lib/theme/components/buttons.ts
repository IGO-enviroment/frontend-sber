import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars"

export const MuiButtons: CssVarsThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "21.6px",
        textTransform: "none",
        boxShadow: "none",
        flexShrink: 0,
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
