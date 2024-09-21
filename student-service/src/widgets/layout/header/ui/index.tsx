import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

import PersonIcon from "@mui/icons-material/Person"
import AppsIcon from "@mui/icons-material/Apps"

export function Header() {
  const routes = [
    { label: "Заявки", path: "/", icon: AppsIcon },
    { label: "Профиль", path: "/profile", authOnly: true, icon: PersonIcon },
  ]

  return (
    <AppBar position={"static"}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          {routes.map(({ label, path, icon: Icon }) => (
            <Box>
              <Button
                startIcon={<Icon />}
                size="medium"
                component={Link}
                sx={{ color: "white" }}
                to={path}
              >
                {label}
              </Button>
            </Box>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
