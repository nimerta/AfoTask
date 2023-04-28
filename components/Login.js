import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { encryptData, decryptData } from "../Security/DataPrivacy";

import Logo from "../Images/logo2.png";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpNavigation = () => {
    navigation.navigate("Signup");
  };
  const [loaded] = useFonts({
    "Aero-Regular": require("../assets/fonts/aeaswfte.ttf"),
    // Aero: require("../assets/fonts/Aero.ttf"),
  });
  const signInNavigation = async () => {
    navigation.navigate("Main");
    var obj = {
      email: email,
      password: password,
    };

    var encryptedData = encryptData(obj);

    console.log("my encrypted obj: ", encryptedData);

    var bodyData = { data: encryptedData };
    var apiResponse = await axios
      .post(`http://54.221.169.56:3004/api/user/login`, bodyData)
      .then(async (onSuccess) => {
        console.log("api response data: ", onSuccess.data);
        var myDecryptedData = decryptData(onSuccess.data.data);

        console.log("my decrypted obj: ", myDecryptedData);
      })
      .catch(async (onError) => {
        console.log("on api post error: ", onError.response.data);
      });
  };

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={[
          "#3d1530",
          "#311703",
          "#25172e",
          "#1a1729",
          "#131522",
          "#10131e",
          "#0d111b",
          "#090e17",
          "#070b16",
          "#050816",
          "#040515",
          "#030214",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.ImgContainer}>
          <Image style={styles.img} source={Logo}></Image>
          <Text style={styles.LogoTxt}>Sign in</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.emailLabel}>E-Mail</Text>
          <TextInput
            style={styles.emailInput}
            onChangeText={setEmail}
            value={email}
            placeholder="yourname@example.com"
            // style={styles.inputfield}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.emailLabel}>Password</Text>
          <TextInput
            style={styles.emailInput}
            onChangeText={setPassword}
            value={password}
            placeholder="yourpassword"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>

        <TouchableOpacity
          onPress={signInNavigation}
          style={styles.btnContainer}
        >
          <LinearGradient
            colors={["#343437", "#232325"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.btntxt}>Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.TxtContainer}>
          <Text style={styles.accountTxt}>Don't have an account?</Text>
        </View>
        <View style={styles.SignupBox}>
          <TouchableOpacity
            onPress={signUpNavigation}
            style={styles.signupButton}
          >
            <Text style={styles.SignupTxt}>Sign up</Text>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImgContainer: {
    height: height * 0.16,
    width: "100%",
    top: height * 0.07,
    alignItems: "center",
  },

  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  LogoTxt: {
    fontSize: 26,
    fontFamily: "Aero-Regular",
    color: "white",
    fontWeight: "700",
    padding: 20,
  },

  inputBox: {
    flexDirection: "column",
    alignSelf: "center",
    width: width * 0.8,
    height: height * 0.1,
    top: height * 0.15,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 5,
  },
  emailLabel: {
    fontSize: 15,
    fontFamily: "Aero-Regular",
    color: "white",
    paddingTop: height * 0.03,
    //marginTop: 5,
    //backgroundColor: "green",
  },
  emailInput: {
    fontFamily: "Arial",
    fontStyle: "italic",
    height: height * 0.03,
    //backgroundColor: "yellow",
    paddingTop: height * 0.01,
    color: "#B1B1B1",
    marginTop: 10,
  },

  btnContainer: {
    height: height * 0.07,
    width: width * 0.8,
    top: height * 0.3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  gradient: {
    height: "100%",
    width: width * 0.5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btntxt: {
    fontFamily: "Aero-Regular",
    color: "white",
    padding: 5,
  },
  TxtContainer: {
    height: height * 0.028,
    width: width * 0.8,
    top: height * 0.365,
    alignSelf: "center",
    //backgroundColor: "yellow",
  },
  accountTxt: {
    fontFamily: "Aero-Regular",
    color: "gray",
    //padding: height * 0.015,
    fontSize: 12,
    paddingTop: height * 0.008,
  },
  SignupBox: {
    top: height * 0.365,
    height: height * 0.05,
    width: width * 0.8,
    alignSelf: "center",
  },
  SignupTxt: {
    color: "white",
    fontSize: 12,
    fontFamily: "Aero-Regular",
    fontWeight: "400",
    paddingTop: height * 0.012,
  },
  signupButton: {
    color: "white",
    flexDirection: "row",
  },
  IconStyle: {
    paddingTop: height * 0.009,
  },
  // accountTxt: {
  //   fontFamily: "Aero-Regular",
  //   color: "gray",
  //   paddingTop: height * 0.01,
  //   fontSize: 12,
  // },
  // SignupBox: {
  //   top: height * 0.365,
  //   height: height * 0.05,
  //   width: width * 0.8,
  //   alignSelf: "center",
  // },
  // signupButton: {
  //   color: "white",
  //   flexDirection: "row",
  // },
  // SignupTxt: {
  //   color: "white",
  //   fontSize: 12,
  //   fontFamily: "Aero-Regular",
  //   fontWeight: "400",
  //   paddingTop: height * 0.012,
  // },
  // IconStyle: {
  //   paddingTop: height * 0.008,
  // },
});
export default Login;
