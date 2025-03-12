import { Bell, Search } from 'lucide-react';
import Logo from '../../assets/svg/Logo.svg';
import { useLocation, useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/constants/path';
import ListComponent from '../List';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Home',
    path: ROUTE_PATH.HOME,
  },
  {
    title: 'Movies & Shows',
    path: ROUTE_PATH.MOVIE,
  },
  {
    title: 'Support',
    path: '/support',
  },
  {
    title: 'Subscriptions',
    path: '/subscriptions',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto py-8 text-white">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center">
          <img src={Logo} alt="react_logo" width={60} height={60} />
          <h1 className="text-xl">StreamVibe</h1>
        </div>
        <div className="rounded-xl bg-black p-2.5">
          <ul className="flex items-center gap-7">
            <ListComponent
              items={menuItems}
              renderItem={(item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.title}
                    className={cn('cursor-pointer px-6 py-3.5 text-gray-400', isActive && 'rounded-lg bg-gray-400/20')}
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.title}
                  </li>
                );
              }}
            />
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Search />
          </div>
          <div>
            <Bell />
          </div>
        </div>
      </div>
    </nav>
  );
}
