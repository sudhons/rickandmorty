import Home from './views/home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <header className="text-center py-6 bg-white">
        <h1 className="text-4xl font-bold md:text-7xl">Rick And Morty</h1>
      </header>
      <div className="max-w-screen-xl p-5 mx-auto flex-grow flex w-full">
        <Home />
      </div>
    </div>
  );
}

export default App;
