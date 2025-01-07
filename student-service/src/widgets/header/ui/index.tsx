import { Box, Button, Container } from "@mui/material"
import { styles } from "./styles.ts"
import logo from "../../../assets/logo.svg"

export const Header = () => {
  return (
    <Box sx={styles.root}>
      <Container>
        <Box sx={styles.container}>
          <img src={logo} />
          <Box sx={styles.controls}>
            <Button size="s" color="ghost" variant="contained">
              Выход
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
