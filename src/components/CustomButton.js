import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      color="#5c940d"
      width={6}
      style={styles.createAccountBtn}
    >
      <Text style={styles.createAccountText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
});
