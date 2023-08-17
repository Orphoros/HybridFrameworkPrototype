import React from 'react';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {selectContactEmail} from 'react-native-select-contact';

import InviteeList from '../components/invitee_list';
import {Invite} from '../models/types';
import {Party} from '../models/types';
import SaveButton from '../components/save_button';

// Create the main styles for the page
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  centered: {
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 20,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

// Ask the user to select a contact and return the name and email address.
// Calling this function will open a native modal that allows the user to select a contact.
async function requestContact(): Promise<Invite | null> {
  let selection = await selectContactEmail();
  if (!selection) {
    return null; // user did not select a contact
  }
  return {name: selection.contact.name, email: selection.selectedEmail.address};
}

// Define the main component
function EditScreen({route, navigation}) {
  const parties: Party[] = route.params.parties;

  // Variables for the input fields
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');

  // Variable for the contact selector
  const defaultInvite: Invite[] = [];
  const [invites, setInvites] = React.useState(defaultInvite);

  // Variables for the date picker
  const [selectedTimestamp, setTimestamp] = React.useState(new Date());
  const [openPicker, setOpenPicker] = React.useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
        placeholderTextColor="grey"
        testID="TitleIN"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDesc}
        value={desc}
        placeholder="Description"
        placeholderTextColor="grey"
        testID="DescIN"
      />

      {/* Clickable date field that opens date selector */}
      <Pressable onPress={() => setOpenPicker(true)}>
        <Text style={[styles.input, styles.centered]}>
          {selectedTimestamp.toDateString()} - {selectedTimestamp.getHours()}:
          {selectedTimestamp.getMinutes()}
        </Text>
      </Pressable>
      <DatePicker
        modal
        open={openPicker}
        date={selectedTimestamp}
        onConfirm={date => {
          setOpenPicker(false);
          setTimestamp(date);
        }}
        onCancel={() => {
          setOpenPicker(false);
        }}
        mode="datetime"
      />

      <SaveButton
        navigation={navigation}
        title={title}
        desc={desc}
        invites={invites}
        parties={parties}
        selectedTimestamp={selectedTimestamp}
      />

      <Button
        title="Add invite"
        color="#841584"
        accessibilityLabel="Invite a new party member"
        onPress={async () => {
          try {
            const newInvite = await requestContact();
            if (newInvite === null) {
              return null;
            }
            setInvites([...invites, newInvite]);
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <View style={styles.line} />
      <Text style={[styles.centered, styles.sectionText]}>Invites:</Text>
      <InviteeList invites={invites} />
    </SafeAreaView>
  );
}

export default EditScreen;
