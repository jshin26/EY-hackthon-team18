import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import Main from './Pages/Main/Main'

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Switch>
        <Route path="/market" exact component={Main} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
