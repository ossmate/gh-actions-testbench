import React from 'react';
import { Outlet } from 'react-router-dom';


const App = () => {
    const environment = import.meta.env.VITE_ENVIRONMENT;

  const showEnvInfo = ['development', 'staging', 'preview'].includes(environment);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Hello Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      <footer className="text-center mt-8">
        {showEnvInfo && (
        <div className="text-sm text-gray-600 mt-2">
          {__VITE_ENVIRONMENT__} | v{__APP_VERSION__}
        </div>
        )}
      </footer>
    </div>
  );
};

export default App;
