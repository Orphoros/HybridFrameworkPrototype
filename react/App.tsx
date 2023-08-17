import React from 'react';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Party} from './models/types';

import EditScreen from './screens/edit_screen';
import HomeScreen from './screens/home_screen';

// Creates a navigator for the app to route between pages
const Stack = createNativeStackNavigator();

// Main App component
function App() {
  // List of parties to display
  let parties: Party[] = [];
  return (
    // Setup the navigator
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen // Home screen
          name="Home"
          component={HomeScreen}
          options={{
            // Settings for the navigation header
            title: 'PartyPanner',
            headerStyle: {backgroundColor: '#019878'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
            },
          }}
          // Load the party list into the home screen
          initialParams={{parties}}
        />
        <Stack.Screen // Edit screen
          name="Edit"
          component={EditScreen}
          options={{
            // Settings for the navigation header
            title: 'Edit party',
            headerStyle: {backgroundColor: '#019878'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
