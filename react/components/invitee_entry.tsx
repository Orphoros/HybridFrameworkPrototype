import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {Invite} from '../models/types';

// Main style definitions for the component
const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'teal',
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
  },
  invitedText: {
    color: '#019878',
    marginRight: 5,
  },
  icon: {
    marginLeft: 10,
  },
});

// Define the component props for the InviteeEntry component
type ItemProps = {
  invite: Invite;
};

// The component wants an invite object as a prop to display
function InviteeEntry(props: ItemProps) {
  // component definition
  return (
    <View style={styles.entry}>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faUserAlt} size={20} />
      </View>
      <Text style={styles.text}>{props.invite.name}</Text>
      <Text style={[styles.invitedText, styles.text]}>Invited</Text>
    </View>
  );
}

export default InviteeEntry;
