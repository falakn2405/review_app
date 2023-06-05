describe('App', () => {
  // Existing test cases...

  it('displays error message on invalid login', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    // Simulate user login with invalid credentials
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'invaliduser');
    fireEvent.changeText(passwordInput, 'invalidpass');
    fireEvent.press(loginButton);

    // Wait for authentication and display of error message
    await waitFor(() => getByText('Invalid username or password'));

    const errorMessage = getByText('Invalid username or password');
    expect(errorMessage).toBeTruthy();
  });

  it('displays review form when "Write a Review" button is pressed', async () => {
    const { getByText, getByTestId } = render(<App />);

    // Simulate button press to open review form
    const writeReviewButton = getByText('Write a Review');
    fireEvent.press(writeReviewButton);

    // Wait for the review form to be displayed
    await waitFor(() => getByTestId('review-form'));

    const reviewForm = getByTestId('review-form');
    expect(reviewForm).toBeTruthy();
  });

  it('displays updated user profile after making changes in settings', async () => {
    const { getByText, getByTestId } = render(<App />);

    // Simulate navigation to settings screen
    const settingsButton = getByTestId('settings-button');
    fireEvent.press(settingsButton);

    // Wait for the settings screen to be displayed
    await waitFor(() => getByTestId('settings-screen'));

    // Simulate changes in user profile
    const nameInput = getByTestId('name-input');
    fireEvent.changeText(nameInput, 'John Doe');

    const saveButton = getByText('Save');
    fireEvent.press(saveButton);

    // Wait for the user profile to be updated
    await waitFor(() => getByText('Welcome, John Doe!'));

    const updatedProfile = getByText('Welcome, John Doe!');
    expect(updatedProfile).toBeTruthy();
  });

  it('displays spectacles details when a spectacle is selected', async () => {
    const { getByText, getByTestId } = render(<App />);
  
    // Simulate navigation to explore screen
    const exploreButton = getByTestId('explore-button');
    fireEvent.press(exploreButton);
  
    // Wait for the explore screen to be displayed
    await waitFor(() => getByTestId('explore-screen'));
  
    // Simulate selection of a spectacle
    const spectacleItem = getByText('Ray-Ban Aviator Sunglasses');
    fireEvent.press(spectacleItem);
  
    // Wait for the spectacle details screen to be displayed
    await waitFor(() => getByTestId('spectacle-details'));
  
    const spectacleDetails = getByTestId('spectacle-details');
    expect(spectacleDetails).toBeTruthy();
  });
  
  it('allows user to add a review for a spectacle', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  
    // Simulate navigation to explore screen
    const exploreButton = getByTestId('explore-button');
    fireEvent.press(exploreButton);
  
    // Wait for the explore screen to be displayed
    await waitFor(() => getByTestId('explore-screen'));
  
    // Simulate selection of a spectacle
    const spectacleItem = getByText('Ray-Ban Aviator Sunglasses');
    fireEvent.press(spectacleItem);
  
    // Wait for the spectacle details screen to be displayed
    await waitFor(() => getByTestId('spectacle-details'));
  
    // Simulate clicking on the "Add Review" button
    const addReviewButton = getByText('Add Review');
    fireEvent.press(addReviewButton);
  
    // Wait for the review form screen to be displayed
    await waitFor(() => getByTestId('review-form'));
  
    // Simulate filling out the review form
    const ratingInput = getByTestId('rating-input');
    const commentInput = getByPlaceholderText('Enter your review');
    const submitButton = getByText('Submit');
  
    fireEvent.changeText(ratingInput, '5');
    fireEvent.changeText(commentInput, 'These spectacles are amazing!');
    fireEvent.press(submitButton);
  
    // Wait for the review to be submitted and processed
    await waitFor(() => getByText('Review submitted successfully!'));
  
    const successMessage = getByText('Review submitted successfully!');
    expect(successMessage).toBeTruthy();
  });
  
  it('displays user profile after successful login', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
  
    // Simulate user login
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
  
    fireEvent.changeText(usernameInput, 'user1');
    fireEvent.changeText(passwordInput, 'userpass');
    fireEvent.press(loginButton);
  
    // Wait for authentication and navigation
    await waitFor(() => getByText('Welcome, user1!'));
  
    // Simulate navigation to user profile
    const profileButton = getByTestId('profile-button');
    fireEvent.press(profileButton);
  
    // Wait for the user profile screen to be displayed
    await waitFor(() => getByTestId('user-profile'));
  
    const userProfile = getByTestId('user-profile');
    expect(userProfile).toBeTruthy();
  });
  
});
