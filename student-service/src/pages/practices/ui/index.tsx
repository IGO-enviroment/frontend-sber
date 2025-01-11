import { Box, Button, Stack, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { useSearchParams } from "react-router-dom"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import { useGetPracticesQuery } from "@/entities/practice/model/get-practices"
import { PracticeList } from "@/entities/practice/ui/practice-list"
import { useState } from "react"
import { FiltersModal } from "./filters"

export function Practices() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  const { control, watch } = useForm({
    defaultValues: {
      title: ("" || searchParams.get("title")) ?? "",
    },
  })

  const {
    data = [
      {
        id: "1",
        title: "Практикант Frontend-разработчик",
        competencies: ["React", "Vue"],
        organization: {
          name: "Вконтакте",
          logo: "",
        },
      },
      {
        id: "2",
        title: "Практикант Frontend-разработчик",
        competencies: ["React", "Vue"],
        organization: {
          name: "Вконтакте",
          logo: "",
        },
      },
    ],
  } = useGetPracticesQuery({
    title: watch("title"),
  })

  return (
    <Box>
      <Stack direction="row" spacing="12px" sx={{ mb: 3 }}>
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange } }) => (
            <TextField
              value={value}
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchOutlinedIcon
                      sx={{
                        mr: "12px",
                        color: (theme) => theme.palette.grey[600],
                      }}
                    />
                  ),
                },
              }}
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
              placeholder="Поиск..."
            />
          )}
        />
        <Button
          size="m"
          color="secondary"
          variant="contained"
          children="Фильтры"
          endIcon={<SettingsOutlinedIcon />}
          onClick={() => {
            setFiltersOpen(!filtersOpen)
          }}
        />
      </Stack>
      <PracticeList practices={data} />
      <FiltersModal
        open={filtersOpen}
        onClose={() => {
          setFiltersOpen(!filtersOpen)
        }}
      />
    </Box>
  )
}
