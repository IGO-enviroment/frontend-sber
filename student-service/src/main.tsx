import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { StoreProvider } from "./app/providers/store"
import { ErrorBoundary } from "./app/providers/error-boundary"
import { CssBaseline } from "@mui/material"
import { App } from "./app/app.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <CssBaseline />
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>,
)
