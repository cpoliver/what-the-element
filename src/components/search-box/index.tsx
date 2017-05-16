import * as React from 'react';

import './search-box.css';

export type SearchBoxType = {
  text?: string,
  onChangeHandler: Function
};

export const SearchBox: React.StatelessComponent<SearchBoxType> = ({ text = '', onChangeHandler }) => (
  <div className="search-box">
    <input autoFocus
           onChange={(e: React.FormEvent<HTMLInputElement>): void => onChangeHandler(e)}/>
  </div>
);