import {  Paper, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { COLORS } from '../../shared/mui/palette';

export const UIPage = () => {
    const theme = useTheme()
    console.log(theme)
  return (
    <Stack>
      <Typography variant="h1">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="h2">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="h3">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="h4">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="h5">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="h6">TEST - test - ТЕСТ - тест</Typography>

      <Typography variant="subtitle1">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="subtitle2">TEST - test - ТЕСТ - тест</Typography>

      <Typography variant="body1">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="body2">TEST - test - ТЕСТ - тест</Typography>

      <Typography variant="button">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="caption">TEST - test - ТЕСТ - тест</Typography>

      <Typography variant="inherit">TEST - test - ТЕСТ - тест</Typography>
      <Typography variant="overline">TEST - test - ТЕСТ - тест</Typography>

      <Paper sx={{ backgroundColor: COLORS.RED_ALPHA}}>asdasd</Paper>

      <Paper>
        <Button variant='contained' size='l'>TEXT</Button>
        <Button variant='contained' size='m'>TEXT</Button>
        <Button variant='contained' size='s'>TEXT</Button>
        <Button variant='contained' size='xs'>TEXT</Button>
      </Paper>

      <Paper>
        <Button variant='contained'  color='secondary' size='l'>TEXT</Button>
        <Button variant='contained' color='secondary'  size='m'>TEXT</Button>
        <Button variant='contained'  color='secondary' size='s'>TEXT</Button>
        <Button variant='contained'  color='secondary' size='xs'>TEXT</Button>
      </Paper>
    </Stack>
  );
};
