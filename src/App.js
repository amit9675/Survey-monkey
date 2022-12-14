import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AllRoutes from './components/AllRoutes';
import Nav from './components/Nav';
function App() {

  return (
    <>
      <Nav />
      <AllRoutes />
    </>
  );
}

export default App;
