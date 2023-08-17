/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Load in the main app
AppRegistry.registerComponent(appName, () => App);
