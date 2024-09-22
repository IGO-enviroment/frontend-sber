import { Stack, Typography } from "@mui/material"
import { PracticeList } from "../../../entities/practice/ui/practice-list"
import { useGetPracticesQuery } from "../../../entities/practice/model/get-practices.ts"

export function Applications() {
  const { data = [] } = useGetPracticesQuery({})

  return (
    <Stack>
      <Typography variant={"subtitle1"}>Мои заявки</Typography>
      <PracticeList sx={{ mt: 1 }} practices={data} showStatus />
    </Stack>
  )
}
