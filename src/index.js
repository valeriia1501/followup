import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Main from './Main';
import Profile from './sign-up_sign-in/Profile';
import Dashboard from './features/Dashboard.js';
import SignIn from './sign-up_sign-in/SignIn.js';
import SignUp from './sign-up_sign-in/SignUp.js';
import Subscriptions from './sign-up_sign-in/Subscriptions.js';

ReactDOM.render(
    <Router>
        <Switch>
            {/* <Route exact path="/">     
              <Main/>
            </Route>
            <Route path="/sign-in">     
              <SignIn/>
            </Route>
            <Route exact path="/profile">     
              <Profile/>
            </Route>
            <Route exact path="/profile/sign-up">     
              <SignUp/>
            </Route>
            <Route exact path="/profile/sign-up/subscriptions">     
              <Subscriptions/>
            </Route> */}
            <Route path="/">     
              <Dashboard/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById("root")
)

