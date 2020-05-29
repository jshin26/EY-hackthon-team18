import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import SubHeader from './Components/SubHeader/SubHeader'

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Switch>
        <Route path="/market" exact component={SubHeader} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
