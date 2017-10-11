import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import routes from '../routes';

export default withRouter(({ location }) => (
  <TransitionGroup
    component="main"
    id="main"
    className="main"
    role="main"
  >
    <CSSTransition
      key={location.pathname}
      classNames="route-change-animate"
      timeout={800}
      appear
    >
      <Switch {...{ location }}>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} {...{ path, exact, component }} />
        ))}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));
