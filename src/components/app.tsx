import * as React from 'react';
import './app.css';

const logo = require('../../public/logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="title">What the Element?</h2>
        <span className="subtitle">a typescript demo app</span>
      </div>
    );
  }
}

export default App;
