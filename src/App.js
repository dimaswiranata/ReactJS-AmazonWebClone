import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          {/* default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* React-Router */
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}

export default App;
