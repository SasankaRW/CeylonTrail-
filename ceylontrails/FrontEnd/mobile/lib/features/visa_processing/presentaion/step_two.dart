import 'package:ceylontrails/components/date_picker.dart';
import 'package:ceylontrails/components/fill_button.dart';
import 'package:ceylontrails/components/visa_input.dart';
import 'package:ceylontrails/features/visa_processing/models/visa_applicant.dart';
import 'package:ceylontrails/features/visa_processing/presentaion/step_three.dart';
import 'package:flutter/material.dart';

class StepTwo extends StatefulWidget {
  final VisaApplicant? visaApplicant;

  const StepTwo({super.key, this.visaApplicant});

  @override
  State<StepTwo> createState() => _StepTwoState();
}

class _StepTwoState extends State<StepTwo> {
  TextEditingController passportNo = TextEditingController();
  TextEditingController dateOfIssue = TextEditingController();
  TextEditingController dateOfExpiry = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: const Color(0xFFF3F3F3),
      appBar: AppBar(
        backgroundColor: const Color(0xFFF3F3F3),
        title: const Center(
          child: Text(
            "Visa Processing",
            style: TextStyle(fontSize: 20),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding:
              EdgeInsets.symmetric(horizontal: screenWidth * 0.1, vertical: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Passport Information",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const Divider(),
              const SizedBox(
                height: 20,
              ),
              VisaInput(label: "Passport No", controller: passportNo),
              const SizedBox(
                height: 20,
              ),
              DatePicker(label: "Date of issue", controller: dateOfIssue),
              const SizedBox(
                height: 20,
              ),
              DatePicker(label: "Date of expiry", controller: dateOfExpiry),
              const SizedBox(
                height: 20,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Upload your passport bio page",
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Upload a passport size photo",
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              FillButton(
                  height: 20,
                  fontSize: 18,
                  text: "Next",
                  onPressed: () {
                    widget.visaApplicant!.passportNo = passportNo.text;
                    widget.visaApplicant!.dateOfExpiry = dateOfExpiry.text;
                    widget.visaApplicant!.dateOfIssue = dateOfIssue.text;
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => StepThree(
                          visaApplicant: widget.visaApplicant,
                        ),
                      ),
                    );
                  }),
            ],
          ),
        ),
      ),
    );
  }
}
