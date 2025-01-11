import { Practice } from "../../types.ts"
import { PracticeCard } from "../practice-card"
import { Stack, SxProps } from "@mui/material"
import { Theme } from "@mui/material/styles"

interface Props {
  sx?: SxProps<Theme>
  practices: Practice[]
}

export function PracticeList({ practices, sx }: Props) {
  return (
    <Stack sx={{ ...sx }} spacing="12px">
      {practices.map((practice) => (
        <PracticeCard
          id={practice.id}
          title={practice.title}
          competencies={practice.competencies}
          company={{
            logo: practice.organization.logo,
            name: practice.organization.name,
          }}
        />
      ))}
    </Stack>
  )
}
