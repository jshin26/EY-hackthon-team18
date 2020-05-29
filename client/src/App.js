import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import Main from './Pages/Main/Main'

function App() {
  return (
    <BrowserRouter>

    <div className = "page-content">

      <Header />
      <Switch>
        <Route path="/market" exact component={Main} />
      </Switch>

    </div>
      

    </BrowserRouter>
  );
}

export default App;
