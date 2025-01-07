import { SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"

export const styles: Record<string, SxProps<Theme>> = {
  root: {
    background: (theme) => theme.palette.grey[100],
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "72px",
    justifyContent: "space-between",
  },
}
