import { ROUTE_PATH } from '@/constants/path';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie'));

export const routes = [
  { path: ROUTE_PATH.HOME, element: Home },
  {
    path: ROUTE_PATH.MOVIE,
    element: Movie,
  },
];
