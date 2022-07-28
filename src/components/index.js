import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./home";
  import Dashboard from './dashboard';
  import Login from './login';
  import Register from './register';

  const Main = () =>{
      return(
          <Router>
              <Switch>
                  <Route exact path='/'> <Home /> </Route>
                  <Route exact path='/dashboard'> <Dashboard /> </Route>
                  <Route exact path='/login'> <Login /> </Route>
                  <Route exact path='/register'> <Register /> </Route>
                
                  </Switch>

            </Router>
      )
  }

export default Main;