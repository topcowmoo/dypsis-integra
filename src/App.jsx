import { useState, useEffect } from 'react'; // Import React hooks
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

function App() {
  // Initialize state by checking localStorage for saved theme or default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // If there is a saved theme in localStorage, use it. Otherwise, default to dark mode.
    return savedTheme === 'light' ? false : true;
  });

  // UseEffect hook to apply dark or light mode based on the state when the component mounts
  useEffect(() => {
    // Add or remove the 'dark' class on the <html> element based on the isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // Re-apply the mode whenever isDarkMode changes

  // Function to toggle dark mode and save the preference in localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode; // Toggle the current mode
      // Apply the appropriate theme class and save the preference
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Save the theme in localStorage
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light'); // Save the theme in localStorage
      }
      return newMode;
    });
  };

  return (
    <div className="bg-bgc-light dark:bg-bgc-dark min-h-screen transition-colors duration-300">
      {/* Pass the toggleDarkMode function and isDarkMode state to the Header component */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Outlet /> {/* Render child routes based on the current route */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
