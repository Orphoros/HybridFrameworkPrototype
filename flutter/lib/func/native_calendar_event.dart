import 'package:add_2_calendar/add_2_calendar.dart';

/// Create a calendar event using the native APIs.
/// Returns a Future<bool> which will be true if the event was created successfully, false otherwise.
Future<bool> makeCalendarEvent(
    String title, String description, DateTime startDate, DateTime endDate) {
  final Event event = Event(
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate,
  );

  return Add2Calendar.addEvent2Cal(event);
}
