import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Downloaded videos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 12,
  },
});
export default DownloadScreen;
