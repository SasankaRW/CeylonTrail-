class VisaApplicant {
  String? fullName;
  String? dob;
  String? gender;
  String? nationality;
  String? nicNumber;
  String? occupation;
  String? civilStatus;
  String? address;
  String? countryCode;
  String? mobileNo;
  String? passportNo;
  String? dateOfIssue;
  String? dateOfExpiry;
  String? dateOfArrival;
  String? dateOfDeparture;
  List<TravelHistory>? travelHistory;

  VisaApplicant({
    this.fullName,
    this.dob,
    this.gender,
    this.nationality,
    this.nicNumber,
    this.occupation,
    this.civilStatus,
    this.address,
    this.countryCode,
    this.mobileNo,
    this.passportNo,
    this.dateOfIssue,
    this.dateOfExpiry,
    this.dateOfArrival,
    this.dateOfDeparture,
    this.travelHistory,
  });
}

class TravelHistory {
  String? country;
  String? startDate;
  String? endDate;

  TravelHistory({this.country, this.startDate, this.endDate});
}
