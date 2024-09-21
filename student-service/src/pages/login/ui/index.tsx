import { Box, Button, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { LoginFeature } from "../../../feature/auth-by-email"
import { useSelector } from "react-redux"
import { useDispatch } from "../../../shared/lib/redux"
import { UserFeature } from "../../../entities/user"
import { Navigate } from "react-router-dom"
import { RoutePaths } from "../../../app/config/route/config.tsx"

export function LoginPage() {
  const isLoading = useSelector(LoginFeature.selectors.isFetching)
  const isUserLogged = useSelector(UserFeature.selectors.data)
  const error = useSelector(LoginFeature.selectors.error)
  const dispatch = useDispatch()

  const { control, watch } = useForm({
    values: {
      email: "",
      password: "",
    },
  })

  const onSubmit = () => {
    dispatch(LoginFeature.thunk.loginByEmail(watch()))
  }

  if (isUserLogged) {
    return <Navigate to={RoutePaths.main} replace />
  }

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
        <Controller
          control={control}
          name={"email"}
          render={({ field: { value, onChange } }) => (
            <TextField
              sx={{ flexGrow: 1, width: 1 }}
              label="Почта"
              value={value}
              onChange={(event) => {
                onChange(event.target.value)
                dispatch(LoginFeature.actions.resetError("email"))
              }}
              error={Boolean(error?.email)}
              helperText={error?.email}
            />
          )}
        />
        <Controller
          control={control}
          name={"password"}
          render={({ field: { value, onChange } }) => (
            <TextField
              sx={{ flexGrow: 1, width: 1 }}
              label="Пароль"
              value={value}
              type="password"
              error={Boolean(error?.password)}
              helperText={error?.password}
              onChange={(event) => {
                onChange(event.target.value)
                dispatch(LoginFeature.actions.resetError("password"))
              }}
            />
          )}
        />
        <Button
          disabled={isLoading}
          onClick={onSubmit}
          sx={{ width: 1, mt: 2 }}
          variant="outlined"
        >
          Войти
        </Button>
      </Box>
    </Box>
  )
}
