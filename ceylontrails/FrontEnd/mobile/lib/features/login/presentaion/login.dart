import 'package:ceylontrails/components/fill_button.dart';
import 'package:ceylontrails/components/input_field.dart';
import 'package:ceylontrails/features/register/presentaion/register.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();

  @override
  void initState(){
    super.initState();
    email.text = "testuser@gmail.com";
    password.text = "test123";
  }

  Future<void> signUserIn(BuildContext context) async {
    showDialog(
        context: context,
        builder: (context) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        });
    try {
      await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: email.text,
        password: password.text,
      );
      Navigator.pop(context);
      Navigator.pop(context);
    } on FirebaseAuthException catch (e) {
      Navigator.pop(context);
      if (e.code == 'user-not-found') {
        invalidLoginAlert("Incorrect Email");
      } else if (e.code == 'wrong-password') {
        invalidLoginAlert("Incorrect Password");
      }
    }
  }

  void invalidLoginAlert(String text) {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text(text),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;

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
                      const EdgeInsets.symmetric(vertical: 60, horizontal: 50),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Image.asset(
                        "assets/images/logo.png",
                        height: 80,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      const Text(
                        "Welcome back",
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 26),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      const Text(
                        "Log in to continue your journey towards sustainable travel",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            fontSize: 16,
                            color: Color(0xFF6F6F6F),
                            fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      InputField(
                          placeholder: "Email",
                          icon: const Icon(
                            Icons.email_outlined,
                            color: Colors.grey,
                          ),
                          controller: email),
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
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                      FillButton(
                        text: "Log in",
                        onPressed: () => signUserIn(context),
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
                        height: 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Text("Don't have an account ?"),
                          const SizedBox(
                            width: 5,
                          ),
                          InkWell(
                            onTap: () => {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => const Register()))
                            },
                            child: const Text(
                              "Register",
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
        ],
      ),
    );
  }
}
