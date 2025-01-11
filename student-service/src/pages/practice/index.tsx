import {
  Alert,
  Avatar,
  Button,
  Chip,
  Link,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  Typography,
} from "@mui/material"
import { Section } from "../../shared/ui/section"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import { AppRoutes } from "../../app/config/route/paths"
import { PRACTICE_DATA } from "../../shared/const"
import { SyntheticEvent, useState } from "react"
import CheckIcon from "@mui/icons-material/Check"

export const Practice = () => {
  const [isApplicationSent, setIsApplicationSent] = useState<boolean>(false)

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <Stack spacing="12px">
      <Section>
        <Stack direction="row" justifyContent="space-between" mb="5px">
          <Typography variant="xl-bold">{PRACTICE_DATA.title}</Typography>
          <Button
            size="m"
            color={isApplicationSent ? "primary" : "secondary"}
            disabled={isApplicationSent}
            variant="contained"
            onClick={() => {
              setIsApplicationSent(true)
              handleClick()
            }}
          >
            {isApplicationSent ? "Заявка отправлена" : "Отправить заявку"}
          </Button>
        </Stack>
        <Section.Item>
          <Typography variant="m-bold" component="span">
            {PRACTICE_DATA.available} мест /{" "}
          </Typography>
          <Typography variant="m-bold" component="span" color="error">
            {PRACTICE_DATA.left} осталось
          </Typography>
        </Section.Item>
        <Section.Item
          title="Требования"
          description={PRACTICE_DATA.requirementsDescription}
          sx={{ whiteSpace: "pre" }}
        ></Section.Item>
        <Section.Item title="Направление">
          <Stack spacing="8px" direction="row">
            {PRACTICE_DATA.directions.map((direction, i) => (
              <Chip label={direction} size="s" key={i} />
            ))}
          </Stack>
        </Section.Item>
        <Section.Item title="Навыки">
          <Stack spacing="8px" direction="row">
            {PRACTICE_DATA.competencies.map((comp, i) => (
              <Chip label={comp} size="s" key={i} />
            ))}
          </Stack>
        </Section.Item>
      </Section>
      <Section>
        <Link
          boxShadow="none"
          href={`/${AppRoutes.ORGANIZATION}/${PRACTICE_DATA.company.id}`}
          underline="none"
          color="inherit"
        >
          <Stack alignItems="center" direction="row">
            <Avatar src={PRACTICE_DATA.company.logo} variant="photo-l" />
            <Typography sx={{ ml: "16px" }} variant="l-bold">
              {PRACTICE_DATA.company.name}
            </Typography>
            <Button
              size="m"
              color="secondary"
              variant="contained"
              sx={{
                p: "12px",
                width: "fit-content",
                minWidth: "0",
                ml: "auto",
              }} // @todo
            >
              <EastOutlinedIcon sx={{ fontSize: 16 }} />
            </Button>
          </Stack>
        </Link>
      </Section>
      <Section title="Формат и место проведения">
        <Section.Item
          title={PRACTICE_DATA.format}
          description={PRACTICE_DATA.address}
        />
      </Section>
      <Section title="График">
        <Section.Item
          title={PRACTICE_DATA.schedule.title}
          description={PRACTICE_DATA.schedule.description}
        />
      </Section>
      <Section title="Контакты">
        {PRACTICE_DATA.contacts.map((contact, index) => (
          <Section.Item
            title={contact.name}
            description={contact.description}
            key={index}
          >
            <Stack direction="row" spacing="12px">
              <Button size="s" color="secondary" variant="contained">
                {contact.phone}
              </Button>
              <Button size="s" color="secondary" variant="contained">
                {contact.email}
              </Button>
            </Stack>
          </Section.Item>
        ))}
      </Section>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: 1, color: (theme) => theme.palette.grey[100] }}
          icon={<CheckIcon fontSize="inherit" />}
        >
          <Typography variant="l-bold" textAlign="center">
            Заявка отправлена !
          </Typography>
        </Alert>
      </Snackbar>
    </Stack>
  )
}
