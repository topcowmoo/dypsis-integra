import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Initialize state by checking localStorage for saved theme or default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // If there is a saved theme, use it. Otherwise, default to dark mode.
    return savedTheme === 'light' ? false : true;
  });

  // Apply dark or light mode based on the state when the component mounts
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // Re-apply the mode whenever isDarkMode changes

  // Toggle dark mode and update state and class
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div className="bg-bgc-light dark:bg-bgc-dark min-h-screen transition-colors duration-300">
      {/* Pass the toggleDarkMode function and isDarkMode state to the Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
