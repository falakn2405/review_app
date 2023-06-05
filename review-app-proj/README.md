# Spectacles Review App

Spectacles Review App is a mobile application built using React Native and React Navigation. It allows users to write reviews for different types of spectacles and explore reviews from other users.

## Features

- **User Authentication**: Users can sign in, sign up, and sign out using their credentials. The app securely stores user tokens in AsyncStorage for persistent login sessions.

- **Drawer Navigation**: The app uses a drawer navigation pattern to provide easy access to different screens. Users can access the main tabs, review form, explore screen, and settings screen through the drawer menu.

- **Main Tab Screen**: The main screen of the app displays various tabs for different functionalities, such as home, notifications, favorites, and profile. Users can switch between these tabs to access different features.

- **Review Form**: Users can write and submit reviews for different types of spectacles using the review form screen. They can provide ratings, write detailed comments about the spectacles, and select relevant categories (e.g., design, comfort, durability). The app validates and stores the submitted reviews for further processing.

- **Explore Screen**: The explore screen allows users to browse and discover reviews for different types of spectacles. It provides a list of trending spectacles and categories for users to explore. Users can select a specific spectacle or category to view related reviews and comments.

- **Settings Screen**: Users can manage their app settings through the settings screen. They can update their profile information, change account settings, and customize app preferences.

## Installation

To run the app locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run the app on a simulator or device using the appropriate command (e.g., `npm run ios` or `npm run android`)

Make sure you have the necessary development environment set up (e.g., Node.js, React Native CLI, etc.) before running the app.

## Usage

1. Start the development server: `npm start`
2. Connect your mobile device or emulator.
3. Run the app on your device/emulator using the Expo app or the following command: `npm run android` (for Android) or `npm run ios` (for iOS).

## Technologies Used

- React Native: A JavaScript framework for building mobile applications.
- React Navigation: A library for implementing navigation patterns in React Native.
- AsyncStorage: A module for persistently storing data in React Native apps.

## Dependencies

The app relies on the following dependencies:

- **react**: ^17.0.2
- **react-native**: ^0.64.2
- **@react-navigation/native**: ^6.0.2
- **@react-navigation/drawer**: ^6.1.0
- **@react-native-async-storage/async-storage**: ^1.15.5
- *Other dependencies as specified in package.json*

Please refer to the package.json file for the complete list of dependencies.

## Contributing

Contributions to the Spectacles Review App are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

Please ensure that your code follows the project's coding conventions and includes appropriate tests.

## License

The Spectacles Review App is open-source software licensed under the [MIT license](LICENSE).

## Contact

For any questions or inquiries, please email us at [contact@example.com](mailto:contact@example.com).
