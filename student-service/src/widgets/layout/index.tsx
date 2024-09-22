import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { DashboardLayout, AppProvider, Branding, Router } from "@toolpad/core"
import { useDispatch } from "../../shared/lib/redux"
import { UserFeature } from "../../entities/user"
import { useMemo } from "react"
import { RoutePaths } from "../../app/config/route/config.tsx"
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded"
import CasesRoundedIcon from "@mui/icons-material/CasesRounded"
import { Box, ThemeProvider } from "@mui/material"
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
      signOut: () => {
        dispatch(UserFeature.actions.logout())
        navigate("login")
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
      session={{ user: {} }}
      navigation={[
        {
          segment: RoutePaths.main,
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
      authentication={authentication}
    >
      <DashboardLayout>
        <ThemeProvider theme={theme}>
          <Box padding={"20px"}>
            <Outlet />
          </Box>
        </ThemeProvider>
      </DashboardLayout>
    </AppProvider>
  )
}
