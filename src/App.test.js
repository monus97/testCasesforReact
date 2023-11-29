import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello this is react testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('render login component for testing ', () => {
  const {getByText} = render(<App />);
  const childComponent =getByText(/Login Page/i)
  expect(childComponent).toBeTruthy()
});