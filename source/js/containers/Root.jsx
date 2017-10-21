import React from 'react';

import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import ModalRouteChange from '../components/ModalRouteChange.jsx';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = { routeChange: 'notMount' };
    this.handleContainerWillMount = this.handleContainerWillMount.bind(this);
    this.handleContainerWillUnmount = this.handleContainerWillUnmount.bind(this);
    this.handleContainerReady = this.handleContainerReady.bind(this);
  }

  handleContainerWillMount (type) {
    console.log(new Date(), 'handleContainerWillMount:', type);
    if (this.state.routeChange === 'notMount') {
      this.setState({ ...this.state, routeChange: 'stay' });
    } else if (this.state.routeChange !== 'enter') {
      this.setState({ ...this.state, routeChange: 'enter' });
    }
  }

  handleContainerWillUnmount (type) {
    console.log(new Date(), 'handleContainerWillUnmount:', type);
  }

  handleContainerReady () {
    console.log(new Date(), 'handleContainerReady');
    this.setState({ ...this.state, routeChange: 'stay' });
  }

  render () {
    const { routeChange } = this.state;
    const {
      handleContainerWillMount: onWillMount,
      handleContainerWillUnmount: onWillUnmount,
      handleContainerReady: onReady
    } = this;

    return (
      <div className="root">
        <Header />
        <Main {...{ onWillMount, onWillUnmount, onReady }} />
        <ModalRouteChange status={routeChange} />
      </div>
    );
  }
}
