import { Box, TextField } from "@mui/material"
import { practices } from "../../entities/practice/const.ts"
import { useForm } from "react-hook-form"
import { PracticeList } from "../../entities/practice/ui/practice-list"

const statuses = [
  { label: "Все статусы", id: "" },
  { label: "Ожидает", id: "waiting" },
  { label: "Подтверждена", id: "approved" },
]

export function Practices() {
  const { register } = useForm({
    values: {
      title: "",
      status: [statuses[0].label],
    },
  })

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          {...register("title")}
          sx={{ width: 1, mb: 1 }}
          variant="outlined"
          placeholder="Название практики, компании"
        />
      </Box>
      <PracticeList practices={practices} />
    </Box>
  )
}
