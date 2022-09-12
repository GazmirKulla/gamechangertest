import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routesPath from './routes';

const Routes = () => (
  <Suspense fallback="loading...">
    <>
      <Switch>
        {routesPath.map((route) => (
          <Route
            key={route.path}
            path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </>
  </Suspense>
);

export default Routes;
