import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { StoreProvider } from "./app/providers/store"
import { ErrorBoundary } from "./app/providers/error-boundary"
import { CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { RouterConfig } from "./app/config/route"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <CssBaseline />
        <RouterProvider router={RouterConfig} />
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>,
)
