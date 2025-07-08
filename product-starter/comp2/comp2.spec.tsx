import React from 'react';
import { render } from '@testing-library/react';
import { BasicComp2 } from './comp2.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicComp2 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
