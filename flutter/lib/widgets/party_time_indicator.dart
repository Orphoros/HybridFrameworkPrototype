import 'package:flutter/material.dart';

/// A widget to display the date, time and number of people invited to a party. Used in the [PartyCard] widget.
class PartyTimeIndicator extends StatelessWidget {
  const PartyTimeIndicator(
      {super.key,
      required this.date,
      required this.time,
      required this.people});

  final String date;
  final String time;
  final String people;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 10.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Container(
            width: 95.0,
            margin: EdgeInsets.only(left: 14.0),
            child: Row(
              children: <Widget>[
                Icon(Icons.calendar_month, size: 14.0),
                Text(date),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 5.0),
            width: 60.0,
            child: Row(
              children: <Widget>[
                Icon(Icons.access_time, size: 14.0),
                Text(time),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 5.0),
            child: Row(
              children: <Widget>[
                Icon(Icons.person, size: 14.0),
                Text(people),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
