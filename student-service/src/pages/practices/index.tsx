import { Box, Stack, TextField } from "@mui/material"
import { practices } from "../../entities/practice/const.ts"
import { PracticeCard } from "../../entities/practice/ui/practice-card"
import { useForm } from "react-hook-form"

export function Practices() {
  const { register } = useForm({
    values: {
      title: "",
    },
  })

  return (
    <Box>
      <Box>
        <TextField
          {...register("title")}
          sx={{ width: 1, mb: 5 }}
          variant="outlined"
          placeholder="Название практики, компании"
        />
      </Box>
      <Stack sx={{ gap: 5 }}>
        {practices.map((props) => (
          <PracticeCard {...props} />
        ))}
      </Stack>
    </Box>
  )
}
