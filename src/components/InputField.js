import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View style={styles.passwordView}>
      {icon}
      {inputType === "password" ? (
        <TextInput
          placeholder={label}
          style={styles.passwordTextInput}
          secureTextEntry={true}
          keyboardType={keyboardType}
        />
      ) : (
        <TextInput
          placeholder={label}
          style={styles.passwordTextInput}
          secureTextEntry={true}
          keyboardType={keyboardType}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.forgotText}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  loginContainer: {
    padding: 4,
    backgroundColor: "white",
    flex: 1,
    paddingTop: 48,
  },
  loginImage: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 8,
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
    marginTop: 48,
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
