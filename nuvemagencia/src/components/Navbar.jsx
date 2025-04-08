import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { id: 1, name: 'Início', link: '/' },
    { id: 2, name: 'Pacotes', link: '/pacotes' },
    { id: 3, name: 'Destinos', link: '/destinos' },
  ];

  return (
    <nav className={`${isDarkMode ? 'dark' : ''} fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/75 dark:bg-gray-800/75 border-b border-gray-200/10 dark:border-gray-800/50`}>
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 mx-0 px-4 sm:px-6 lg:px-8">
          
          {/* Logo e Botão Mobile */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Nuvem</span>
            </div>
          </div>

          {/* Centro: Links de Navegação (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Botões Direita */}
          <div className="flex items-center space-x-4">
            {/* Botão Entrar (Desktop) */}
            <button className="hidden md:inline-flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Entrar
            </button>
            
            {/* Botão Tema (Desktop) */}
            <button
              onClick={toggleTheme}
              className="hidden md:inline-flex p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Botão Tema (Mobile) */}
            <button
              onClick={toggleTheme}
              className="md:hidden inline-flex p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Botão Hamburger (Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg text-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {item.name}
              </a>
            ))}
            {/* Botão Entrar (Mobile) */}
            <div className="px-4 py-2">
              <button className="w-auto mx-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Entrar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;