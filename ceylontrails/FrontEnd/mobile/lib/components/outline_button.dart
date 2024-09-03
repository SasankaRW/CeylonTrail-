import 'package:flutter/material.dart';

class OutlineButton extends StatelessWidget {
  final String text;
  final double height;
  final double fontSize;
  final VoidCallback onPressed;

  const OutlineButton({
    super.key,
    required this.text,
    this.height = 60.0,
    this.fontSize = 20,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        backgroundColor: Colors.transparent,
        padding: const EdgeInsets.all(16.0),
        minimumSize: Size(double.infinity, height),
        side: const BorderSide(
            color: Color(0xFF0ACF83), width: 2),
      ),
      onPressed: onPressed,
      child: Text(
        text,
        style: TextStyle(
          color: const Color(0xFF0ACF83),
          fontSize: fontSize,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
