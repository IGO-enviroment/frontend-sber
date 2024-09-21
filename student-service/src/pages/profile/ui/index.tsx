import {
  Box,
  Chip,
  ListItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded"
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded"
import LockRoundedIcon from "@mui/icons-material/LockRounded"
import { DateField } from "@mui/x-date-pickers/DateField"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export function ProfilePage() {
  return (
    <Box>
      <Typography>Общая информация</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Имя"
            value={"Дмитрий"}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Отчество"
            value={"Сергеевич"}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Фамилия"
            value={"Овечкин"}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ToggleButtonGroup disabled>
            <ToggleButton selected value="муж">
              Муж
            </ToggleButton>
            <ToggleButton value="жен">Жен</ToggleButton>
          </ToggleButtonGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField label="Дата рождения" />
          </LocalizationProvider>
        </Box>
      </Box>

      <Typography sx={{ mt: 2 }}>Контактные данные</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            slotProps={{
              input: {
                startAdornment: <LocalPhoneRoundedIcon />,
              },
            }}
            sx={{ flexGrow: 1 }}
            disabled
            label="Почта"
            value={"+792789898989"}
          />
          <TextField
            slotProps={{
              input: {
                startAdornment: <AlternateEmailRoundedIcon />,
              },
            }}
            sx={{ flexGrow: 1 }}
            disabled
            label="Телефон"
            value={"ove@mail.ru"}
          />
        </Box>
      </Box>

      <Typography sx={{ mt: 2 }}>О себе</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <TextField multiline label="О себе" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {["React", "Angular", "Vue", "English B2"].map((label) => (
                <ListItem sx={{ flexGrow: 0, width: "auto", padding: 0 }}>
                  <Chip label={label} onDelete={() => {}} />
                </ListItem>
              ))}
            </Box>
            <TextField
              sx={{ mt: 1 }}
              placeholder="Добавьте навык, например HTML"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography>Пароль</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="Пароль"
            slotProps={{ input: { startAdornment: <LockRoundedIcon /> } }}
          />
          <TextField
            label="Подтвердите пароль"
            slotProps={{ input: { startAdornment: <LockRoundedIcon /> } }}
          />
        </Box>
      </Box>
    </Box>
  )
}
