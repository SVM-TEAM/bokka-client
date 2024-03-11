import React from 'react';
import RouterConfig from './routes';
import CommonSnackBar from './components/atoms/snack-bars/CommonSnackBar';
import './App.css';

const App = () => {
  return (
    <>
      <RouterConfig />
      <CommonSnackBar />
    </>
  );
};

export default App;
