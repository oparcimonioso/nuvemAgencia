import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navbar />
      <main className="pt-16"> {/* Espaço para a navbar */}
        <Home />
      </main>
    </div>
  );
}

// Adicione esta linha para exportação padrão
export default App;