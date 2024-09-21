import { RoutePaths } from '@/app/config/route/config';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppProvider, DashboardLayout, Navigation, Session, Branding } from '@toolpad/core';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NAVIGATION: Navigation = [
  {
    segment: RoutePaths['student-invatation'],
    title: 'Пригласить студентов',
  },
];

const BrandingComponent: Branding = {
  title: 'IGROK',
  logo: <></>,
}

export const BaseLayout: FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
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


  return (
    <AppProvider branding={BrandingComponent} navigation={NAVIGATION} authentication={authentication} session={session}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  );
};
