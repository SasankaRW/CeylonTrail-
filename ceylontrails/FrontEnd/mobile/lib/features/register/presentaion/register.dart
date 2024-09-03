import 'package:ceylontrails/components/input_field.dart';
import 'package:ceylontrails/components/outline_button.dart';
import 'package:ceylontrails/features/login/presentaion/login.dart';
import 'package:flutter/material.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  TextEditingController fullName = TextEditingController();
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  TextEditingController confirmPassword = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      body: Stack(
        children: [
          Container(
            height: screenHeight * 0.5,
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/sigiriya.jpg'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: SingleChildScrollView(
              child: Container(
                height: screenHeight * 0.9,
                width: double.infinity,
                decoration: const BoxDecoration(
                  color: Color(0xFFF6FDF0),
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(50.0),
                    topRight: Radius.circular(50.0),
                  ),
                ),
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 40, horizontal: 50),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Row(
                        children: [
                          Text(
                            "Join CeylonTrail",
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 26),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Icon(
                            Icons.eco,
                            color: Color(0xFF96bbab),
                            size: 35.0,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      const Text(
                        "Create an account to start planning your eco-friendly travels",
                        style: TextStyle(
                            fontSize: 16,
                            color: Color(0xFF6F6F6F),
                            fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      InputField(
                        placeholder: "Full Name",
                        icon: const Icon(
                          Icons.account_circle_outlined,
                          color: Colors.grey,
                        ),
                        controller: fullName,
                        height: 2.0,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      InputField(
                        placeholder: "Email",
                        icon: const Icon(
                          Icons.email_outlined,
                          color: Colors.grey,
                        ),
                        controller: email,
                        height: 2.0,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      InputField(
                        placeholder: "Password",
                        icon: const Icon(
                          Icons.key_outlined,
                          color: Colors.grey,
                        ),
                        controller: password,
                        isPassword: true,
                        height: 2.0,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      InputField(
                        placeholder: "Confirm password",
                        icon: const Icon(
                          Icons.key_outlined,
                          color: Colors.grey,
                        ),
                        controller: confirmPassword,
                        isPassword: true,
                        height: 2.0,
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                      OutlineButton(
                        text: "Register",
                        onPressed: () => {},
                        height: 50,
                        fontSize: 18,
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                      const Row(
                        children: <Widget>[
                          Expanded(
                            child: Divider(
                              color: Color(0xFFA8A8A8),
                              thickness: 1,
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.symmetric(horizontal: 8.0),
                            child: Text(
                              "or",
                              style: TextStyle(
                                color: Color(0xFFA8A8A8),
                                fontSize: 15,
                              ),
                            ),
                          ),
                          Expanded(
                            child: Divider(
                              color: Color(0xFFA8A8A8),
                              thickness: 1,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      GridView.count(
                        crossAxisCount: 2,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 10,
                        shrinkWrap: true,
                        childAspectRatio: 3.5,
                        children: [
                          InkWell(
                            onTap: () => {},
                            child: SizedBox(
                              height: 50,
                              child: Container(
                                padding: const EdgeInsets.all(5),
                                decoration: BoxDecoration(
                                    color: Colors.white,
                                    border: Border.all(
                                      color: const Color(0xFFA8A8A8),
                                      width: 1.0,
                                    ),
                                    borderRadius: BorderRadius.circular(10)),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Image.asset(
                                      "assets/images/google.png",
                                      height: 20,
                                    ),
                                    const SizedBox(width: 10),
                                    const Text("Google"),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          InkWell(
                            onTap: () => {},
                            child: SizedBox(
                              height: 50,
                              child: Container(
                                padding: const EdgeInsets.all(5),
                                decoration: BoxDecoration(
                                    color: Colors.white,
                                    border: Border.all(
                                      color: Colors.grey,
                                      width: 1.0,
                                    ),
                                    borderRadius: BorderRadius.circular(10)),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Image.asset(
                                      "assets/images/facebook.png",
                                      height: 20,
                                    ),
                                    const SizedBox(width: 10),
                                    const Text("Facebook"),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Text("Already have an account ?"),
                          const SizedBox(
                            width: 5,
                          ),
                          InkWell(
                            onTap: () => {
                              Navigator.pushReplacement(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => const Login()))
                            },
                            child: const Text(
                              "Log in",
                              style: TextStyle(
                                  color: Color(0xFF367B61),
                                  fontWeight: FontWeight.bold),
                            ),
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          Positioned(
              top: 30,
              left: 10,
              child: IconButton(
                  onPressed: () => {Navigator.pop(context)},
                  icon: const Icon(
                    Icons.arrow_back_ios,
                    color: Color(0xFF367B61),
                  ))),
        ],
      ),
    );
  }
}
