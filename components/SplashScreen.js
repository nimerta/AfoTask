import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import splashPic from "../Images/logo1.png";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
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
        style={{ flex: 1 }}
      >
        <View style={styles.bg}>
          <Image style={styles.ImgStyle} source={splashPic} />
        </View>

        {loading && (
          <View style={styles.loader}>
            {/* <ActivityIndicator
            size="large"
            color="gray"
            style={styles.activityIndicator}
            /> */}
            <LottieView
              style={styles.loadingStyle}
              source={require("../assets/142571-loading.json")}
              autoPlay
              loop
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 250,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "contain",
  },
  loadingStyle: {
    height: 100,
    width: 100,
  },
  activityIndicator: {
    transform: [{ scale: 1.5 }],
  },
  bg: {
    flex: 1,
    height: "70%",
    width: "70%",
    position: "absolute",
    left: 60,
  },
  ImgStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default SplashScreen;
