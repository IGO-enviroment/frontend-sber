import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material"
import { Link } from "@mui/material"
import { AppRoutes } from "../../../../app/config/route/paths"

interface PracticeCardProps {
  id?: string
  title?: string
  competencies?: string[]
  company?: {
    logo: string
    name: string
  }
}

export const PracticeCard = ({
  id,
  title,
  company,
  competencies,
}: PracticeCardProps) => {
  return (
    <Link
      boxShadow="none"
      href={`/${AppRoutes.PRACTICES}/${id}`}
      underline="none"
      color="inherit"
    >
      <Box
        sx={{ padding: "24px", borderRadius: "24px", backgroundColor: "white" }}
      >
        <Stack>
          <Typography variant="xl-bold" mb="16px">
            {title}
          </Typography>
          <Stack spacing="8px" direction="row" mb="24px">
            {competencies?.map((comp) => <Chip size="s" label={comp} />)}
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Stack direction="row" spacing="12px" alignItems="center">
              <Avatar src={company?.logo} variant="photo-s" />
              <Typography children={company?.name} variant="m-bold" />
            </Stack>
            <Button
              size="m"
              color="ghost"
              variant="contained"
              children="Подробнее"
            />
          </Stack>
        </Stack>
      </Box>
    </Link>
  )
}
