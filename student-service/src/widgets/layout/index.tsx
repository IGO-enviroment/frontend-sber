import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { DashboardLayout, AppProvider, Branding, Router } from "@toolpad/core"
import { useDispatch } from "../../shared/lib/redux"
import { UserFeature } from "../../entities/user"
import { useMemo } from "react"
import { AppRoutes, RoutePaths } from "../../app/config/route/config.tsx"
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded"
import CasesRoundedIcon from "@mui/icons-material/CasesRounded"
import { Box } from "@mui/material"
import { theme } from "../../shared/mui"

const BrandingComponent: Branding = {
  title: "IGROK",
  logo: <></>,
}

export const BaseLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        navigate("login")
      },
      signOut: () => {
        dispatch(UserFeature.actions.logout())
      },
    }
  }, [])

  const router = useMemo<Router>(() => {
    return {
      pathname: pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => navigate(String(path)),
    }
  }, [pathname, navigate])

  return (
    <AppProvider
      branding={BrandingComponent}
      router={router}
      navigation={[
        {
          segment: AppRoutes.PRACTICES,
          title: "Практики",
          icon: <CasesRoundedIcon />,
        },
        {
          segment: RoutePaths.profile,
          title: "Профиль",
          icon: <AssignmentIndRoundedIcon />,
          children: [
            {
              title: "Личные данные",
              segment: RoutePaths.personal,
            },
            {
              title: "Заявки",
              segment: RoutePaths.applications,
            },
          ],
        },
      ]}
      theme={theme}
      authentication={authentication}
    >
      <DashboardLayout>
        <Box padding={"20px"}>
          <Outlet />
        </Box>
      </DashboardLayout>
    </AppProvider>
  )
}
