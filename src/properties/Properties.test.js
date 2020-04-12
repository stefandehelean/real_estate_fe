import React from 'react';
import { render } from '@testing-library/react';
import Properties from './Properties';

test('renders learn react link', () => {
  const { getByText } = render(<Properties />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
