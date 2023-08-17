# React Native Prototype

A hybrid mobile app prototype for testing React Native. This prototype implements a simple party planner using TypeScript and React Native.

## Project Structure

The project is structured as follows:

Folders:

- [android](./android): Android project and config files
- [components](./components/): React app components
- [e2e](./e2e): Unit tests
- [ios](./ios): iOS project and config files
- [models](./models/): Data models and types for the app
- [screens](./screens/): React app pages

Files:

- [.detoxrc.js](./.detoxrc.js): Detox configuration file for testing
- [.eslitrc.js](./.eslitrc.js): ESLint configuration file for linting
- [App.tsx](./App.tsx): React app entry point

## Prerequisites

Make sure you have the following installed:

 - Requires[React Native](https://reactnative.dev/docs/environment-setup) 0.71
 - [Detox](https://wix.github.io/Detox/docs/introduction/getting-started/) 20 (for testing) or newer.

## Installing

```bash
npm i
```

## Running the app in debug

Run the following command and select the option for your mobile OS.

```bash
npx react-native start
```

> Note: This application was designed for iOS. Android builds may have incomplete behavior

## Running the tests

Test can be found in the `e2e` directory. Run the following command to execute the tests on iOS:

```bash
detox test --configuration ios.sim.debug
```

> Note: Detox is not configured in this project for Android deployments. Configuration instructions are available at the link above 
