import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/app';
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/store";
import {ErrorBoundary} from "./app/providers/error-boundary";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StoreProvider>
          <ErrorBoundary>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </ErrorBoundary>
      </StoreProvider>
      <ToastContainer limit={3} position="bottom-center" autoClose={2000} closeOnClick />
  </StrictMode>,
)
