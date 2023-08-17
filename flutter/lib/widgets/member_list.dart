import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_native_contact_picker/flutter_native_contact_picker.dart';

/// A widget to display a list of contacts.
class MemberList extends StatelessWidget {
  const MemberList({super.key, required this.contacts});

  final List<Contact> contacts;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        constraints: BoxConstraints.expand(),
        child: CupertinoScrollbar(
          thumbVisibility: true,
          child: ListView(
            children: [
              CupertinoListSection.insetGrouped(
                header: const Text('Invited people'),
                backgroundColor: Colors.redAccent.withOpacity(0),
                children: contacts
                    .map(
                      (Contact contact) => CupertinoListTile.notched(
                        title: Text(contact.fullName.toString()),
                        leading: const Icon(Icons.person),
                        additionalInfo: const Text('Invited'),
                      ),
                    )
                    .toList(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
