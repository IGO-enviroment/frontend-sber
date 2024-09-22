import { Stack, Typography } from "@mui/material"
import { practices } from "../../../entities/practice/const.ts"
import { PracticeList } from "../../../entities/practice/ui/practice-list"
import { useGetPracticesQuery } from "../../../entities/practice/model/get-practices.ts"

export function Applications() {
  // todo какие то праметры на получение СВОИХ практик
  const { data = [], isLoading, isError } = useGetPracticesQuery({})

  return (
    <Stack>
      <Typography variant={"subtitle1"}>Мои заявки</Typography>
      <PracticeList sx={{ mt: 1 }} practices={practices} showStatus />
    </Stack>
  )
}
