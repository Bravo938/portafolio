import { Route, Routes } from 'react-router-dom';
import React from 'react';


import HomePage from './page/HomePage.jsx';



function App() {
  return (
    <>
      <Routes>
        
        <Route path="/portafolio/" element={<HomePage />} />
        
      </Routes>
    </>
  );
}

export default App;
