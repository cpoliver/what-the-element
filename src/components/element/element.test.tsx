import * as React from 'react';
import { shallow } from 'enzyme';

import Element from './index';

const props = {
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
  atomicMass: 1.008,
};

describe('Element', () => {
  it('should render without crashing', () => {
    shallow(<Element {...props} />);
  });
});