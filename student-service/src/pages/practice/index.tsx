import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material"
import { practice } from "../../entities/practice/const.ts"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { AppRoutes } from "../../app/config/route/config.tsx"
import { Link } from "@mui/material"

export const Practice = () => {
  return (
    <Stack sx={{ gap: 1 }}>
      <Box sx={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
        <Paper sx={{ padding: "30px", flexGrow: 1 }}>
          <Stack sx={{ gap: 1 }}>
            <Typography variant="h4">{practice.title}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "flex-start",
              }}
            >
              <Typography variant={"h5"}>{practice.views}</Typography>
              <RemoveRedEyeRoundedIcon />
            </Box>
            <Box>
              <Button sx={{ width: 1, mt: 2 }} size={"large"}>
                Подать заявку на прохождение практики
              </Button>
            </Box>
          </Stack>
        </Paper>
        <Link sx={{ width: `40%` }} href={`/${AppRoutes.ORGANIZATION}/id`}>
          <Paper sx={{ padding: "20px" }}>
            <Stack sx={{ gap: 1 }}>
              <Typography variant={"h5"}>
                {practice.name_organization}
              </Typography>
              <Typography variant={"h5"}>
                Рейтинг: {practice.rating}/10
              </Typography>
            </Stack>
          </Paper>
        </Link>
      </Box>{" "}
      <Typography>Необходимые компетенции</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {practice.competencies.map((comp) => (
          <Chip size={"medium"} label={comp} />
        ))}
      </Box>
      <Typography variant={"subtitle1"} sx={{ mt: 2 }}>
        {practice.description}
      </Typography>
    </Stack>
  )
}
