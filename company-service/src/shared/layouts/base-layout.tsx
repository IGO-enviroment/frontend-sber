import { AppProvider, DashboardLayout, Navigation, Router, Session } from '@toolpad/core';
import { FC, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { theme } from '../mui';
import {  ThemeProvider } from '@mui/material';


const NAVIGATION: Navigation = [
  {
    segment: 'practices',
    title: 'Список практик',
  },
  {
    segment: 'profile',
    title: 'Профиль',
  },
];

const Brand = {
  title: 'IGROK',
  logo: <></>
}

export const BaseLayout: FC = () => {
  const {pathname} = useLocation();
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
        navigate('login')
      },
      signOut: () => {
        setSession(null)
      },
    };
  }, []);
  return (
    <AppProvider branding={Brand} navigation={NAVIGATION} router={router} authentication={authentication} session={session}>
      <DashboardLayout>
         <ThemeProvider theme={theme} >
        <Outlet />
        </ThemeProvider>
      </DashboardLayout>
    </AppProvider>
  );
};
