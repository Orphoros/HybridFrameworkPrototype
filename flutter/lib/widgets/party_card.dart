import 'package:flutter/material.dart';
import 'package:partyplanner/widgets/party_time_indicator.dart';

/// A card to display a party event. Used in the home page.
class PartyCard extends StatelessWidget {
  const PartyCard(
      {super.key,
      required this.date,
      required this.time,
      required this.people,
      required this.title,
      required this.subtitle});

  final String date;
  final String time;
  final String people;
  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          PartyTimeIndicator(
            date: date,
            time: time,
            people: people,
          ),
          ListTile(
            title: Text(title,
                style: TextStyle(fontSize: 18.0, color: Color(0xFF019878))),
            subtitle: Text(subtitle),
            isThreeLine: false,
            dense: false,
          ),
        ],
      ),
    );
  }
}
