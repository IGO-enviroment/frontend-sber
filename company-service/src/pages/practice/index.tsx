import { Box, Button, Chip, Paper, Stack, Typography, CircularProgress } from "@mui/material"
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded"
import { Link, useParams } from "react-router-dom"
import { useGetPracticesById } from "../../shared/react-query/practices/use-get-practice-by-id";

export const Practice = () => {
    const {practicesID} = useParams();
    const {data, isLoading} = useGetPracticesById(practicesID)

    if (isLoading) return <CircularProgress />

   return (
    <Stack sx={{ gap: 1 }}>
      <Box sx={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
        <Paper sx={{ padding: "30px", flexGrow: 1 }}>
          <Stack sx={{ gap: 1 }}>
            <Typography variant="h3">{data?.title}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "flex-end",
              }}
            >
              <Typography variant={"h5"}>{data?.views}</Typography>
              <RemoveRedEyeRoundedIcon />
            </Box>
          </Stack>
        </Paper>
      </Box>
      <Box sx={{ fontSize: "24px", mt: 2 }}>{data?.description}</Box>
   
    </Stack>
  )
}