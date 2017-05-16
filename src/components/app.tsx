import * as React from 'react';
import './app.css';

const logo = require('../../public/logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What the Element?</h2>
      </div>
    );
  }
}

export default App;
