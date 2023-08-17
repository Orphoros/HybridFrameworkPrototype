import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';

import {Party} from '../models/types';

// Main style definitions for the component
const styles = StyleSheet.create({
  itemheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemheadersub: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#019878',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    color: '#FFFF',
  },
  desc: {
    color: '#FFFF',
    fontSize: 18,
  },
});

// Define the component props for the PartyEntry component
type ItemProps = {
  party: Party;
};

// The component wants a Party object as a prop to display as a party entry
function PartyEntry(props: ItemProps) {
  const date = new Date(props.party.date); // Convert the date string to a Date object
  return (
    <View style={styles.item}>
      <View style={styles.itemheader}>
        <View style={styles.itemheadersub}>
          <FontAwesomeIcon icon={faCalendarDays} />
          <Text style={styles.desc}>{date.toDateString()}</Text>
        </View>
        <View style={styles.itemheadersub}>
          <FontAwesomeIcon icon={faClock} />
          <Text style={styles.desc}>
            {date.getHours()}:{date.getMinutes()}
          </Text>
        </View>
        <View style={styles.itemheadersub}>
          <FontAwesomeIcon icon={faUserAlt} />
          <Text style={styles.desc}>{props.party.attendants}</Text>
        </View>
      </View>

      <Text style={styles.title}>{props.party.title}</Text>
      <Text style={styles.desc}>{props.party.desc}</Text>
    </View>
  );
}

export default PartyEntry;
