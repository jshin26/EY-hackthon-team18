import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      
      <Header />

    </BrowserRouter>
  );
}

export default App;
