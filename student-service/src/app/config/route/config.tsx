import { createBrowserRouter } from "react-router-dom"
import { BaseLayout } from "../../../widgets/layout"
import { ProfilePage } from "../../../pages/profile"
import { LoginPage } from "../../../pages/login/ui"
import { RequireAuth } from "../../providers/router/ui/require-auth.tsx"
import { Practices } from "../../../pages/practices"
import { Practice } from "../../../pages/practice"
import { Organization } from "../../../pages/organization"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
  LOGIN = "login",
  OVERVIEW = "overview",
  PRACTICES = "practices",
  ORGANIZATION = "organization",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "",
  [AppRoutes.ABOUT]: "about",
  [AppRoutes.PROFILE]: "profile",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.OVERVIEW]: "/overview",
  [AppRoutes.PRACTICES]: "/practices",
  [AppRoutes.ORGANIZATION]: "/organization",
}

export const Config = createBrowserRouter([
  {
    path: "",
    element: (
      <RequireAuth>
        <BaseLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: RoutePaths.main,
        element: <div>main</div>,
      },
      {
        path: RoutePaths.profile,
        element: <ProfilePage />,
      },
      {
        path: RoutePaths.practices,
        element: <Practices />,
      },
      {
        path: `${RoutePaths.practices}/:id`,
        element: <Practice />,
      },
      {
        path: `${RoutePaths.organization}/:id`,
        element: <Organization />,
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
