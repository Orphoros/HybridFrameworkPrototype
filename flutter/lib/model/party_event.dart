import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter_native_contact_picker/flutter_native_contact_picker.dart';
import 'package:ical/serializer.dart';
import 'package:share_plus/share_plus.dart';

/// A class to represent a party event object.
class PartyEvent {
  /// UUID
  String id;

  /// Name of the party
  String name;

  /// Description of the party
  String description;

  /// Start date of the party event
  DateTime startDate;

  /// List of contacts invited to the party
  List<Contact> contacts;

  // Private ICal object
  ICalendar _ical;

  /// Create a new party event object
  PartyEvent(
      this.id, this.name, this.description, this.startDate, this.contacts)
      : _ical = ICalendar() {
    // Once the party object is initialized, create the ICal file
    _ical.addElement(
      IEvent(
        description: name,
        summary: description,
        start: startDate,
        end: startDate.add(const Duration(hours: 1)),
        uid: id,
      ),
    );
  }

  /// Get the ICal file for the party event
  XFile getIcalFile() {
    return XFile.fromData(
      Uint8List.fromList(utf8.encode(_ical.serialize())),
      name: 'party.ics',
      mimeType: 'text/calendar',
    );
  }
}
