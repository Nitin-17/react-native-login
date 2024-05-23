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
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import InputField from "./InputField";
import CustomButton from "./CustomButton";

const SignUp = ({ navigation }) => {
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
        <Text style={styles.loginHeading}>Register</Text>

        <InputField
          label={"Full Name"}
          icon={<Ionicons name="person" size={18} color="#666" />}
          keyboardType="full name"
        />
        <InputField
          label={"Email ID"}
          icon={<MaterialIcons name="email" size={18} color="#666" />}
          keyboardType="email ID"
        />
        <InputField
          label={"Password"}
          icon={<Feather name="lock" size={18} color="#666" />}
          secureTextEntry={true}
          inputType="password"
        />
        <InputField
          label={"Confirm Password"}
          icon={<Feather name="lock" size={18} color="#666" />}
          secureTextEntry={true}
          inputType="confirm password"
        />
        {/*   <View style={styles.dobView}>
          <Fontisto name="date" size={18} color="#666" />
          <TouchableOpacity onPress={handleOpenDatePicker}>
            <Text style={styles.dobText}>Date Of Birth</Text>
          </TouchableOpacity>
        </View> */}

        <CustomButton label={"Register"} onPress={() => {}} />
        <View style={styles.otherLoginMethodContainer}>
          <Text style={styles.otherLoginMethodText}>Or</Text>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  loginContainer: {
    padding: 4,
    backgroundColor: "white",
    flex: 1,
    paddingTop: 28,
  },
  loginImage: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 0,
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
    marginBottom: 16,
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
    marginBottom: 16,
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
  dobView: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 14,
    marginBottom: 16,
  },
  dobText: {
    color: "#495057",
  },
});
