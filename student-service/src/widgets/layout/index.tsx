import { Header } from "./header"
import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: "40px" }} maxWidth="xl">
        <Outlet />
      </Container>
    </>
  )
}
