import { FC, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { theme } from "../mui";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./header";
import { AppWrapper } from "./app-wrapper";
import { ProtectedRoute } from "../../pages/login";

export const BaseLayout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: ({ palette }) => palette.grey[200],
        }}
      >
        <ProtectedRoute>
          <Header />
          <AppWrapper>
            <Outlet />
          </AppWrapper>
        </ProtectedRoute>
      </Box>
    </ThemeProvider>
  );
};
