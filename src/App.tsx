import Layout from '@/components/Layout';
import { Route, Routes, useLocation } from 'react-router';
import { routes } from './routes';
import { PropsWithChildren, useLayoutEffect } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
