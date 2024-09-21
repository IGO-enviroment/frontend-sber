/* eslint-disable @typescript-eslint/no-explicit-any */
import { RoutePaths } from '@/app/config/route/config';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Addchart } from '@mui/icons-material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { AppProvider, DashboardLayout, Navigation, Session, Branding, Router } from '@toolpad/core';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
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
];

const BrandingComponent: Branding = {
  title: 'IGROK',
  logo: <></>,
}

export const BaseLayout: FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const  {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const user = useSelector(getUserAuthData);

  const [session, setSession] = useState<Session | null>();

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        navigate('login')
      },
      signOut: () => {
        dispatch(userActions.logout());
      },
    };
  }, []);

  useEffect(() => {
    if (user) {
      setSession({
        user: {
          name: user.fullName,
          email: user.email,
        }
      })
    }
  }, [user])

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: any) => navigate(String(path)),
    };
  }, [pathname, navigate]);


  return (
    <AppProvider branding={BrandingComponent} navigation={NAVIGATION} router={router} authentication={authentication} session={session}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  );
};
