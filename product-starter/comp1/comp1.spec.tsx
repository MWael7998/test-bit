import React from 'react';
import { render } from '@testing-library/react';
import { BasicComp1 } from './comp1.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicComp1 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
