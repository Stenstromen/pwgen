import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate P4\$\$w0rd/i);
  expect(linkElement).toBeInTheDocument();
});
