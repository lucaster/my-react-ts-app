import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders!', () => {
    render(<App />);
    const elem = screen.getByText(/^Todos$/g);
    expect(elem).toBeInTheDocument();
  });
  test('renders', () => {
    render(<App />);
    const elem = screen.getByText(/^Todos$/g);
    expect(elem).toBeInTheDocument();
  });
});
