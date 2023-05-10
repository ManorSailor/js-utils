import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders initial heading', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('changes heading on click', async () => {
    const user = userEvent.setup();

    render(<App />);
    const header = screen.getByRole('heading', { name: /our first test/i });

    await user.click(header);

    expect(header).toHaveTextContent(/our second test/i);
  });
});
