import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function Root () {
  return (
    <Router>
      <div className="root">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export function run () {
  render(<Root />, document.getElementById('mount-point'));
}
