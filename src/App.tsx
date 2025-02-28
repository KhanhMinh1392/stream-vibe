import { Route, Routes } from 'react-router';
import Layout from '@/components/Layout';
import { routes } from './routes';
import { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Comp }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Comp />
              </Layout>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
