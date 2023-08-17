import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import Listing from '../components/party_list';
import {Party} from '../models/types';

// Styles for the screen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// Main (home) screen to display parties
function HomeScreen({route, navigation}) {
  const parties: Party[] = route.params.parties;
  return (
    // SafeAreaView is a component that wraps the content and adjusts it for the notches
    // and rounded corners of the iPhone X, iPhone 11, iPhone 12, and other future devices.
    <SafeAreaView style={styles.screen}>
      <Listing parties={parties} />
      <Button
        title="Add party"
        color="#841584"
        testID="AddPartyButton"
        accessibilityLabel="Add a new party"
        onPress={() =>
          navigation.navigate({
            name: 'Edit',
            params: {parties},
            merge: true,
          })
        }
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
