// Import necessary modules from React and React Router DOM
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css'; 
import App from './App.jsx'; 
import Home from './pages/Home.jsx'; 
import Error from './pages/Error.jsx'; 

// Create a router with routes for different pages in the application
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // The main component rendered at the root
    errorElement: <Error />, // Error boundary for handling unmatched routes or other errors
    children: [
      {
        index: true, // Indicates that this is the default child route for '/'
        element: <Home />, // Home page component
      },
    ],
  },
]);

// Render the application and the router into the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Provide the router configuration to the app
);
