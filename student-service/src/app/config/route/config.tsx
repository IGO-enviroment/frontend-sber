import {RouteProps} from "react-router-dom";


export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const Config: AppRouteProps[] = [
  {
    path: RoutePaths.main,
    element: <div>main</div>
  },
  {
    path: RoutePaths.about,
    element: <div>about</div>
  },
  {
    path: RoutePaths.profile,
    element: <div>profile</div>,
    authOnly: true,
  },
  {
    path: RoutePaths["not-found"],
    element: 'not-found'
  },
];
