import 'package:ceylontrails/features/visa_processing/presentaion/step_one.dart';
import 'package:ceylontrails/features/visa_processing/presentaion/step_three.dart';
import 'package:ceylontrails/features/visa_processing/presentaion/step_two.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class VisaProcessing extends StatefulWidget {
  const VisaProcessing({super.key});

  @override
  State<VisaProcessing> createState() => _VisaProcessingState();
}

class _VisaProcessingState extends State<VisaProcessing> {
  int currentStep = 0;

  bool get isFirstStep => currentStep == 0;
  bool get isLastStep => currentStep == steps().length - 1;

  void signUserOut() {
    FirebaseAuth.instance.signOut();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Center(
            child: Text(
              "Visa Processing",
              style: TextStyle(fontSize: 18),
            ),
          ),
          actions: [
            IconButton(
              icon: const Icon(Icons.logout),
              onPressed: () {
                signUserOut();
              },
            ),
          ],
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Stepper(
            elevation: 0,
            type: StepperType.horizontal,
            steps: steps(),
            currentStep: currentStep,
            onStepContinue: () {
              if (isLastStep) {
              } else {}
            },
            onStepCancel: isFirstStep
                ? null
                : () => setState(() {
                      currentStep -= 1;
                    }),
          ),
        ),
      );

  List<Step> steps() => [
        Step(
            state: currentStep > 0 ? StepState.complete : StepState.indexed,
            isActive: currentStep >= 0,
            title: const Text(""),
            content: const StepOne()),
        Step(
            state: currentStep > 1 ? StepState.complete : StepState.indexed,
            isActive: currentStep >= 1,
            title: const Text(""),
            content: const StepTwo()),
        Step(
            state: currentStep > 2 ? StepState.complete : StepState.indexed,
            isActive: currentStep >= 2,
            title: const Text(""),
            content: StepThree()),
      ];
}
