import { Box, SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"
import { ReactNode } from "react"
import { styles } from "./styles"

interface Props {
  sx?: SxProps<Theme>
  children: ReactNode
}

export const ModalBody = ({ sx, children }: Props) => {
  return <Box sx={{ ...styles.root, ...sx }}>{children}</Box>
}
