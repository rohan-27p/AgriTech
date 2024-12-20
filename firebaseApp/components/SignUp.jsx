import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from "react-native";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password || !agreeToTerms) {
      alert("Please fill all fields and agree to the terms!");
      return;
    }
    alert("Sign up successful!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.backText}>← Back</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Sign up</Text>
          <Text style={styles.subHeader}>Please create a new account</Text>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type something longer here..."
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="myemail@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Text>{passwordVisible ? "🙈" : "👁"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>
              Agree to the terms of use and privacy policy
            </Text>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 55,
  },
  backText: {
    fontSize: 16,
    color: "#888",
    padding: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007BFF",
  },
  subHeader: {
    fontSize: 16,
    color: "#888",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  signUpButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
