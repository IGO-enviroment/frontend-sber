import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/store";
import {ErrorBoundary} from "./app/providers/error-boundary";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StoreProvider>
          <ErrorBoundary>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </ErrorBoundary>
      </StoreProvider>
  </StrictMode>,
)
