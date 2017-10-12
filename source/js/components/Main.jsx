import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import routes from '../routes';

export default withRouter(({ location, onWillMount, onWillUnmount }) => (
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
        {routes.map(({ path, exact, component: MountComponent }) => (
          <Route key={path} {...{ path, exact }}>
            {({ match, ...rest }) => (match ? <MountComponent {...rest} {...{ onWillMount, onWillUnmount }} /> : null)}
          </Route>
        ))}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));
