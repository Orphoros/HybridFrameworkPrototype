import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Invite from '../models/types';
import InviteeEntry from './invitee_entry';

// Main style definitions for the component
const style = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

// Define the component props for the InviteeList component.
type ItemProps = {
  invites: Invite[];
};

// The component wants an array of invite objects as a prop to display them as a list
function InviteeList(props: ItemProps) {
  if (props.invites.length === 0) {
    // List is empty, so display a message instead
    return <Text style={style.text}>No users invited</Text>;
  }
  // Main component definition
  return (
    <FlatList
      data={props.invites}
      renderItem={({item}) => <InviteeEntry invite={item} />}
      keyExtractor={item => item.email}
    />
  );
}

export default InviteeList;
