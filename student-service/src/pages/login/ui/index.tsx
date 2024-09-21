import { Box, Button, TextField, Typography } from "@mui/material"

export function LoginPage() {
  return (
    <Box
      sx={{
        minWidth: "600px",
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, 20%)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h3">Вход</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "stretch",
          gap: 2,
          width: 1,
        }}
      >
        <TextField sx={{ flexGrow: 1, width: 1 }} label="Почта" />
        <TextField
          sx={{ flexGrow: 1, width: 1 }}
          type="password"
          label="Пароль"
        />
        <Button sx={{ width: 1, mt: 2 }} variant="outlined">
          Войти
        </Button>
      </Box>
    </Box>
  )
}
