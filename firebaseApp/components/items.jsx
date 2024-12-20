import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const PlaceOrderScreen = () => {
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("");
  const [region, setRegion] = useState("");
  const [loadingDate, setLoadingDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState("");

  const handleSubmit = () => {
    if (!quantity || !quality || !region || !deliveryLocation) {
      Alert.alert("Error", "Please fill in all the mandatory fields.");
      return;
    }

    Alert.alert(
      "Order Submitted",
      `
      Quantity: ${quantity}
      Quality: ${quality}
      Region: ${region}
      Loading Date: ${loadingDate.toLocaleDateString()}
      Delivery Location: ${deliveryLocation}
    `
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quantity Selection</Text>
      <Picker
        selectedValue={quantity}
        onValueChange={(itemValue) => setQuantity(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Quantity" value="" />
        <Picker.Item label="12 tons" value="12 tons" />
        <Picker.Item label="15 tons" value="15 tons" />
        <Picker.Item label="18 tons" value="18 tons" />
        <Picker.Item label="25 tons" value="25 tons" />
        <Picker.Item label="30 tons" value="30 tons" />
      </Picker>

      <Text style={styles.label}>Quality Type</Text>
      <View style={styles.radioGroup}>
        {["Single Filter", "Double Filter", "Mixed"].map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.radioButton}
            onPress={() => setQuality(type)}
          >
            <View
              style={[
                styles.radioCircle,
                quality === type && styles.radioSelected,
              ]}
            />
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Region Selection</Text>
      <Picker
        selectedValue={region}
        onValueChange={(itemValue) => setRegion(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Region" value="" />
        <Picker.Item label="Chamarajanagar" value="Chamarajanagar" />
        <Picker.Item label="Madhur" value="Madhur" />
        <Picker.Item label="Karepta" value="Karepta" />
        <Picker.Item label="Mandya" value="Mandya" />
        <Picker.Item label="Hollesphure" value="Hollesphure" />
        <Picker.Item label="Polyachi" value="Polyachi" />
      </Picker>

      <Text style={styles.label}>Loading Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePickerButton}
      >
        <Text>{loadingDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={loadingDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setLoadingDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>Delivery Location</Text>
      <TextInput
        style={styles.textInput}
        value={deliveryLocation}
        onChangeText={setDeliveryLocation}
        placeholder="Enter Delivery Location"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 5,
  },
  radioSelected: {
    backgroundColor: "#000",
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PlaceOrderScreen;
