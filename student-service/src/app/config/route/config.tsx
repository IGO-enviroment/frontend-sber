import { createBrowserRouter } from "react-router-dom"
import { BaseLayout } from "../../../widgets/layout"
import { ProfilePage } from "../../../pages/profile"
import { LoginPage } from "../../../pages/login/ui"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
  LOGIN = "login",
  OVERVIEW = "overview",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "",
  [AppRoutes.ABOUT]: "about",
  [AppRoutes.PROFILE]: "profile",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.OVERVIEW]: "/overview",
}

export const Config = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: RoutePaths.main,
        element: <div>main</div>,
      },
      {
        path: RoutePaths.profile,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
  },
  {
    path: RoutePaths.overview,
    element: <div>overview page</div>,
  },
])
