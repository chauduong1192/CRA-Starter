import React from 'react';import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Home } from 'views';

const Routers = () => 
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </Router>

export default Routers;