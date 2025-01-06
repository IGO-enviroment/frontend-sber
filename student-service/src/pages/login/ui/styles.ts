import { SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: "600px",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 20%)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: `32px`,
    borderRadius: `24px`,
    background: (theme) => theme.palette.grey[100],
  },
  textField: {
    flexGrow: 1,
    width: 1,
    ":first-child": {
      mb: "12px",
    },
  },
  formTitle: {
    fontSize: `24px`,
    fontWeight: 700,
    lineHeight: `28.8px`,
    textAlign: `center`,
    m: "48px 0 24px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "stretch",
    width: 1,
  },
  forgotPassword: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "20.8px",
    mt: "16px",
    color: (theme) => theme.palette.grey[700],
  },
  loginButton: { width: 1, mt: "48px" },
} as const
