import { Practice } from "../../types.ts"
import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { Link } from "@mui/material"
import { AppRoutes } from "../../../../app/config/route/config.tsx"
import { statuses } from "../../const.ts"

export const PracticeCard = ({
  practice,
  showStatus,
}: {
  practice: Practice
  showStatus?: boolean
}) => {
  return (
    <Link href={`/${AppRoutes.PRACTICES}/${practice?.id}`}>
      <Paper
        elevation={2}
        sx={{ padding: "15px 25px", borderRadius: 5, position: "relative" }}
      >
        {showStatus && (
          <Chip
            label={statuses[practice?.status].label}
            color={statuses[practice?.status].color}
            sx={{ position: "absolute", right: 15 }}
          />
        )}
        <Stack sx={{ gap: 1 }}>
          <Typography variant={"h5"}>{practice?.title}</Typography>
          <Typography variant={"subtitle1"}>{practice?.description}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {practice?.competencies.map((comp) => (
              <Chip size={"small"} label={comp} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant={"subtitle2"}>
              Количество свободных мест:{" "}
              {`${practice?.aprove_requests_count}/${practice?.limit}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography variant={"subtitle2"}>
                Рейтинг организации 0/{practice?.rating}
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RemoveRedEyeRoundedIcon /> {practice?.views}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Link>
  )
}
