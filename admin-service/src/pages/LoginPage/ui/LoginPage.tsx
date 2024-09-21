import { Paper, Stack } from '@mui/material';
import classNames from './LoginPage.module.scss';
import { LoginForm } from '@/feature/authByEmail/ui/LoginForm/LoginForm.async';

const LoginPage = () => (
    <>
        <Stack className={classNames.container} alignItems="center" justifyContent="center">
            <Stack component={Paper} className={classNames.formWrapper} spacing={3} alignItems="center">
                <LoginForm className={classNames.form} />
            </Stack>
        </Stack>
    </>
);

export default LoginPage;
