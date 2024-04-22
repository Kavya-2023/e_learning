import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = ({ status }) => {
  const location = useLocation();

  // Set the status code when rendering the page
  React.useEffect(() => {
    if (status !== 404) return; // Only set status code if it's 404
    document.title = '404 - Page Not Found';
    // Set other metadata if needed
    return () => {
      // Cleanup logic if needed
    };
  }, [status]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested URL <strong>{location.pathname}</strong> was not found on this server.</p>
    </div>
  );
};

export default NotFound;
