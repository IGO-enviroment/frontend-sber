import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { Link } from "react-router-dom"

export interface PersonCard {
    id: number
    title: string
    description?: string
    aprove_requests_count: number
    requests_count: number
    limit: number
    views: number
  }

export const PersonCard = ({
  id,
  title,
  description,
  aprove_requests_count,
  limit,
  views,
}: PersonCard) => {
  return (
    <Link to={`/practices/${id}`}>
      <Paper sx={{ padding: "15px 25px", borderRadius: 5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant={"h4"}>{title}</Typography>
          <Typography variant={"h6"}>{description}</Typography>
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