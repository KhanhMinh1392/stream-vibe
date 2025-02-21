import ReactLogo from './assets/react.svg';
function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-900">Hello Guys. This is React Template.</h1>
      <div className="mb-6 mt-8 flex items-center gap-4">
        <img src="./vite.svg" alt="vite_logo" width={160} height={160} />
        <p className="text-6xl">+</p>
        <img src={ReactLogo} alt="react_logo" width={160} height={160} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800">Create your new project together.</h1>
    </main>
  );
}

export default App;
