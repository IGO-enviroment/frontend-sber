import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material"
import { Section } from "../../../shared/ui/section"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import { useNavigate } from "react-router-dom"
import { RoutePaths } from "../../../app/config/route"
import { PROFILE_DATA } from "../../../shared/const"

export const ProfilePage = () => {
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
            <Avatar src={PROFILE_DATA.photo} variant="photo-xl" />
            <Stack spacing="12px">
              <Typography variant="xl-bold" children={PROFILE_DATA.fullName} />
              <Typography variant="l" children={PROFILE_DATA["job-title"]} />
            </Stack>
          </Stack>
        </Section>
        <Section title="Навыки и компетенции">
          <Section.Item title="О себе">
            <Typography sx={{ color: (theme) => theme.palette.grey[700] }}>
              {PROFILE_DATA.about}
            </Typography>
          </Section.Item>
          <Section.Item title="Навыки">
            <Stack direction="row" spacing="8px">
              {PROFILE_DATA.skills.map((chip, index) => (
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
              {PROFILE_DATA.university}
            </Typography>
            <Typography
              variant="m"
              component="div"
              sx={{ mb: "8px", color: (theme) => theme.palette.grey[700] }}
            >
              {PROFILE_DATA.institute}
            </Typography>
            <Typography
              variant="m"
              component="div"
              sx={{ color: (theme) => theme.palette.grey[700] }}
            >
              {PROFILE_DATA.direction}
            </Typography>
          </Box>
        </Section>
        <Section title="Контакты">
          <Stack direction="row" spacing="16px">
            <Button
              size="s"
              color="secondary"
              variant="contained"
              children={PROFILE_DATA.phone}
            />
            <Button
              size="s"
              color="secondary"
              variant="contained"
              children={PROFILE_DATA.email}
            />
          </Stack>
        </Section>
      </Stack>
    </>
  )
}
