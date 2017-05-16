import * as React from 'react';

import './element.css';

export type ElementType = {
  name: string,
  symbol: string,
  atomicNumber: number,
  atomicMass: number
};

export const Element: React.StatelessComponent<ElementType> = ({ name, symbol, atomicNumber, atomicMass }) => (
  <div className="element">
    <span className="element__number">{atomicNumber}</span>
    <span className="element__symbol">{symbol}</span>
    <span className="element__name">{name}</span>
    <span className="element__mass">{atomicMass}</span>
  </div>
);