import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import routes from '../routes';

export default withRouter(({ location }) => (
  <main id="main" className="main" role="main">
    <Switch {...{ location }}>
      {routes.map(({ path, component, exact }) => (
        <Route key={path} {...{ path, exact, component }} />
      ))}
    </Switch>
  </main>
));
