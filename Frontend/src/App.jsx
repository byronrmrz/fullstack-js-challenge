import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/DashboardPage';

function App() {

  const [showDashboard, setShowDashboard] = useState(false);

  // Función manejadora para navegar al Dashboard
  const handleEnterSystem = () => {
    setShowDashboard(true);
  };

  return (
    <>
      {showDashboard ? (
        <DashboardPage />
      ) : (
        <WelcomePage onEnter={handleEnterSystem} />
      )}
    </>
  );
}

export default App;