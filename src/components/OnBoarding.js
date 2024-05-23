import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.heading}>VitalSight</Text>
        <Text>Joining as a VitalSight Practitioner?</Text>
      </View>
      <View>
        <Text>Please click the account registration button below</Text>
      </View>
      <Image
        source={require("../assets/bannerLogo.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        color="#5c940d"
        width={6}
        style={styles.createAccountBtn}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
  title: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  heading: {
    fontSize: 28,
    color: "#66a80f",
    fontWeight: "bold",
  },
  createAccountBtn: {
    backgroundColor: "#5c940d",
    width: "70%",
    padding: 10,
    borderRadius: 8,
  },
  createAccountText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
