import { Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MatrixBackground from './components/Matrix.jsx';
import HomePage from './page/HomePage.jsx';



function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </>
  );
}

export default App;
