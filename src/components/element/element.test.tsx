import * as React from 'react';
import { shallow } from 'enzyme';

import Element from './index';

describe('Element', () => {
  it('should render without crashing', () => {
    shallow(<Element />);
  });
});