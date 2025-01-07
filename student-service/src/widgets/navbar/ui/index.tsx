import { Box, Stack } from "@mui/material"
import { Tab } from "@/shared/ui/tab"
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import { useLocation, useNavigate } from "react-router-dom"
import { RoutePaths } from "@/app/config/route/paths" // напрямую из за цикл. зависимостей

const tabs = [
  {
    path: RoutePaths.profile,
    text: "Мой профиль",
    icon: PermIdentityOutlinedIcon,
  },
  {
    path: RoutePaths.applications,
    text: "Мои заявки",
    icon: AttachFileOutlinedIcon,
  },
  {
    path: RoutePaths.practices,
    text: "Все практики",
    icon: GroupsOutlinedIcon,
  },
]

export const Navbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        height: "800px",
        width: "294px",
        padding: "16px",
        borderRadius: "24px",
        position: "sticky",
        top: "10px",
        left: 0,
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Stack spacing="12px">
        {tabs.map(({ text, path, icon: Icon }) => (
          <Tab
            key={path}
            startIcon={<Icon />}
            selected={path === pathname}
            onClick={() => navigate(path)}
            children={text}
          />
        ))}
      </Stack>
    </Box>
  )
}
