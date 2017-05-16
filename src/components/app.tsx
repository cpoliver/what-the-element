import * as React from 'react';

import './app.css';
import { ElementGrid } from './element-grid';

const logo = require('../../public/logo.svg');
const pt = require('periodic-table');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="title">What the Element?</h2>
        <span className="subtitle">a typescript demo app</span>
        <ElementGrid elements={pt.all()} />
      </div>
    );
  }
}

export default App;
