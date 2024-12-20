import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("Favour Isechap Rimamchirika");
  const [email, setEmail] = useState("Favourisechap47@gmail.com");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("7/03/2005");
  const [country, setCountry] = useState("Nigeria");

  const handleSaveChanges = () => {
    // Add functionality to save changes
    console.log("Changes saved:", { name, email, password, dob, country });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual image URL
          style={styles.profilePicture}
        />
      </View>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="Date of Birth"
      />
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Country/Region"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa", // Light gray background for modern look
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#343a40", // Dark gray text
    textAlign: "center", // Center align title
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e9ecef", // Subtle gray
    borderWidth: 2,
    borderColor: "#ced4da", // Slightly darker gray for border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow effect
  },
  input: {
    borderWidth: 1,
    borderColor: "#ced4da", // Subtle border color
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff", // White background for inputs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Elevation for shadow effect
    fontSize: 16,
    color: "#495057", // Neutral dark text color
  },
  saveButton: {
    backgroundColor: "#0d6efd", // Bootstrap-like blue
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default EditProfileScreen;
