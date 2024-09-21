import {IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import classNames from 'classnames'
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { STATUS } from '@/shared/api/status';
import { LoginFormSchema, loginFormSchema } from '../../model/types/loginFormSchema';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByEmail } from '../../model/services/loginByEmail';
import { getLoginStatus } from '../../model/selectors/getLoginStatus/getLoginStatus';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { getLoginError } from '../../model/selectors/getLoginByError/getLoginByError';
import { toast } from 'react-toastify';
export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useAppDispatch();
    const status = useSelector(getLoginStatus);
    const apiError = useSelector(getLoginError);

    const onChangeEmail = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setEmail(event.target.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(event.target.value));
        },
        [dispatch],
    );

    const handleClickShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);

    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmitHandler = useCallback(async () => {

        //TODO: исправить
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(loginByEmail() as any)
    }, [dispatch]);

    useEffect(() => {
      if (apiError) {
        console.log(apiError);
        toast.error(apiError);
      }
  }, [apiError]);



    return (
            <form onSubmit={handleSubmit(onSubmitHandler)} className={classNames(className)}>
                <Stack spacing={3} justifyContent="center" alignItems="center">
                    <Stack spacing={2} width="100%">
                        <TextField
                            autoFocus
                            label="Почта"
                            fullWidth
                            autoComplete="false"
                            {...register('email')}
                            onChange={onChangeEmail}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Пароль"
                            fullWidth
                            autoComplete="false"
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            onChange={onChangePassword}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <LoadingButton
                        fullWidth
                        type="submit"
                        variant="contained"
                        loading={status === STATUS.request}
                        sx={(theme) => ({ padding: theme.spacing(1.5) })}
                    >
                        Войти
                    </LoadingButton>
                    {Boolean(errors.root?.message) && <Typography color="error">{errors.root!.message}</Typography>}
                </Stack>
            </form>
    );
});

export default LoginForm;
