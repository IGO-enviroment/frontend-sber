import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars"
import { MuiCssBaseline } from "./css-base-line"
import { MuiInputs } from "./inputs"
import { MuiButtons } from "./buttons"

export const Components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline,
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        margin: 0,
        gap: "12px",
      },
      label: ({ theme }) => ({
        ...theme.typography.m,
        gap: "12px",
      }),
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  ...MuiInputs,
  ...MuiButtons,
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiAvatar: {
    variants: [
      {
        props: {
          variant: "photo-xl",
        },
        style: {
          width: "128px",
          height: "128px",
          borderRadius: "12px",
        },
      },
      {
        props: {
          variant: "photo-l",
        },
        style: {
          width: "64px",
          height: "64px",
          borderRadius: "12px",
        },
      },
      {
        props: {
          variant: "photo-m",
        },
        style: {
          width: "48px",
          height: "48px",
          borderRadius: "8px",
        },
      },
      {
        props: {
          variant: "photo-s",
        },
        style: {
          width: "32px",
          height: "32px",
          borderRadius: "6px",
        },
      },
    ],
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: {
              size: "s",
            },
            style: {
              backgroundColor: theme.palette.grey[300],
              ...theme.typography["s-bold"],
              padding: "8px",
              borderRadius: "10px",
            },
          },
          {
            props: {
              size: "xs",
            },
            style: {
              backgroundColor: theme.palette.grey[300],
              ...theme.typography["xs-bold"],
              padding: "3px 8px",
              borderRadius: "6px",
            },
          },
        ],
      }),
    },
  },
}
