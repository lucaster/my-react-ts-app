import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

  const trueFetch = window.fetch;

  afterEach(() => {
    window.fetch = trueFetch;
  });

  it('renders', () => {

    window.fetch = jest.fn().mockResolvedValueOnce('first call response');

    render(
      <MemoryRouter initialEntries={['/welcome/new-user']}>
        <WelcomeComponent />
      </MemoryRouter>
    );
    const elem = screen.queryByText('The Welcome Page');
    expect(elem).toBeInTheDocument();
    const elemWithinRoute = screen.queryByText('Welcome new user!');
    expect(elemWithinRoute).toBeInTheDocument();
  });
});
