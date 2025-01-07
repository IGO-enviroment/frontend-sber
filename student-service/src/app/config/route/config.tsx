import { createBrowserRouter } from "react-router-dom"
import { BaseLayout } from "@/widgets/layout"
import { ProfilePage } from "@/pages/profile"
import { LoginPage } from "@/pages/login/ui"
import { RequireAuth } from "../../providers/router/ui/require-auth.tsx"
import { Practices } from "@/pages/practices"
import { Practice } from "@/pages/practice"
import { Organization } from "@/pages/organization"
import { Applications } from "@/pages/applications/ui"
import { RoutePaths } from "./paths"

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
        path: RoutePaths.profile,
        element: <ProfilePage />,
      },
      {
        path: RoutePaths.main,
        element: <Practices />,
      },
      {
        path: RoutePaths.practices,
        element: <></>,
      },
      {
        path: RoutePaths.applications,
        element: <Applications />,
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
])
