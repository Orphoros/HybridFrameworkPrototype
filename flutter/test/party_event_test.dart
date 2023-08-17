import 'package:partyplanner/model/party_event.dart';
import 'package:test/test.dart';

void main() {
  test('party object with ICal file should be created', () {
    final party = PartyEvent(
      'id',
      'name',
      'description',
      DateTime.now(),
      [],
    );

    expect(party.getIcalFile(), isNotNull);
  });
}
