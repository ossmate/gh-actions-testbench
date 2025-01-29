import React from 'react'

const TechnicalInfo = () => {
  const environment = import.meta.env.VITE_ENVIRONMENT;
  const version = __APP_VERSION__;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Environment:</span>
            <span className={`px-2 py-0.5 rounded ${
              environment === 'development' ? 'bg-blue-500' :
              environment === 'staging' ? 'bg-yellow-500' :
              environment === 'preview' ? 'bg-purple-500' :
              environment === 'production' ? 'bg-green-500' :
              'bg-gray-500'
            }`}>
              {environment || "local"}
            </span>
          </div>
          <div>
            <span className="font-semibold mr-2">Version:</span>
            <span className="font-mono">{version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TechnicalInfo;