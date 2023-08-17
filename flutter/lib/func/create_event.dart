import 'package:flutter/cupertino.dart';
import 'package:flutter_native_contact_picker/flutter_native_contact_picker.dart';
import 'package:share_plus/share_plus.dart';
import 'package:uuid/uuid.dart';

import '../model/party_event.dart';
import 'alert.dart';
import 'native_calendar_event.dart';

/// Create a new party event. This function will call the native APIs to create a calendar event and share the ICal event. It will pop the current page and return the previous page.
/// Used by the NewPartyPage
void createEvent(
    BuildContext context,
    TextEditingController nameController,
    TextEditingController descriptionController,
    DateTime startDate,
    List<Contact> contacts) {
  var uuid = Uuid();

// Check if the name and description are empty. If so, show an alert and return as the event cannot be created.
  if (nameController.text.isEmpty) {
    alert(context, 'Alert', 'Name cannot be empty');
    return;
  } else if (descriptionController.text.isEmpty) {
    alert(context, 'Alert', 'Description cannot be empty');
    return;
  }

  // Create a new party event object
  PartyEvent partyEvent = PartyEvent(uuid.v4(), nameController.text,
      descriptionController.text, startDate, contacts);

// Create the ICal file and share it with the native share API
  Share.shareXFiles([partyEvent.getIcalFile()])
      .whenComplete(
    () => makeCalendarEvent(
      // Once the ICal file has been shared (with or without error), create the calendar event.
      nameController.text,
      descriptionController.text,
      startDate,
      // Add 1 hour to the start date to create a 1 hour event
      startDate.add(Duration(hours: 1)),
    ).catchError(
      (error) {
        alert(context, 'Error', 'Failed to create calendar event');
        return true; // Return true because the sharing is not required to be successful to continue.
      },
    ).whenComplete(
      // Once the calendar event has been created (with or without error), pop the current page and return the previous page.
      () => Navigator.pop(
        context,
        PartyEvent(
          uuid.v4(), // Generate a new UUID for the new party event.
          nameController.text,
          descriptionController.text,
          startDate,
          contacts,
        ),
      ),
    ),
  )
      .catchError(
    (error) {
      alert(context, 'Error', 'Failed to share party event');
    },
  );
}
