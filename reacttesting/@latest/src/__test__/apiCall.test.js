import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ApiCall from '../components/apiCall';

describe('ApiCall component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('shows loading state initially', () => {
    global.fetch = jest.fn(() =>
      new Promise(() => {}) // never resolves
    );
    render(<ApiCall />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user data after fetch', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            users: [{ id: 1, firstName: 'John', lastName: 'Doe' }],
          }),
      })
    );
    render(<ApiCall />);
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('Doe')).toBeInTheDocument();
    });
  });

  it('renders "No users found" when API returns empty list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ users: [] }),
      })
    );
    render(<ApiCall />);
    await waitFor(() => {
      expect(screen.getByText('No users found..')).toBeInTheDocument();
    });
  });

  it('handles fetch error gracefully', async () => {
    global.fetch = jest.fn(() => Promise.reject('API is down'));
    render(<ApiCall />);
    await waitFor(() => {
      expect(screen.getByText('No users found..')).toBeInTheDocument();
    });
  });

  it('renders multiple users', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            users: [
              { id: 1, firstName: 'Alice', lastName: 'Smith' },
              { id: 2, firstName: 'Bob', lastName: 'Jones' },
            ],
          }),
      })
    );
    render(<ApiCall />);
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });
});
