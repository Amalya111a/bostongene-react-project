import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Conditions from './pages/Conditions/Conditions';

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
