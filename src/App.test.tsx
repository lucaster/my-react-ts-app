import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test('userEvent example to interact with elements', () => {
    render(<App />);
    const elem = screen.queryByText(/^Todos$/g);
    userEvent.click(elem!);
  });
});
