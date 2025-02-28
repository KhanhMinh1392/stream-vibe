import Logo from '../../assets/svg/Logo.svg';

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto py-8 text-white">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center">
          <img src={Logo} alt="react_logo" width={60} height={60} />
          <h1 className="text-xl">StreamVibe</h1>
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>Movies & Shows</li>
            <li>Support</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <h4>Search</h4>
          <h4>Notification</h4>
        </div>
      </div>
    </nav>
  );
}
