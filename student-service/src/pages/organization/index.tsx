import { Box, Rating, Stack, Typography } from "@mui/material"
import { useGetOrganizationQuery } from "../../entities/organization/model"

export const Organization = () => {
  const { data } = useGetOrganizationQuery(undefined)
  return (
    <Stack>
      <Stack sx={{ gap: 3 }}>
        <Typography>Организация</Typography>
        <Typography variant={"h2"} fontWeight={500}>
          {data?.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>4,8</Typography>
          <Rating
            size={"large"}
            max={10}
            defaultValue={data?.rating}
            disabled
          />
        </Box>
        <Typography>{data?.description}</Typography>
      </Stack>
    </Stack>
  )
}
