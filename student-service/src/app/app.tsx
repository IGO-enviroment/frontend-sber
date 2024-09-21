import "./App.css"
import { Router } from "./providers/router"
import { Container } from "@mui/material"
import { Header } from "../widgets/layout/header"

function App() {
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: "40px" }} maxWidth="xl">
        <Router />
      </Container>
    </>
  )
}

export default App
