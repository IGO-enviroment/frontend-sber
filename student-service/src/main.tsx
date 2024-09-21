import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { StoreProvider } from "./app/providers/store"
import { ErrorBoundary } from "./app/providers/error-boundary"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { App } from "./app/app.tsx"
import { theme } from "./shared/mui"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>,
)
