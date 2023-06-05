import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays login screen when not logged in', () => {
    const { getByText } = render(<App />);
    const loginScreen = getByText('Login');
    expect(loginScreen).toBeTruthy();
  });

  it('displays home screen after successful login', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    
    // Simulate user login
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'user1');
    fireEvent.changeText(passwordInput, 'userpass');
    fireEvent.press(loginButton);

    // Wait for authentication and navigation
    await waitFor(() => getByText('Welcome, user1!'));
    
    const homeScreen = getByText('Welcome, user1!');
    expect(homeScreen).toBeTruthy();
  });

  it('allows user to logout', async () => {
    const { getByText } = render(<App />);

    // Simulate user logout
    const logoutButton = getByText('Logout');
    fireEvent.press(logoutButton);

    // Wait for authentication and navigation
    await waitFor(() => getByText('Login'));

    const loginScreen = getByText('Login');
    expect(loginScreen).toBeTruthy();
  });
});
