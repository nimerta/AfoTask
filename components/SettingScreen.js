import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import DownloadScreen from "./DownloadScreen";

const SettingScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state variable to track login status

  const handleLogout = () => {
    // handle logout logic here
    setIsLoggedIn(false); // update state variable to reflect logged out status
  };

  const handleDownload = () => {
    // handle logout logic here
    navigation.navigate("DownloadScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.SettingHeaderContainer}>
        <Text style={styles.Settingheading}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.ProfileContainer}>
          <View style={styles.DpBox}>
            <Image
              style={styles.ProfileImg}
              source={require("../Images/image1.jpg")}
            ></Image>
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.NameStyle}>Nimerta bai</Text>
            <Text style={styles.EmailStyle}>nimerta@gmail.com</Text>
          </View>

          <View style={styles.EditingIconStyle}>
            <TouchableOpacity>
              <Feather name="edit" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.HeaderContainer}>
          <Text style={styles.heading}>Membership plan</Text>
        </View>
        <View style={styles.membershipContainer}>
          <Text style={styles.membershipText}>Free</Text>
          <TouchableOpacity style={styles.btnText}>
            <Text style={styles.btntxtStyle}>Upgrade plan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.heading}>Downloads</Text>
        </View>

        <TouchableOpacity style={styles.Container2} onPress={handleDownload}>
          <View style={styles.iconBox}>
            <Feather name="download" size={26} color="white" />
          </View>
          <View style={styles.Container2Text}>
            <Text style={styles.downloadHeader}>Downloaded Videos</Text>
            <Text style={styles.EmailStyle}>Watch Videos offline</Text>
          </View>
          <View style={styles.nextIconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={styles.HeaderContainer}>
          <Text style={styles.heading}>General Settings</Text>
        </View>
        <TouchableOpacity style={styles.Container2}>
          <View style={styles.iconBox}>
            <Feather name="lock" size={26} color="white" />
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.downloadHeader}>Change password</Text>
            <Text style={styles.EmailStyle}>
              You can change or reset your password
            </Text>
          </View>
          <View style={styles.nextIconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Container2}>
          <View style={styles.iconBox}>
            <FontAwesome name="language" size={26} color="white" />
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.downloadHeader}>Language</Text>
            <Text style={styles.EmailStyle}>English</Text>
          </View>
          <View style={styles.nextIconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.HeaderContainer}>
          <Text style={styles.heading}>Others</Text>
        </View>
        <TouchableOpacity style={styles.Container3}>
          <View style={styles.Container3TextBox}>
            <Text style={styles.Container3Text}>About Us</Text>
          </View>
          <View style={styles.IconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Container3}>
          <View style={styles.Container3TextBox}>
            <Text style={styles.Container3Text}>Terms & Conditions</Text>
          </View>
          <View style={styles.IconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Container3}>
          <View style={styles.Container3TextBox}>
            <Text style={styles.Container3Text}>Privacy Policy</Text>
          </View>
          <View style={styles.IconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.Container3}>
          <View style={styles.Container3TextBox}>
            <Text style={styles.Container3Text}>Login</Text>
          </View>
          <View style={styles.IconStyle}>
            <TouchableOpacity>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity> */}

        {isLoggedIn ? (
          <TouchableOpacity style={styles.Container3} onPress={handleLogout}>
            <View style={styles.Container3TextBox}>
              <Text style={styles.Container3Text}>Logout</Text>
            </View>
            <View style={styles.IconStyle}>
              <MaterialIcons name="chevron-right" size={30} color="gray" />
            </View>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity style={styles.Container3}>
              <View style={styles.Container3TextBox}>
                <Text style={styles.Container3Text}>Logout</Text>
              </View>
              <View style={styles.IconStyle}>
                <MaterialIcons name="chevron-right" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <View style={styles.DangerHeaderContainer}>
              <Text style={styles.Dangerheading}>Danger</Text>
            </View>
            <TouchableOpacity style={styles.Container3}>
              <View style={styles.Container3TextBox}>
                <Text style={styles.Container4Text}>Delete account</Text>
              </View>
              <View style={styles.DeleteIconStyle}>
                <MaterialIcons name="chevron-right" size={30} color="#e55039" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  SettingHeaderContainer: {
    //backgroundColor: "red",
    //top: 70,
    height: 40,

    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 50,
  },
  Settingheading: {
    fontSize: 20,
    color: "white",
    fontFamily: "Arial",
    fontWeight: "400",
    //backgroundColor: "yellow",
  },
  HeaderContainer: {
    //backgroundColor: "red",
    //marginTop: ,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 7,
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontFamily: "Arial",
    fontWeight: "400",
    //backgroundColor: "yellow",
  },
  ProfileContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    //backgroundColor: "green",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    //top: 80,
  },
  DpBox: {
    width: "16%",
    height: "100%",
    //marginTop: 11,
    marginHorizontal: 10,
    //marginVertical: 5,
  },
  ProfileImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  ProfileText: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    width: "auto",
    maxWidth: "66%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    //backgroundColor: "yellow",
    // marginVertical: 10,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },

  Container2: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    backgroundColor: "#1A1110",
    //marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    //top: 70,
  },

  Container2Text: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    width: "auto",
    maxWidth: "66%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    //backgroundColor: "yellow",
    // marginVertical: 10,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },

  NameStyle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "white",
    // backgroundColor: "blue",
  },
  EmailStyle: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "gray",
    marginTop: 6,
    // backgroundColor: "green",
  },
  EditingIconStyle: {
    height: 60,
    width: 40,
    // paddingLeft: "7.5%",
    // paddingTop: "4%",
    marginLeft: 10,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  membershipContainer: {
    height: 100,
    width: "95%",
    backgroundColor: "#000000",
    //top: 70,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
    borderStyle: "solid",
    borderColor: "gray",
    shadowColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,

    elevation: 17,
  },

  membershipText: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "white",
    fontWeight: "normal",
    padding: 15,
  },
  btnText: {
    backgroundColor: "red",
    height: "66%",
    width: "95%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btntxtStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  iconBox: {
    width: 50,
    height: "100%",
    //marginTop: 11,

    //marginVertical: 5,
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  downloadHeader: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#F5F5F5",
  },
  nextIconStyle: {
    height: 40,
    width: 20,
    //paddingLeft: "7.5%",
    // paddingTop: "4%",
    marginLeft: "14%",
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    //alignSelf: "auto",
    //backgroundColor: "yellow",
  },
  Container3: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#1A1110",
    //backgroundColor: "green",

    paddingHorizontal: 10,
    //paddingVertical: 10,
    //top: 70,
  },

  Container3TextBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    width: "auto",
    maxWidth: "80%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    //backgroundColor: "yellow",
    // marginVertical: 10,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  Container3Text: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "white",
    //backgroundColor: "blue",
    marginVertical: 8,
  },
  IconStyle: {
    height: "60%",
    width: "8%",
    //paddingLeft: "7.5%",
    // paddingTop: "4%",
    marginLeft: "14%",
    //marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    //alignSelf: "auto",
    //backgroundColor: "yellow",
  },
  DangerHeaderContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    //marginTop: ,
    height: 55,
    paddingHorizontal: 10,
    paddingVertical: 8,

    //marginBottom: 7,
  },
  Dangerheading: {
    fontSize: 20,
    color: "#e55039",
    fontFamily: "Arial",
    fontWeight: "500",
    paddingVertical: 8,
    //top: 7,
    //backgroundColor: "yellow",
  },

  Container4Text: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "400",
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#e55039",
    // backgroundColor: "blue",
  },
  DeleteIconStyle: {
    height: "60%",
    width: "8%",
    marginTop: 10,

    marginLeft: "14%",
    //marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    //alignSelf: "auto",
    //backgroundColor: "yellow",
  },
});
export default SettingScreen;
