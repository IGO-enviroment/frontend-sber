import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export interface PersonCard {
    id: number
    competencies: string[];
    sex: string;
    birthdate?: Date;
    email: string;
  }

export const PersonCard = ({
  id,
  competencies,
  email,
  sex,
  birthdate
}: PersonCard) => {
  return (
    <Link to={`/practices/${id}`}>
      <Paper sx={{ padding: "15px 25px", borderRadius: 5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant={"h4"}>{email}</Typography>
          <Typography variant={"h6"}>{sex}</Typography>
          <Typography variant={"subtitle1"}>{birthdate?.toString()}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
           {competencies?.map((item) => <Chip key={item} label={item}/>)}
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Link>
  )
}