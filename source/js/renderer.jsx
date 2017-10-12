import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './containers/Root.jsx';

export function run () {
  render(
    <Router>
      <Root />
    </Router>,
    document.getElementById('mount-point')
  );
}
