import { SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"

export const styles: Record<string, SxProps<Theme>> = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "702px",
    backgroundColor: (theme) => theme.palette.grey[100],
    p: "24px",
    borderRadius: "24px",
    maxHeight: "737px",
    overflowY: "scroll",
  },
}
