import { Box, TextField } from "@mui/material"
import { practices } from "../../entities/practice/const.ts"
import { Controller, useForm } from "react-hook-form"
import { PracticeList } from "../../entities/practice/ui/practice-list"
import { useGetPracticesQuery } from "../../entities/practice/model/get-practices.ts"
import { useParams, useSearchParams } from "react-router-dom"

export function Practices() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { control, watch } = useForm({
    defaultValues: {
      title: ("" || searchParams.get("title")) ?? "",
    },
  })

  const {
    data = [],
    isLoading,
    isError,
  } = useGetPracticesQuery({
    title: watch("title"),
  })

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Controller
          control={control}
          name={"title"}
          render={({ field: { value, onChange } }) => (
            <TextField
              value={value}
              onChange={(event) => {
                const value = event.target.value
                onChange(value)
                setSearchParams(
                  value
                    ? {
                        title: value,
                      }
                    : undefined,
                )
              }}
              sx={{ width: 1, mb: 1 }}
              variant="outlined"
              placeholder="Название практики, компании"
            />
          )}
        />
      </Box>
      <PracticeList practices={practices} />
    </Box>
  )
}
