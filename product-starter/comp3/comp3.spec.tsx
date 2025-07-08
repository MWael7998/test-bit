import React from 'react';
import { render } from '@testing-library/react';
import { BasicComp3 } from './comp3.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicComp3 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
