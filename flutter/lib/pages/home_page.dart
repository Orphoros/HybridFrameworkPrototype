import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:partyplanner/model/party_event.dart';
import 'package:partyplanner/pages/new_party_page.dart';
import 'package:partyplanner/widgets/party_card.dart';

/// The main home page of the app
class HomePage extends StatefulWidget {
  HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // List of all the parties to display
  final List<PartyEvent> _partyList = <PartyEvent>[];

  /// Adds a new party to the list of parties to display
  void addToList(PartyEvent event) {
    setState(() => _partyList.add(event));
  }

  /// Moves to the new party page
  void moveToNewPartyPage() async {
    final information = await Navigator.push(
      context,
      CupertinoPageRoute(
          fullscreenDialog: true, builder: (context) => NewPartyPage()),
    );
    if (information != null) {
      addToList(information);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Upcoming Parties'),
      ),
      body: Column(
        children: [
          Expanded(
            child: Container(
              constraints: BoxConstraints.expand(),
              child: CupertinoScrollbar(
                thumbVisibility: true,
                child: ListView(
                  scrollDirection: Axis.vertical,
                  shrinkWrap: true,
                  children: _partyList
                      .map(
                        (party) => PartyCard(
                          date:
                              '${party.startDate.day}/${party.startDate.month}/${party.startDate.year}',
                          time:
                              '${party.startDate.hour < 10 ? '0${party.startDate.hour}' : party.startDate.hour}:${party.startDate.minute < 10 ? '0${party.startDate.minute}' : party.startDate.minute}',
                          people: party.contacts.length.toString(),
                          title: party.name,
                          subtitle: party.description,
                        ),
                      )
                      .toList(),
                ),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.only(bottom: 30.0, top: 30),
            child: CupertinoButton.filled(
              onPressed: moveToNewPartyPage,
              child: const Text('Add new'),
            ),
          ),
        ],
      ),
    );
  }
}
