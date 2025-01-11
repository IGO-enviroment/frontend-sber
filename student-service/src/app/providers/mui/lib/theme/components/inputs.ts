import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars"

export const MuiInputs: CssVarsThemeOptions["components"] = {
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
          backgroundColor: theme.palette.grey[100],
          transition: "0.15s padding ease",
          legend: {
            display: "none",
          },
          fieldset: {
            top: "0px",
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
}
