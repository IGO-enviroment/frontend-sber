import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    '& .MuiInputBase-root': {
        borderRadius: '16px',
        boxShadow: theme.shadows['1'],
        background: '#fff',
    },
    '& .MuiInputBase-root:hover, .Mui-focused.MuiFilledInput-root': {
        background: '#fff',
    },
}));
