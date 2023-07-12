import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the HomePage component', () => {
  render(<App />);
  const homePageElement = screen.getByTestId('Home');
  expect(homePageElement).toBeInTheDocument();
});
