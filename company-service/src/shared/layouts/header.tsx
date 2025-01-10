import { Box, Button, Container } from '@mui/material';
import logo from '../assets/logo.svg';

import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
export const styles: Record<string, SxProps<Theme>> = {
  root: {
    background: (theme) => theme.palette.grey[100],
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '72px',
    justifyContent: 'space-between',
  },
};


export const Header = () => {
  return (
    <Box sx={styles.root}>
      <Container>
        <Box sx={styles.container}>
          <img src={logo} />
          <Box sx={styles.controls}>
            <Button size="s" sx={{backgroundColor: ({palette}) => palette.grey[300], color:  ({palette}) => palette.grey[900]}} variant="contained">
              Выход
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
