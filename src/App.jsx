import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ReactGA from 'react-ga4';
import { LuArrowUpToLine } from 'react-icons/lu';

const TRACKING_ID = 'G-8HVKHYQ1WF';

function App() {
  const location = useLocation();

  // State for theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? false : true;
  });

  // State to show/hide Back to Top button
  const [showButton, setShowButton] = useState(false);

  // Google Analytics setup
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  // Event tracking
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const target = event.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        ReactGA.event({
          category: 'Interaction',
          action: `Clicked ${target.tagName}`,
          label: target.innerText || target.href,
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bgc-light dark:bg-bgc-dark min-h-screen transition-colors duration-300 relative">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          <LuArrowUpToLine className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
