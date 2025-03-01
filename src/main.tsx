import Loading from '@/components/Loading/index.tsx';
import Provider from '@/provider/index.tsx';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </Provider>
    </Suspense>
  </StrictMode>,
);
