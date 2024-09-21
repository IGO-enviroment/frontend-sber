import { LoginPage } from '@/pages/LoginPage';
import {RouteProps} from "react-router-dom";


export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  NOT_FOUND = "not-found",
  FORBIDDEN = "forbidden",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: "*",
};

export const Config: AppRouteProps[] = [
  {
    path: RoutePaths.main,
    element: <div>main</div>,
    authOnly: true,
  },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
    authOnly: false,
  },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
    authOnly: false,
  },
  {
    path: RoutePaths["not-found"],
    element: 'not-found'
  },
];
