import 'package:flutter/material.dart';

class InputField extends StatelessWidget {
  final String placeholder;
  final Icon icon;
  final TextEditingController controller;
  final isPassword;
  final height;

  const InputField({
    super.key,
    required this.placeholder,
    required this.icon,
    required this.controller,
    this.isPassword = false,
    this.height = 5.0
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.15),
            blurRadius: 50,
          ),
        ],
        borderRadius: BorderRadius.circular(30),
      ),
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: height),
        child: TextField(
          obscureText: isPassword,
          controller: controller,
          decoration: InputDecoration(
            border: InputBorder.none,
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            hintText: placeholder,
            hintStyle: const TextStyle(color: Colors.grey, fontSize: 15),
            prefixIcon: icon,
          ),
        ),
      ),
    );
  }
}
