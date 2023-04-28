import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "../Images/logo.png";
import BottomNav from "./BottomNav";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Homedata = [
  { id: "1", title: "Home" },
  { id: "2", title: "Movies" },
  { id: "3", title: "Tv Shows" },
  { id: "4", title: "Videos" },
];
//const HeaderHeight = "20%";
const data = [
  {
    id: "1",
    image: require("../Images/revenge.jpg"),
    title: "Revenge",
    duration: "1hr:20mins",
  },
  {
    id: "2",
    image: require("../Images/revenge2.jpg"),
    title: "The Boss",
    duration: "1hr:40mins",
  },
  {
    id: "3",
    image: require("../Images/image1.jpg"),
    title: "My office Boss",
    duration: "2hr:20mins",
  },
  {
    id: "4",
    image: require("../Images/image2.jpg"),
    title: "Revenge Warrior",
    duration: "1hr:30mins",
  },
];
const data2 = [
  {
    id: "1",
    image: require("../Images/revenge.jpg"),
    title: "Revenge",
    duration: "1hr:20mins",
  },
  {
    id: "2",
    image: require("../Images/image1.jpg"),
    title: "The Boss",
    duration: "1hr:40mins",
  },
  {
    id: "3",
    image: require("../Images/revenge2.jpg"),
    title: "My office",
    duration: "2hr:20mins",
  },
  {
    id: "4",
    image: require("../Images/image1.jpg"),
    title: "Warrior",
    duration: "1hr:30mins",
  },
  {
    id: "5",
    image: require("../Images/revenge2.jpg"),
    title: "My office",
    duration: "2hr:20mins",
  },
  {
    id: "6",
    image: require("../Images/image2.jpg"),
    title: "Revenge",
    duration: "1hr:10mins",
  },
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(Homedata[0].id);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };
  // const [isMuted, setIsMuted] = useState(false);
  // const toggleMute = () => {
  //   setIsMuted((prev) => !prev);
  // };

  // const video = React.useRef(null);
  // const [status, setStatus] = React.useState({});

  const renderNavItem = ({ item, index }) => {
    const isSelected = item.id === selectedId;
    const textColor = isSelected ? "red" : "white";

    return (
      <TouchableOpacity
        style={styles.NavItemContainer}
        onPress={() => setSelectedId(item.id)}
      >
        <Text style={[styles.itemText, { color: textColor }]}>
          {item.title}
        </Text>
        {isSelected && <View style={[styles.textBorder, { width: "40%" }]} />}
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{item.title}</Text>
          <Text style={styles.descriptionDuration}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container1}>
      <View style={styles.imgStyle}>
        <Image style={styles.logoimg} source={Logo} />
        <Text style={styles.txtstyle}>STREAMIT</Text>

        <View style={styles.profStyle}>
          <TouchableOpacity>
            <AntDesign name="adduser" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container2}>
        <FlatList
          data={Homedata}
          renderItem={renderNavItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          stickyHeaderIndices={[0]}
        />
      </View>
      <ScrollView>
        <View style={styles.videoContainer}>
          <Video
            style={styles.videoStyling}
            source={{
              uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            }}
            shouldPlay={true}
            isLooping={true}
            isMuted={isMuted}
          />
          <View style={styles.VideoDescriptionBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Big Buck Bunny</Text>
              <Text style={styles.duration}>2hr:20mins</Text>
            </View>
            <View style={styles.muteContainer}>
              <TouchableOpacity onPress={toggleMute}>
                <MaterialIcons
                  name={isMuted ? "volume-mute" : "volume-up"}
                  size={24}
                  color="white"
                />
                {/* <Octicons
                  name="unmute"{isMuted ? "volume-mute" : "volume-up"}
                  size={24}
                  color="black"
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Latest Movies</Text>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={23}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Upcoming Movies</Text>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={23}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={data2}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Most Viewed Movies</Text>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={23}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Old Movies</Text>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={23}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Recent Movies</Text>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={23}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "black",
    // height: HeaderHeight,
  },
  container2: {
    height: 50,

    //backgroundColor: "yellow",
  },
  NavItemContainer: {
    // padding: 15,
    paddingHorizontal: 14,
    //backgroundColor: "pink",
  },
  itemText: {
    fontSize: 12,
    fontWeight: "500",
    // marginRight: 15,
    paddingHorizontal: 12,
  },
  imgStyle: {
    flexDirection: "row",
    paddingTop: 10,
    height: 120,
  },
  logoimg: {
    width: 50,
    height: "40%",
    marginTop: 50,
    resizeMode: "contain",

    padding: 10,
  },

  txtstyle: {
    color: "red",
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: "bold",
    paddingTop: 62,
  },
  profStyle: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginLeft: 240,
    marginTop: 55,
  },
  profStyle2: {
    height: "100%",
    width: "100%",
  },
  textBorder: {
    // position: "absolute",
    // bottom: 0,
    alignSelf: "center",
    borderWidth: 1.7,
    borderColor: "red",
    borderRadius: 7,
    top: 10,
  },

  videoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  videoStyling: {
    width: windowWidth * 1,
    height: windowHeight * 0.26,

    resizeMode: "cover",
    borderRadius: 5,
  },
  muteContainer: {
    top: 15,
  },
  VideoDescriptionBox: {
    height: "18%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,

    zIndex: 1,
  },
  titleContainer: {},
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
  },
  duration: {
    paddingTop: 4,
    fontSize: 10,
    fontWeight: "400",
    color: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 19,
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "400",
    color: "white",
  },
  IconStyle: {
    left: 5,
  },
  container3: {
    height: 125,
  },
  itemContainer: {
    width: 190,
    height: "100%",

    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 18,
  },
  descriptionContainer: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },

  descriptionTitle: {
    color: "white",
    fontSize: 11,
    fontWeight: "400",
    position: "relative",
  },
  descriptionDuration: {
    color: "white",
    fontSize: 8,
    position: "relative",
  },
});

export default Home;
