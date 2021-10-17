import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({
    url: '/welcome/new-user',
    path: '/welcome',
  }),
  useHistory: () => [],
}));

describe('WelcomeComponent', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <WelcomeComponent />
      </BrowserRouter>
    );
    const elem = screen.queryByText('The Welcome Page');
    expect(elem).toBeInTheDocument();
  });
});
