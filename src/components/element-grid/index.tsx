import * as React from 'react';

import './element-grid.css';
import { Element, ElementType } from '../element';

export type ElementGridType = {
  elements: ElementType[]
};

export const ElementGrid: React.StatelessComponent<ElementGridType> = ({ elements }) => (
  <div className="element-grid">
    {elements.map((element: ElementType) => <Element {...element} />)}
  </div>
);