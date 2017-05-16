import * as React from 'react';

import './element.css';

type Props = {
  name: string,
  symbol: string,
  atomicNumber: number,
  atomicMass: number
};

const Element: React.StatelessComponent<Props> = ({ name, symbol, atomicNumber, atomicMass }) => (
  <div className="element">
    <span className="element__number">{atomicNumber}</span>
    <span className="element__symbol">{symbol}</span>
    <span className="element__name">{name}</span>
    <span className="element__mass">{atomicMass}</span>
  </div>
);

export default Element;
