import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_native_contact_picker/flutter_native_contact_picker.dart';
import 'package:partyplanner/func/alert.dart';
import 'package:partyplanner/func/create_event.dart';
import 'package:partyplanner/widgets/date_picker.dart';
import 'package:partyplanner/widgets/member_list.dart';

/// A page to create a new party event.
class NewPartyPage extends StatefulWidget {
  const NewPartyPage({super.key});

  @override
  State<NewPartyPage> createState() => _NewPartyPageState();
}

class _NewPartyPageState extends State<NewPartyPage> {
  // The contact picker API
  final FlutterContactPicker _contactPicker = FlutterContactPicker();
  // The list of contacts to invite to the party
  final List<Contact> _contacts = <Contact>[];

  // The controllers for the text fields
  final _nameController = TextEditingController();
  final _descriptionController = TextEditingController();

  DateTime _startDate = DateTime.now();

  @override
  void dispose() {
    // Clean up the controllers when the widget is disposed.
    _nameController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add new party'),
      ),
      body: Column(
        children: [
          Container(
            margin: EdgeInsets.only(left: 16, right: 16, top: 16),
            child: TextFormField(
              controller: _nameController,
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Name of party',
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 16, right: 16, top: 16, bottom: 50),
            child: TextFormField(
              controller: _descriptionController,
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Description',
              ),
            ),
          ),
          DatePicker(
            initialDateTime: _startDate,
            onChanged: (DateTime value) {
              setState(() {
                _startDate = value;
              });
            },
          ),
          Container(
            margin: EdgeInsets.only(top: 0),
            child: CupertinoButton(
              onPressed: () async {
                Contact? contact = await _contactPicker.selectContact();
                setState(() {
                  if (contact != null) {
                    for (Contact c in _contacts) {
                      if (c.fullName == contact.fullName) {
                        alert(context, 'Alert', 'Contact already invited');
                        return;
                      }
                    }
                    _contacts.add(contact);
                  }
                });
              },
              child: const Text('Invite People'),
            ),
          ),
          MemberList(
            contacts: _contacts,
          ),
          Container(
            margin: EdgeInsets.only(bottom: 30.0, top: 30),
            child: CupertinoButton.filled(
              onPressed: () => createEvent(
                context,
                _nameController,
                _descriptionController,
                _startDate,
                _contacts,
              ),
              child: const Text('Save'),
            ),
          ),
        ],
      ),
    );
  }
}
