import { Stack } from '@mui/material';
import classNames from './ForbiddenPage.module.scss';

const ForbiddenPage = () => (
    <>
        <Stack className={classNames.container} alignItems="center" justifyContent="center">
            <h1>У вас нет доступа :(</h1>
        </Stack>
    </>
);

export default ForbiddenPage;
