import { Outlet } from "react-router-dom"
import { Box, Container, GlobalStyles } from "@mui/material"
import { Navbar } from "@/widgets/navbar"
import { Header } from "@/widgets/header/ui"

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: { background: theme.palette.grey[200] },
        })}
      />
      <Header />
      <Container sx={{ pt: "32px", pb: "32px", display: "flex", gap: "12px" }}>
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}
