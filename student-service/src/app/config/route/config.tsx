import { createBrowserRouter } from "react-router-dom"
import { BaseLayout } from "@/widgets/layout"
import { ProfileEditPage } from "@/pages/profile-edit"
import { LoginPage } from "@/pages/login/ui"
import { RequireAuth } from "../../providers/router/ui/require-auth.tsx"
import { Practices } from "@/pages/practices"
import { Practice } from "@/pages/practice"
import { Organization } from "@/pages/organization"
import { Applications } from "@/pages/applications/ui"
import { RoutePaths } from "./paths"
import { ProfilePage } from "../../../pages/profile/ui"

export const Config = createBrowserRouter([
  {
    element: (
      <RequireAuth>
        <BaseLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: RoutePaths.profile,
        children: [
          { index: true, element: <ProfilePage /> },
          {
            path: RoutePaths["profile-edit"],
            element: <ProfileEditPage />,
          },
        ],
      },
      {
        path: RoutePaths.main,
        element: <Practices />,
      },
      {
        path: RoutePaths.practices,
        element: <Practices />,
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
