import { Role } from '@/entities/User';
import ForbiddenPage from '@/pages/ForbiddenPage/ui/ForbiddenPage';
import { LoginPage } from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage/ui/MainPage';
import { StudentInvatationPage } from '@/pages/StudentInvatationPage/ui/StudentInvatationPage.async';
import {RouteProps} from "react-router-dom";


export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  hasLayout?: boolean;
  roles?: Role[];
};

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  NOT_FOUND = "not-found",
  FORBIDDEN = "forbidden",
  STUDENT_INVATATION = 'student-invatation',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.STUDENT_INVATATION]: "student-invitation",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: "*",
};

export const Config: AppRoutesProps[] = [
  {
    path: RoutePaths.main,
    element: <MainPage></MainPage>,
    hasLayout: true
    // authOnly: true,
  },
  {
    path: RoutePaths['student-invatation'],
    element: <StudentInvatationPage></StudentInvatationPage>,
    hasLayout: true
    // authOnly: true,
  },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
    authOnly: false,
  },
  {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
    authOnly: false,
  },
  {
    path: RoutePaths["not-found"],
    element: 'not-found'
  },
];
