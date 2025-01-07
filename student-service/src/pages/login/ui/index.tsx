import { Box, Button, GlobalStyles, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { LoginFeature } from "../../../feature/auth-by-email"
import { useSelector } from "react-redux"
import { useDispatch } from "../../../shared/lib/redux"
import { UserFeature } from "../../../entities/user"
import { Navigate } from "react-router-dom"
import { styles } from "./styles.ts"
import logo from "../../../assets/logo.svg"
import { RoutePaths } from "../../../app/config/route"

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
    <Box sx={styles.container}>
      <GlobalStyles
        styles={(theme) => ({
          body: { background: theme.palette.secondary.main },
        })}
      />
      <img alt="logo" src={logo} />
      <Typography sx={styles.formTitle} variant="h4">
        Авторизация
      </Typography>
      <Box sx={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <TextField
              sx={styles.textField}
              placeholder="Почта"
              label="Почта"
              value={value}
              size="small"
              slotProps={{ inputLabel: { variant: "filled" } }}
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
              sx={styles.textField}
              placeholder={"Пароль"}
              label={"Пароль"}
              value={value}
              type="password"
              size="small"
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
          sx={styles.loginButton}
          variant="contained"
          size="l"
        >
          Войти
        </Button>
        <Typography sx={styles.forgotPassword}>
          Забыли почту или пароль?
          <Button sx={{ fontSize: "inherit" }} variant="text">
            Восстановить
          </Button>
        </Typography>
      </Box>
    </Box>
  )
}
