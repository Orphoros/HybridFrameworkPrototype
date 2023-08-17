import React from 'react';
import {Button, Share, Alert} from 'react-native';

import * as AddCalendarEvent from 'react-native-add-calendar-event';
import * as ics from 'ics';
import * as RNFS from 'react-native-fs';

import {Party} from '../models/types';
import {Invite} from '../models/types';

// Helper function that checks if the event is valid. Return true if the form is valid.
// Return false if the event is duplicated. Return null if the form is not valid
function checkEvent(parties: Party[], party: Party): boolean | null {
  // Check that all required fields are filled correctly and the event is not duplicated
  if (party.desc.length === 0 || party.title.length === 0) {
    return null; // Return null if the event is not valid since field is empty
  }
  for (const partyEntry of parties) {
    if (partyEntry.title === party.title) {
      return false; // Party already exists
    }
  }
  return true; // Party is valid
}

// Helper function that creates an event in the system calendar and form an ICAL to share.
// Needs a party object as a parameter
async function createShareEvent(party: Party) {
  const startTime = new Date(party.date); // Convert the date string to a Date object
  const endTime = new Date(startTime);
  endTime.setHours(startTime.getHours() + 1); // Make the even 1 hour long

  // Define the event to be created in the calendar
  const calEnt: AddCalendarEvent.CreateOptions = {
    title: party.title,
    startDate: startTime.toISOString(),
    endDate: endTime.toISOString(),
    notes: party.desc,
  };

  // Define the event to be created in the ICAL file
  const icsEvent: ics.EventAttributes = {
    start: [
      startTime.getFullYear(),
      startTime.getMonth(),
      startTime.getDay(),
      startTime.getHours(),
      startTime.getMinutes(),
    ],
    duration: {hours: 1},
    title: party.title,
    description: party.desc,
  };

  try {
    // Create the event in the system calendar by showing the native calendar dialog
    await AddCalendarEvent.presentEventCreatingDialog(calEnt);

    const eventReturn = ics.createEvent(icsEvent);
    if (!eventReturn) {
      return;
    }
    // Write the ICAL to a temp directory for sharing
    const event: string = eventReturn.value as string;
    RNFS.writeFile(RNFS.TemporaryDirectoryPath + 'event.ics', event);

    // Share the ICAL file
    await Share.share({url: RNFS.TemporaryDirectoryPath + 'event.ics'});
  } catch (e) {
    console.error(e);
  }
}

// Define the component props for the SaveButton component.
type ItemProps = {
  navigation: any;
  title: string;
  desc: string;
  invites: Invite[];
  parties: Party[];
  selectedTimestamp: Date;
};

// The main component that is a button. This component is used to save a new party
// and create an event in the system calendar and share an ICAL file
function SaveButton(props: ItemProps) {
  return (
    <Button
      title="Save"
      color="#841584"
      testID="SaveButton"
      accessibilityLabel="Save new party"
      onPress={async () => {
        const party: Party = {
          title: props.title,
          desc: props.desc,
          attendants: props.invites.length,
          date: props.selectedTimestamp.toISOString(),
        };

        const validate = checkEvent(props.parties, party);
        if (validate === null) {
          Alert.alert('Empty fields', 'Name / description field is empty');
          return;
        }
        if (validate === false) {
          Alert.alert(
            'Duplicate event',
            'Another event exists with the same name',
          );
          return;
        }

        try {
          await createShareEvent(party);
        } catch (e) {
          console.error(e);
        }
        
        // Everything went well, so navigate back to the home screen and pass the new party
        props.navigation.navigate({
          name: 'Home',
          params: {parties: [...props.parties, party]},
          merge: true,
        });
      }}
    />
  );
}

export default SaveButton;
