import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (

    <StoreProvider>
      <Homepage />
    </StoreProvider>

  );
}

export default App;
