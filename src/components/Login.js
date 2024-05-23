import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import CustomButton from "./CustomButton";
import InputField from "./InputField";
import { _setLoginInfo } from "../helper/localStorage";
import { encrypt } from "../utils/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async () => {
    console.log(email, password);
    try {
      const params = {
        emailAddress: email,
        password: password,
        timeZone: "Kolkata",
        action: "login",
      };

      console.log("Encrypted password", encrypt(params.password));

      if (true) {
        const response = await Login({
          ...params,
          password: encrypt(params.password),
        });

        if (response.success) {
          setMessage(`Login successful: ${response.message}`);
          _setLoginInfo(response);
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("isButtonClicked", false);
          //navigate("/dashboard");
        } else {
          setMessage(`Login failed: ${response.message}`);
        }
      } else {
        console.log("Wrongggggg");
        setMessage("Wrong Username or Password");
      }
    } catch (error) {
      console.log("error-------", error);
      console.error("Error during Login:", error);
      setMessage("Wrong Username or Password ");
      //openModal();
      //setModalTitle("Wrong Password");
    }
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 24 }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/loginLogo2.jpg")}
            style={styles.loginImage}
          />
        </View>
        <Text style={styles.loginHeading}>Login</Text>
        <InputField
          label={"Email"}
          icon={<MaterialIcons name="email" size={18} color="#666" />}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={"Password"}
          icon={<Feather name="lock" size={18} color="#666" />}
          keyboardType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <CustomButton label={"Login"} onPress={loginHandler} />
        <View style={styles.otherLoginMethodContainer}>
          <Text style={styles.otherLoginMethodText}>Or</Text>
        </View>
        <View style={styles.socialLogoViewContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.socialLogoContainer}
          >
            <Image
              source={require("../assets/google_3.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.socialLogoContainer}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.socialLogoContainer}
          >
            <Image
              source={require("../assets/twitter.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    padding: 4,
    backgroundColor: "white",
    flex: 1,
    paddingTop: 24,
  },
  loginImage: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 4,
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#74b816",
    marginBottom: 16,
  },
  emailView: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    gap: 4,
  },
  emailTextInput: {
    flex: 1,
    paddingVertical: 0,
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    gap: 4,
  },
  passwordTextInput: {
    flex: 1,
    paddingVertical: 0,
    marginTop: 4,
  },
  forgotText: {
    color: "#94d82d",
    fontWeight: "700",
  },
  createAccountBtn: {
    backgroundColor: "#5c940d",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  createAccountText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  otherLoginMethodContainer: {},
  otherLoginMethodText: {
    textAlign: "center",
    marginTop: 28,
    fontSize: 16,
    color: "#74b816",
  },
  socialLogoViewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    gap: 8,
  },
  socialLogoContainer: {
    paddingHorizontal: 8,
  },
  socialLogo: {
    width: 45,
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  registerContainer: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
  registerText: {
    textAlign: "center",
  },
  signUpText: {
    color: "#74b816",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
