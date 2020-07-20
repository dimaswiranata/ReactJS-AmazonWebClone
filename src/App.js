import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  //useEffect  <<<<<<<<<< POWERFUL
  // Piece of code which runs based on given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out...

        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })

    return () => {
      // Any cleanup operations go in here
      console.log('Clean Up');
      unsubscribe();
    }
  }, [])

  console.log('user: ', user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
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
