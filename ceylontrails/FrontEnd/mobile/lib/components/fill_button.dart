import 'package:flutter/material.dart';

class FillButton extends StatelessWidget {
  final String text;
  final double height;
  final double fontSize;
  final VoidCallback onPressed;

  const FillButton({
    Key? key,
    required this.text,
    this.height = 60.0,
    this.fontSize = 20,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        backgroundColor: const Color(0xFF0ACF83),
        minimumSize: Size(double.infinity, height),
      ),
      onPressed: onPressed,
      child: Text(
        text,
        style: TextStyle(
          color: Colors.white,
          fontSize: fontSize,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
