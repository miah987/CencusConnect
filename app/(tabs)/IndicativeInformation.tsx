import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Alert, ScrollView } from "react-native";

const IndicativeInformation = ({ navigation }: { navigation: any }) => {
  const [censusUnit, setCensusUnit] = useState("");
  const [censusUnitType, setCensusUnitType] = useState("");
  const [workloadNumber, setWorkloadNumber] = useState("");
  const [section, setSection] = useState("");
  const [lot, setLot] = useState("");
  const [structureRecordNumber, setStructureRecordNumber] = useState("");
  const [pdNumber, setPdNumber] = useState("");
  const [householdNumber, setHouseholdNumber] = useState("");

  const handleSubmit = () => {
    if (
      !censusUnit || 
      !censusUnitType || 
      !workloadNumber || 
      !section || 
      !lot || 
      !structureRecordNumber || 
      !pdNumber || 
      !householdNumber
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    
    // Submit data logic here
    console.log({
      censusUnit,
      censusUnitType,
      workloadNumber,
      section,
      lot,
      structureRecordNumber,
      pdNumber,
      householdNumber,
    });
    Alert.alert("Success", "Form submitted successfully!");
    resetForm();
  };

  const resetForm = () => {
    setCensusUnit("");
    setCensusUnitType("");
    setWorkloadNumber("");
    setSection("");
    setLot("");
    setStructureRecordNumber("");
    setPdNumber("");
    setHouseholdNumber("");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.header}>Indicative Information</Text>
        {/* Census Unit */}
        <Text style={styles.label}>Census Unit</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Census Unit"
            value={censusUnit}
            onChangeText={setCensusUnit}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Census Unit Type */}
        <Text style={styles.label}>Census Unit Type</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Census Unit Type"
            value={censusUnitType}
            onChangeText={setCensusUnitType}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Workload Number */}
        <Text style={styles.label}>Workload Number</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Workload Number"
            value={workloadNumber}
            onChangeText={setWorkloadNumber}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Section */}
        <Text style={styles.label}>Section</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Section"
            value={section}
            onChangeText={setSection}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Lot */}
        <Text style={styles.label}>Lot</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Lot"
            value={lot}
            onChangeText={setLot}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Structure Record Number */}
        <Text style={styles.label}>Structure Record Number</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Structure Record Number"
            value={structureRecordNumber}
            onChangeText={setStructureRecordNumber}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* PD Number */}
        <Text style={styles.label}>PD Number</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter PD Number"
            value={pdNumber}
            onChangeText={setPdNumber}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        {/* Household Number */}
        <Text style={styles.label}>Household Number</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Household Number"
            value={householdNumber}
            onChangeText={setHouseholdNumber}
            keyboardType="numeric"
            placeholderTextColor="#888"
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7d3c98",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#5a5a5a",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

export default IndicativeInformation;
