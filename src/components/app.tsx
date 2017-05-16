import * as React from 'react';

import './app.css';
import Element from './element';

const logo = require('../../public/logo.svg');

const elementProps = {
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
  atomicMass: 1.008,
};

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="title">What the Element?</h2>
        <span className="subtitle">a typescript demo app</span>
        <Element {...elementProps} />
      </div>
    );
  }
}

export default App;
