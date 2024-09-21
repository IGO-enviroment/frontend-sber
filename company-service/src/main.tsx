import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { StoreProvider } from './app/providers/store';
import { ErrorBoundary } from './app/providers/error-boundary';
import { App } from './app/app';
import { Config } from './app/config/route/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <ErrorBoundary>
          <RouterProvider router={Config} />
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>,
);



