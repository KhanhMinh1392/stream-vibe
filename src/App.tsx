import Layout from '@/components/Layout';
import { Route, Routes } from 'react-router';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Comp }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Comp />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
