import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

function Navigation () {
  return (
    <nav className="navigation">
      <ul className="navigation__link-parent">
        {routes.map(({ path, exact, desc }) => (
          <li key={path} className="navigation__link-block">
            <NavLink className="navigation__link" {...{ to: path, exact }}>
              {desc}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header () {
  return (
    <header id="header" className="header">
      <Navigation />
    </header>
  );
}
