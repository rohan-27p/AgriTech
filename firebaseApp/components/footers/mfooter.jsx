import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MFooter() {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNav}>
      {["Home", "Shopping", "Chat", "Account"].map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(`${icon}`)}
        >
          <Icon name={icon.toLowerCase()} size={24} style={styles.navIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 18,
    backgroundColor: "#fff",
    elevation: 3,
  },
  navIcon: {
    color: "#555",
  },
});
