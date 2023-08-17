import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import PartyEntry from './party_entry';
import {Party} from '../models/types';

// Main style definitions for the component
const style = StyleSheet.create({
  text: {
    fontSize: 21,
    textAlign: 'center',
  },
});

// Define the component props for the Listing component.
type ItemProps = {
  parties: Party[];
};

// The component wants an array of party objects as a prop to display them as a list
function Listing(props: ItemProps) {
  if (props.parties.length === 0) {
    // List is empty, so display a message instead
    return <Text style={style.text}>No parities yet</Text>;
  }
  return (
    <FlatList
      data={props.parties}
      renderItem={({item}) => (
        <PartyEntry
          party={
            {
              title: item.title,
              desc: item.desc,
              attendants: item.attendants,
              date: item.date,
            } as Party
          }
        />
      )}
      keyExtractor={item => item.title}
    />
  );
}

export default Listing;
