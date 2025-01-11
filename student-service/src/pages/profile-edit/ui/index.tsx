import {
  Box,
  Button,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material"
import { Section } from "@/shared/ui/section"
import { RoutePaths } from "../../../app/config/route"
import { useNavigate } from "react-router-dom"

export function ProfileEditPage() {
  const navigate = useNavigate()
  return (
    <Box>
      <Button
        size="s"
        variant="contained"
        color="secondary"
        children="В профиль"
        fullWidth
        sx={{ mb: "16px" }}
        onClick={() => {
          navigate(RoutePaths["profile"])
        }}
      />
      <Stack spacing="12px">
        <Section title="Личная информация">
          <Section.Item>
            <Grid2 container spacing="8px">
              <Grid2 size={6}>
                <TextField placeholder="Имя" />
              </Grid2>
              <Grid2 size={6}>
                <TextField placeholder="Фамилия" />
              </Grid2>
              <Grid2 size={12}>
                <TextField placeholder="Отчество" />
              </Grid2>
            </Grid2>
          </Section.Item>
          <Section.Item title="Пол">
            <RadioGroup row>
              <FormControlLabel
                value="Мужской"
                control={<Radio />}
                label="Мужской"
              />
              <FormControlLabel
                value="Женский"
                control={<Radio />}
                label="Женский"
              />
            </RadioGroup>
          </Section.Item>
        </Section>
        <Section title="Навыки и компетенции">
          <Section.Item
            title="О себе"
            description="Опишите опыт работы и пет-проекты"
          >
            <TextField placeholder="Например, работал ассистентом руководителя... " />
          </Section.Item>
          <Section.Item
            title="Укажите ваше направление"
            description="Например, Frontend"
          >
            <TextField placeholder="Направление" />
          </Section.Item>
          <Section.Item
            title="Навыки"
            description="Добавьте до 10 актуальных навыков"
          >
            <TextField placeholder="Например, html" />
          </Section.Item>
        </Section>
        <Section title="Учебное заведение">
          <Section.Item>
            <Stack spacing="8px">
              <TextField
                disabled
                label="ВУЗ"
                value="Уральский федеральный университет имени первого Президента России Б. Н. Ельцина"
                placeholder="ВУЗ"
              />
              <TextField
                disabled
                label="Институт"
                value="Институт радиоэлектроники и информационных технологий - РТФ"
                placeholder="Институт"
              />
              <TextField
                disabled
                label="Направление"
                value="Прикладная информатика"
                placeholder="Направление"
              />
            </Stack>
          </Section.Item>
        </Section>
      </Stack>
    </Box>
  )
}
