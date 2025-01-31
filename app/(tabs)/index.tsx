import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("dashboard");
  };

  const handleSignIn = () => {
    (navigation as any).navigate("auth");
  };

  const testRoute = () => {
    (navigation as any).navigate("test");
  };

  return (
    <View style={styles.container}>
              <Image style={styles.header1} source={require('@/assets/images/logo1.png')}/>
      
      {/* Two Text Messages */}
      <Text style={styles.headerText}>Civil Registry Portal</Text>
      <Text style={styles.subText}>
        Explore and manage your content with ease.
      </Text>

      {/* <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
        <Text style={styles.buttonText}>Data Entry</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleSignIn()}
      >
        <Text style={styles.buttonText}>Getting Started</Text>
      </TouchableOpacity>
      <Image style={styles.banner} source={require('@/assets/images/banner.png')}/>
    </View>
  );
}

// Styling for a modern, attractive layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#45b39d", // Light background for contrast against buttons
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40, // Space between text and buttons
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
header : {
  height: 100,
  width: 200,
  left: 10,
  borderRadius: 60,
},
header1 : {
  height: 150,
  width: 250,
  left: 10,
  borderRadius: 60,
},
banner : {
  height: 150,
  width: 200,

}
});
