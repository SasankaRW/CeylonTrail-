import 'package:ceylontrails/components/date_picker.dart';
import 'package:ceylontrails/components/fill_button.dart';
import 'package:ceylontrails/components/visa_input.dart';
import 'package:ceylontrails/features/visa_processing/models/visa_applicant.dart';
import 'package:flutter/material.dart';

class StepThree extends StatefulWidget {
  VisaApplicant? visaApplicant;
  StepThree({super.key, this.visaApplicant});

  @override
  State<StepThree> createState() => _StepThreeState();
}

class _StepThreeState extends State<StepThree> {
  TextEditingController arrival = TextEditingController();
  TextEditingController departure = TextEditingController();
  List<TravelHistory> travelHistory = [];
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
                "Travel Information",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const Divider(),
              const SizedBox(
                height: 20,
              ),
              DatePicker(label: "Date of arrival", controller: arrival),
              const SizedBox(
                height: 20,
              ),
              DatePicker(label: "Date of departure", controller: departure),
              const SizedBox(
                height: 20,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  "Travel history for last 12 months",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              if (travelHistory.isNotEmpty)
                ...travelHistory.map((history) {
                  return TravelPlace(
                    country: history.country!,
                    start: history.startDate!,
                    end: history.endDate!,
                  );
                }),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton.icon(
                  onPressed: () {
                    TextEditingController country = TextEditingController();
                    TextEditingController start = TextEditingController();
                    TextEditingController end = TextEditingController();
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: const Text("Enter Details"),
                          content: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              VisaInput(label: "Country", controller: country),
                              const SizedBox(
                                height: 10,
                              ),
                              DatePicker(
                                  label: "Start date", controller: start),
                              const SizedBox(
                                height: 10,
                              ),
                              DatePicker(label: "End date", controller: end),
                            ],
                          ),
                          actions: [
                            TextButton(
                              onPressed: () {
                                Navigator.of(context).pop(); // Close the dialog
                              },
                              child: const Text("Cancel"),
                            ),
                            FillButton(
                                height: 20,
                                text: "Add",
                                onPressed: () {
                                  if (country.text.isNotEmpty &&
                                      start.text.isNotEmpty &&
                                      end.text.isNotEmpty) {
                                    setState(() {
                                      travelHistory.add(TravelHistory(
                                          country: country.text,
                                          startDate: start.text,
                                          endDate: end.text));
                                    });
                                  }

                                  Navigator.of(context).pop();
                                })
                          ],
                        );
                      },
                    );
                  },
                  icon: const Icon(Icons.add, color: Color(0xFF29D593)),
                  label: const Text(
                    'Add',
                    style: TextStyle(color: Color(0xFF29D593)),
                  ),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(50),
                    ),
                    side: const BorderSide(
                      color: Color(0xFF29D593),
                      width: 1,
                      style: BorderStyle.solid,
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              FillButton(
                  height: 20,
                  text: "Submit",
                  onPressed: () {
                    widget.visaApplicant!.dateOfArrival = arrival.text;
                    widget.visaApplicant!.dateOfDeparture = departure.text;
                    widget.visaApplicant!.travelHistory = travelHistory;
                  })
            ],
          ),
        ),
      ),
    );
  }
}

class TravelPlace extends StatelessWidget {
  final String country;
  final String start;
  final String end;

  const TravelPlace(
      {super.key,
      required this.start,
      required this.end,
      required this.country});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30.0),
        border: Border.all(color: Colors.greenAccent, width: 2.0),
      ),
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text(
                country,
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.black,
                ),
              ),
            ),
          ),
          Expanded(
            flex: 2,
            child: Align(
              alignment: Alignment.centerRight,
              child: Text(
                '2$start - $end',
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.black,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
