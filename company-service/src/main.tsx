import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { setupWorker } from 'msw';
import { getMocks } from './shared/mocks';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
