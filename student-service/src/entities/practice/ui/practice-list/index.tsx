import { Practice } from "../../types.ts"
import { PracticeCard } from "../practice-card"
import { Stack, SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"

interface Props {
  sx?: SxProps<Theme>
  practices: Practice[]
  showStatus?: boolean
}

export function PracticeList({ practices, sx, showStatus }: Props) {
  return (
    <Stack sx={{ gap: 5, ...sx }}>
      {practices.map((practice) => (
        <PracticeCard practice={practice} showStatus={showStatus} />
      ))}
    </Stack>
  )
}
