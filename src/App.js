import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Dashboard from './Dashboard.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default function App() {


  return (
    <Router>
        <div>Main page</div>
        {/* <a href="/sign-in">Link to Sign-in</a><br/> */}
        {/* <Link to='/sign-up'>Link to Sign-up</Link> */}

        <Switch>
            <Route path="/sign-in">     
              <SignIn/>
            </Route>
            <Route path="/sign-up">     
              <SignUp/>
            </Route>
            <Route path="/dashboard">     
              <Dashboard/>
            </Route>
        </Switch>  
        
    </Router>
  );
}


