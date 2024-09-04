import 'package:ceylontrails/features/login/presentaion/landing.dart';
import 'package:ceylontrails/features/visa_processing/presentaion/step_one.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class AuthPage extends StatelessWidget {
  const AuthPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder<User?>(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return const StepOne();
          } else {
            return const Landing();
          }
        },
      ),
    );
  }
}
