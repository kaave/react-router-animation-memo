import Home from './containers/Home.jsx';
import Access from './containers/Access.jsx';

export default [
  {
    path: '/',
    component: Home,
    desc: 'Home',
    exact: true,
  },
  {
    path: '/access',
    component: Access,
    desc: 'Access',
    exact: false,
  },
];
