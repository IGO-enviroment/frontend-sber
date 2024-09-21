import { Stack, Typography } from "@mui/material"
import { practices } from "../../../entities/practice/const.ts"
import { PracticeList } from "../../../entities/practice/ui/practice-list"

export function Applications() {
  return (
    <Stack>
      <Typography variant={"subtitle1"}>Мои заявки</Typography>
      <PracticeList sx={{ mt: 1 }} practices={practices} />
    </Stack>
  )
}
