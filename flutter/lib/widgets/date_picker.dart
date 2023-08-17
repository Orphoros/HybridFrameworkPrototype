import 'package:flutter/cupertino.dart';

/// A Cupertino date picker
class DatePicker extends StatefulWidget {
  final ValueChanged<DateTime> onChanged; // onChanged event
  final DateTime initialDateTime; // initial date time to display

  DatePicker(
      {super.key, required this.onChanged, required this.initialDateTime});

  @override
  State<DatePicker> createState() => _DatePickerState();
}

class _DatePickerState extends State<DatePicker> {
  DateTime selectedDateTime = DateTime.now();

  void _showDialog(Widget child) {
    showCupertinoModalPopup<void>(
      context: context,
      builder: (BuildContext context) => Container(
        height: 216,
        padding: const EdgeInsets.only(top: 6.0),
        margin: EdgeInsets.only(
          bottom: MediaQuery.of(context).viewInsets.bottom,
        ),
        color: CupertinoColors.systemBackground.resolveFrom(context),
        child: SafeArea(
          top: false,
          child: child,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return _DatePickerItem(
      children: <Widget>[
        const Text('Date'),
        CupertinoButton(
          onPressed: () => _showDialog(
            CupertinoDatePicker(
              initialDateTime: widget.initialDateTime,
              mode: CupertinoDatePickerMode.dateAndTime,
              use24hFormat: true,
              minimumDate: widget.initialDateTime,
              onDateTimeChanged: (DateTime newDate) {
                setState(() => selectedDateTime = newDate);
                widget.onChanged(newDate);
              },
            ),
          ),
          child: Text(
            '${selectedDateTime.day}/${selectedDateTime.month}/${selectedDateTime.year} - ${selectedDateTime.hour < 10 ? '0${selectedDateTime.hour}' : selectedDateTime.hour}:${selectedDateTime.minute < 10 ? '0${selectedDateTime.minute}' : selectedDateTime.minute}',
            style: const TextStyle(
              fontSize: 22.0,
            ),
          ),
        ),
      ],
    );
  }
}

class _DatePickerItem extends StatelessWidget {
  const _DatePickerItem({required this.children});

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: CupertinoColors.inactiveGray,
            width: 0.0,
          ),
          bottom: BorderSide(
            color: CupertinoColors.inactiveGray,
            width: 0.0,
          ),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: children,
        ),
      ),
    );
  }
}
