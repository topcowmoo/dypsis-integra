import { useState, useEffect } from 'react'; // Import React hooks
import { Outlet, useLocation } from 'react-router-dom'; // Import Outlet for nested routes
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx';
import ReactGA from 'react-ga4'; // Use react-ga4 for Google Analytics 4

const TRACKING_ID = 'G-8HVKHYQ1WF'; // Your Google Analytics tracking ID

function App() {
  const location = useLocation();

  // Initialize Google Analytics and send page views on location change
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]); // Track pageviews when route changes

  // Initialize state by checking localStorage for saved theme or default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? false : true;
  });

  // Apply dark or light mode based on the isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // Re-apply mode whenever isDarkMode changes

  // Function to toggle dark mode and save preference in localStorage
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
      {/* Pass toggleDarkMode and isDarkMode state to Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Outlet /> {/* Render child routes based on current route */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
