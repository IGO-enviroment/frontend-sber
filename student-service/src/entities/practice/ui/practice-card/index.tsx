import { Practice } from "../../types.ts"
import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { Link } from "react-router-dom"
import { AppRoutes } from "../../../../app/config/route/config.tsx"

export const PracticeCard = ({
  id,
  title,
  description,
  competencies,
  aprove_requests_count,
  limit,
  rating,
  views,
}: Practice) => {
  return (
    <Link to={`/${AppRoutes.PRACTICES}/${id}`}>
      <Paper sx={{ padding: "15px 25px", borderRadius: 5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant={"h4"}>{title}</Typography>
          <Typography variant={"h6"}>{description}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {competencies.map((comp) => (
              <Chip label={comp} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              Количество свободных мест: {`${aprove_requests_count}/${limit}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography>Рейтинг компании 0/{rating}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RemoveRedEyeRoundedIcon /> {views}
              </Box>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Link>
  )
}
