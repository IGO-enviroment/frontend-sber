import { AppProvider, DashboardLayout, Navigation, Router, Session } from '@toolpad/core';
import { FC, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { theme } from '../mui';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from './header';
import { AppWrapper } from './app-wrapper';

const NAVIGATION: Navigation = [
  {
    segment: 'practices',
    title: 'Список практик',
  },
  {
    segment: 'profile',
    title: 'Профиль',
  },
  {
    segment: 'ui',
    title: 'ui',
  },
];

const Brand = {
  title: 'IGROK',
  logo: <></>,
};

export const BaseLayout: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [session, setSession] = useState<Session | null>({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
    },
  });

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => navigate(String(path)),
    };
  }, [pathname, navigate]);

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        navigate('login');
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: ({palette}) => palette.grey[200]}}>
      <Header />
      <AppWrapper>
        <Outlet />
      </AppWrapper>
      </Box>
      
    </ThemeProvider>
  );

};
