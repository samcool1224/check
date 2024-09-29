// screens/AddBookings.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { firestore } from '../firebase'; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; 

const AddBookings = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [costPerDay, setCostPerDay] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddProduct = async () => {
    try {
      const bookingsCollection = collection(firestore, 'bookings');
      await addDoc(bookingsCollection, {
        productName,
        description,
        costPerDay,
        type,
        weight,
        startDate,
        endDate,
      });
      alert('Product added successfully!');
    } catch (error) {
      alert('Error adding product: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Hello, Here is where you can add a listing</Text>
      <Text style={styles.subtitle}>You can edit these anytime in the listings page</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        placeholder="Enter Name Of LendProduct Here"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Please Enter a Brief Description of the product"
      />
      <View style={styles.row}>
        <TextInput
          style={styles.inputSmall}
          value={costPerDay}
          onChangeText={setCostPerDay}
          placeholder="Cost Per Day"
        />
        <TextInput
          style={styles.inputSmall}
          value={type}
          onChangeText={setType}
          placeholder="Type"
        />
        <TextInput
          style={styles.inputSmall}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight in Pounds"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.inputSmall}
          value={startDate}
          onChangeText={setStartDate}
          placeholder="Start Date Availability"
        />
        <TextInput
          style={styles.inputSmall}
          value={endDate}
          onChangeText={setEndDate}
          placeholder="End Date Availability"
        />
      </View>
      <Button title="Add" onPress={handleAddProduct} color="#A10909" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSmall: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
});

export default AddBookings;