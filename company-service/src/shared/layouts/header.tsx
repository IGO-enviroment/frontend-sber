import { Box, Button, Container, Link } from "@mui/material";
import logo from "../assets/logo.svg";

import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
export const styles: Record<string, SxProps<Theme>> = {
  root: {
    background: (theme) => theme.palette.grey[100],
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "72px",
    justifyContent: "space-between",
  },
};

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.root}>
      <Container>
        <Box sx={styles.container}>
          <Box sx={{ display: "flex", alignItems: "center", gap: '24px' }}>
            <img
              src={logo}
              onClick={() => navigate("/practices")}
              style={{ cursor: "pointer" }}
            />
             <Button
              size="s"
              sx={{
                backgroundColor: ({ palette }) => palette.grey[300],
                color: ({ palette }) => palette.grey[900],
              }}
              variant="contained"
              onClick={() => navigate("/practices")}
            >
              Практики
            </Button>
            <Button
              size="s"
              sx={{
                backgroundColor: ({ palette }) => palette.grey[300],
                color: ({ palette }) => palette.grey[900],
              }}
              variant="contained"
              onClick={() => navigate("/dialogs")}
            >
              Диалог
            </Button>
          </Box>

          <Box sx={styles.controls}>
            <Button
              size="s"
              sx={{
                backgroundColor: ({ palette }) => palette.grey[300],
                color: ({ palette }) => palette.grey[900],
              }}
              variant="contained"
            >
              Выход
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
