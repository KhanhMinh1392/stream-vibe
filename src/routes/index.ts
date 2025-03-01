import { ROUTE_PATH } from '@/constants/path';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));

export const routes = [{ path: ROUTE_PATH.HOME, element: Home }];
