import React from 'react';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';

describe('check api call', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('check loading state in api call', () => {
    render(<App />);
    expect(screen.getByText('waiting for message...')).toBeInTheDocument();
  });

  test('mock fetch works', async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ users: [{ id: 1, firstName: 'sadd' }] })
    });

    const res = await fetch();
    const data = await res.json();
    expect(data.users[0].firstName).toBe('sadd');
  });
});
