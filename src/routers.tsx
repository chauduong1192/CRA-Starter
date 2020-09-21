import React from 'react';import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Home } from 'views';

const routes = [
    {
      path: "/",
      component: Home,
      exact: true,
    },
];

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} exact={route.exact}>
            {route.component}
        </Route>
    );
};

const Routers = () => 
    <Router>
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    </Router>

export default Routers;