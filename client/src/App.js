import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
// import Main from './Pages/Main/Main'

function App() {
  return (
    <BrowserRouter>
      
      <div className="page-content">
        <Header />
        <Switch>
          

<<<<<<< HEAD
          <Route path="/market" component={Main} />
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
=======
    <div className = "page-content">

      <Header />
      {/* <Switch>
        <Route path="/market" exact component={Main} />
      </Switch> */}

    </div>
>>>>>>> 7ee05567a376aa1fb331035eb338f2b321afc1b0
      

    </BrowserRouter>
  );
}

export default App;
