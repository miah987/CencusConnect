import React from "react";
import { View, Text, Button, StyleSheet, Alert, Platform, BackHandler, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EndPage = () => {
  const navigation = useNavigation();

  const handleRecordNextHousehold = () => {
    (navigation as any).navigate("Dashboard"); // Navigate back to Dashboard
  };

  const handleLogOut = () => {
    // Logic for logging out
    (navigation as any).navigate("index"); // Navigate back to index
  };

  const handleCloseApp = () => {
    Alert.alert("Confirm Exit", "Are you sure you want to close the app?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          // Close the app
          // For Android
          if (Platform.OS === "android") {
            BackHandler.exitApp();
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for completing the form!</Text>
     

            <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleRecordNextHousehold()}
      >
        <Text style={styles.buttonText}>Record Next Household</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleCloseApp()}
      >
        <Text style={styles.buttonText}>Exit App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e74c3c", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#e74c3c", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default EndPage;
