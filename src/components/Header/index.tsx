import { Bell, Search } from 'lucide-react';
import Logo from '../../assets/svg/Logo.svg';

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto py-8 text-white">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center">
          <img src={Logo} alt="react_logo" width={60} height={60} />
          <h1 className="text-xl">StreamVibe</h1>
        </div>
        <div className="rounded-xl bg-black p-2.5">
          <ul className="flex items-center gap-7">
            <li className="rounded-lg bg-gray-400/20 px-6 py-3.5">Home</li>
            <li className="px-6 py-3.5 text-gray-400">Movies & Shows</li>
            <li className="px-6 py-3.5 text-gray-400">Support</li>
            <li className="px-6 py-3.5 text-gray-400">Subscriptions</li>
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
