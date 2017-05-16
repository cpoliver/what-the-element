import * as React from 'react';

import './app.css';
import { ElementType } from './element';
import { ElementGrid } from './element-grid';
import { SearchBox } from './search-box';

const logo = require('../../public/logo.svg');
const elements = require('periodic-table').all();

const isMatch = (searchText: string, elementName: string) => (
  new RegExp(`^${searchText}`, 'i').test(elementName)
);

class App extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = { elements, searchText: '' };
  }

  onSearchTextChange(e: React.FormEvent<HTMLInputElement>) {
    const searchText = (e.target as HTMLInputElement).value;

    this.setState({
      searchText,
      elements: elements.filter(
        (element: ElementType) => isMatch(searchText, element.name)
      )
    });
  }
  
  render() {
    return (
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="title">What the Element?</h2>
        <span className="subtitle">testing typescript with create-react-app&hellip; for science!</span>
        <SearchBox text={this.state.text} onChangeHandler={this.onSearchTextChange} />
        <ElementGrid elements={this.state.elements} />
      </div>
    );
  }
}

export default App;
