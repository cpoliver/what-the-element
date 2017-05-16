import * as React from 'react';

import './app.css';
import { Element, ElementType } from './element';

const logo = require('../../public/logo.svg');
const pt = require('periodic-table');

class App extends React.Component<{}, null> {
  renderElement(element: ElementType) {
    return <Element {...element} />;
  }

  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="title">What the Element?</h2>
        <span className="subtitle">a typescript demo app</span>
        { pt.all().map(this.renderElement) }
      </div>
    );
  }
}

export default App;
