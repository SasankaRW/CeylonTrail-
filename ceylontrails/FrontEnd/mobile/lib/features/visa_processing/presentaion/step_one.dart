import 'package:ceylontrails/components/date_picker.dart';
import 'package:ceylontrails/components/fill_button.dart';
import 'package:ceylontrails/components/visa_input.dart';
import 'package:ceylontrails/features/visa_processing/models/visa_applicant.dart';
import 'package:ceylontrails/features/visa_processing/presentaion/step_two.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class StepOne extends StatefulWidget {
  const StepOne({super.key});

  @override
  State<StepOne> createState() => _StepOneState();
}

class _StepOneState extends State<StepOne> {
  void signUserOut() {
    FirebaseAuth.instance.signOut();
  }

  VisaApplicant visaApplicant = VisaApplicant();

  TextEditingController fullName = TextEditingController();
  TextEditingController dob = TextEditingController();
  String? selectedGender;
  TextEditingController nic = TextEditingController();
  TextEditingController occupation = TextEditingController();
  TextEditingController nationality = TextEditingController();
  String? civilStatus;
  TextEditingController address = TextEditingController();
  TextEditingController mobileNo = TextEditingController();

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
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () {
              signUserOut();
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding:
              EdgeInsets.symmetric(horizontal: screenWidth * 0.1, vertical: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Personal Information",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const Divider(),
              const SizedBox(
                height: 20,
              ),
              VisaInput(label: "Name in full", controller: fullName),
              const SizedBox(
                height: 20,
              ),
              DatePicker(label: "Date of Birth", controller: dob),
              const SizedBox(
                height: 20,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Gender",
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Row(
                children: [
                  Radio(
                    value: 'Male',
                    groupValue: selectedGender,
                    onChanged: (value) {
                      setState(() {
                        selectedGender = value.toString();
                      });
                    },
                  ),
                  const Text('Male'),
                  const SizedBox(width: 20),
                  Radio(
                    value: 'Female',
                    groupValue: selectedGender,
                    onChanged: (value) {
                      setState(() {
                        selectedGender = value.toString();
                      });
                    },
                  ),
                  const Text('Female'),
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              VisaInput(label: "NIC Number", controller: nic),
              const SizedBox(
                height: 20,
              ),
              VisaInput(label: "Nationality", controller: nationality),
              const SizedBox(
                height: 20,
              ),
              VisaInput(label: "Occupation", controller: occupation),
              const SizedBox(
                height: 20,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Civil status",
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    Radio(
                      value: 'Single',
                      groupValue: civilStatus,
                      onChanged: (value) {
                        setState(() {
                          civilStatus = value.toString();
                        });
                      },
                    ),
                    const Text('Single'),
                    Radio(
                      value: 'Married',
                      groupValue: civilStatus,
                      onChanged: (value) {
                        setState(() {
                          civilStatus = value.toString();
                        });
                      },
                    ),
                    const Text('Married'),
                    Radio(
                      value: 'Divorced',
                      groupValue: civilStatus,
                      onChanged: (value) {
                        setState(() {
                          civilStatus = value.toString();
                        });
                      },
                    ),
                    const Text('Divorced'),
                    Radio(
                      value: 'Widowed',
                      groupValue: civilStatus,
                      onChanged: (value) {
                        setState(() {
                          civilStatus = value.toString();
                        });
                      },
                    ),
                    const Text('Widowed'),
                  ],
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              VisaInput(
                  label: "Address in the country of domicile ",
                  controller: address),
              const SizedBox(
                height: 20,
              ),
              VisaInput(
                  label: "Mobile number with country code",
                  controller: mobileNo),
              const SizedBox(
                height: 40,
              ),
              FillButton(
                  text: "Next",
                  onPressed: () {
                    visaApplicant.fullName = fullName.text;
                    visaApplicant.dob = dob.text;
                    visaApplicant.gender = selectedGender;
                    visaApplicant.nicNumber = nic.text;
                    visaApplicant.nationality = nationality.text;
                    visaApplicant.occupation = occupation.text;
                    visaApplicant.civilStatus = civilStatus;
                    visaApplicant.address = address.text;
                    visaApplicant.mobileNo = mobileNo.text;

                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => StepTwo(
                          visaApplicant: visaApplicant,
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
