import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material"
import { Section } from "../../../shared/ui/section"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import { useNavigate } from "react-router-dom"
import { RoutePaths } from "../../../app/config/route"

export const ProfilePage = () => {
  const data = {
    skills: ["React", "Angular", "Vue", "English B2"],
    about:
      "Привет! Я Дима, учусь на 3 курсе прикладной информатики в УрФУ.  Фронтенд - это моё любимое занятие. Недавно начал изучать React.js, пока что только первые шаги, но уже интересно! ",
  }

  const navigate = useNavigate()

  return (
    <>
      <Button
        size="s"
        variant="contained"
        color="secondary"
        children="Редактировать профиль"
        fullWidth
        sx={{ mb: "16px" }}
        onClick={() => {
          navigate(RoutePaths["profile-edit"])
        }}
      />
      <Stack spacing="12px">
        <Section>
          <Stack direction="row" spacing="16px">
            <Avatar variant="photo-xl" />
            <Stack spacing="12px">
              <Typography variant="xl-bold" children="Имя Фамилия Отчество" />
              <Typography variant="l" children="Должность" />
            </Stack>
          </Stack>
        </Section>
        <Section title="Навыки и компетенции">
          <Section.Item title="О себе">
            <Typography sx={{ color: (theme) => theme.palette.grey[700] }}>
              {data.about}
            </Typography>
          </Section.Item>
          <Section.Item title="Навыки">
            <Stack direction="row" spacing="8px">
              {data.skills.map((chip, index) => (
                <Chip size="s" label={chip} key={index} />
              ))}
            </Stack>
          </Section.Item>
          <Section.Item title="Резюме">
            <Box
              sx={(theme) => ({
                border: `1px solid ${theme.palette.grey[300]}`,
                padding: `8px`,
                width: `fit-content`,
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderRadius: "12px",
              })}
            >
              <Avatar
                variant="photo-s"
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
              >
                <AttachFileIcon color="primary" />
              </Avatar>
              <Typography variant="m" children="resume_dima.pdf" />
            </Box>
          </Section.Item>
        </Section>
        <Section title="Учебное заведение">
          <Box>
            <Typography component="div" variant="l" sx={{ mb: "12px" }}>
              Уральский федеральный университет имени первого Президента России
              Б. Н. Ельцина
            </Typography>
            <Typography
              variant="m"
              component="div"
              sx={{ mb: "8px", color: (theme) => theme.palette.grey[700] }}
            >
              Институт радиоэлектроники и информационных технологий - РТФ
            </Typography>
            <Typography
              variant="m"
              component="div"
              sx={{ color: (theme) => theme.palette.grey[700] }}
            >
              Прикладная информатика
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="m-bold"
              sx={{ color: (theme) => theme.palette.grey[700] }}
            >
              Бакалавриат | 3 курс
            </Typography>
          </Box>
        </Section>
        <Section title="Контакты">
          <Stack direction="row" spacing="16px">
            <Button size="s" color="secondary" variant="contained">
              + 7 (900) 800-70-60
            </Button>
            <Button size="s" color="secondary" variant="contained">
              dima123@urfu.ru
            </Button>
          </Stack>
        </Section>
      </Stack>
    </>
  )
}
