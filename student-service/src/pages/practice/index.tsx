import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material"
import { practice } from "../../entities/practice/const.ts"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { AppRoutes } from "../../app/config/route/config.tsx"
import { Link } from "react-router-dom"

export const Practice = () => {
  return (
    <Stack sx={{ gap: 1 }}>
      <Box sx={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
        <Paper sx={{ padding: "30px", flexGrow: 1 }}>
          <Stack sx={{ gap: 1 }}>
            <Typography variant="h3">{practice.title}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "flex-end",
              }}
            >
              <Typography variant={"h5"}>{practice.views}</Typography>
              <RemoveRedEyeRoundedIcon />
            </Box>
            <Box>
              <Button sx={{ width: 1, mt: 4 }} size={"large"}>
                Подать заявку на прохождение практики
              </Button>
            </Box>
          </Stack>
        </Paper>
        <Link to={`/${AppRoutes.ORGANIZATION}/id`}>
          <Paper sx={{ padding: "20px", width: `30%` }}>
            <Stack sx={{ gap: 1 }}>
              <Typography variant={"h3"}>
                {practice.name_organization}
              </Typography>
              <Typography variant={"h4"}>
                Рейтинг: {practice.rating}/10
              </Typography>
            </Stack>
          </Paper>
        </Link>
      </Box>
      <Box sx={{ fontSize: "24px", mt: 2 }}>{practice.description}</Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {practice.competencies.map((comp) => (
          <Chip size={"medium"} label={comp} />
        ))}
      </Box>
    </Stack>
  )
}
