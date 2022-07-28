import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Login from './login';
import Dashboard from './dashboard';

const Routes = (props) =>{
  const navigate = ()=> {
    props.history.push('/dashboard')
  }
return(
  <Router>

      <ul>
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to='/login'> login </Link>
          </li>
         
          <li>
            <button onClick={()=> navigate()} > Dashboard </button>
          </li>
        </ul>

        <hr />
    <Switch> 
    <Route exact path="/">
            <Home />
          </Route>

           <Route  path="/login">
            <Login />
          </Route>

             <Route  path="/dashboard">
            <Dashboard />
          </Route>

    </Switch>
  </Router>

)
}

export default Routes;