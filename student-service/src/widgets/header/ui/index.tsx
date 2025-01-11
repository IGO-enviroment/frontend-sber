import { Box, Button, Container } from "@mui/material"
import { styles } from "./styles.ts"
import logo from "../../../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import { RoutePaths } from "../../../app/config/route"

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Box sx={styles.root}>
      <Container>
        <Box sx={styles.container}>
          <img src={logo} />
          <Box sx={styles.controls}>
            <Button
              size="s"
              color="ghost"
              variant="contained"
              onClick={() => {
                navigate(RoutePaths.login)
              }}
            >
              Выход
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
