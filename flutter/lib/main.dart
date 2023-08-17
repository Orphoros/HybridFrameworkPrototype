import 'package:flutter/material.dart';
import 'package:partyplanner/pages/home_page.dart';

void main() {
  runApp(const MyApp());
}

/// Root App
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
      theme: ThemeData(
        primarySwatch: MaterialColor(
          0xFF019878,
          <int, Color>{
            // Brand color
            50: Color(0xFF019878),
            100: Color(0xFF019878),
            200: Color(0xFF019878),
            300: Color(0xFF019878),
            400: Color(0xFF019878),
            500: Color(0xFF019878),
            600: Color(0xFF019878),
            700: Color(0xFF019878),
            800: Color(0xFF019878),
            900: Color(0xFF019878),
          },
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
