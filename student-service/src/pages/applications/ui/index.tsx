import { Button, Stack } from "@mui/material"
import { useGetPracticesQuery } from "../../../entities/practice/model/get-practices.ts"
import { Section } from "../../../shared/ui/section"
import { PracticeList } from "../../../entities/practice/ui/practice-list"

export function Applications() {
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
  } = useGetPracticesQuery({})

  return (
    <Stack spacing="12px">
      <Section title="Мои заявки">
        <Stack direction="row" spacing="12px">
          <Button
            size="s"
            variant="contained"
            color="secondary"
            children="Поданы"
            sx={{ flex: "1 1 33%" }}
          />
          <Button
            size="s"
            variant="contained"
            color="ghost"
            children="Одобрены"
            sx={{ flex: "1 1 33%" }}
          />
          <Button
            size="s"
            variant="contained"
            color="ghost"
            children="Отклонены"
            sx={{ flex: "1 1 33%" }}
          />
        </Stack>
      </Section>
      <PracticeList practices={data} />
    </Stack>
  )
}
