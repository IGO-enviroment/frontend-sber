import "./app.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ErrorBoundary } from "./providers/error-boundary";
import { Config } from "./config/route/config";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../shared/mui";
import { SnackbarProvider } from "notistack";
import { AuthProviderComponent } from "../pages/login";
import { setCookie } from "../shared/cookies/set";

const queryClient = new QueryClient();

export const App = () => {
  setCookie("auth", "dqwd", { expires: -1 });

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={5}>
        <AuthProviderComponent>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <RouterProvider router={Config} />
            </ErrorBoundary>
          </ThemeProvider>
        </AuthProviderComponent>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};
