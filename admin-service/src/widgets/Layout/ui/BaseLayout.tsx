/* eslint-disable @typescript-eslint/no-explicit-any */
import { RoutePaths } from '@/app/config/route/config';
import { Addchart } from '@mui/icons-material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { AppProvider, DashboardLayout, Navigation, Branding, Router } from '@toolpad/core';
import { FC, ReactNode, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAVIGATION: Navigation = [
  {
    segment: RoutePaths['student-invatation'],
    title: 'Пригласить студентов',
    icon: <AccessibilityIcon></AccessibilityIcon>
  },
  {
    segment: RoutePaths['university-acceptance'],
    title: 'Одобрить практики',
    icon: <Addchart></Addchart>
  },
  {
    segment: RoutePaths['university-creation'],
    title: 'Одобрить университеты',
  },
  {
    segment: RoutePaths['organization-creation'],
    title: 'Одобрить организации',
  },
];

const BrandingComponent: Branding = {
  title: 'IGROK',
  logo: <></>,
}

export const BaseLayout: FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const  {pathname} = useLocation();

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: any) => navigate(String(path)),
    };
  }, [pathname, navigate]);


  return (
    <AppProvider branding={BrandingComponent} navigation={NAVIGATION} router={router}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  );
};
