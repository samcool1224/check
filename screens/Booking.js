// screens/Booking.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'SpikeBall Set',
    price: '$5 Per Day',
    availability: 'Available From Aug 10 - Aug 20',
    image: require('../assets/spikeball.png'),
  },
  {
    id: '2',
    name: 'Eureka Vacuum Cleaner',
    price: '$12 Per Day',
    availability: 'Available From Aug 7 - Aug 21',
    image: require('../assets/vacuum.png'),
  },
];

const BookingScreen = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name} - {item.price}</Text>
      <TouchableOpacity>
        <Image source={item.image} style={item.id === '1' ? styles.spikeballImage : styles.vacuumImage} />
      </TouchableOpacity>
      <Text style={styles.productAvailability}>{item.availability}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="What" />
        <TextInput style={styles.searchInput} placeholder="Borrow In" />
        <TextInput style={styles.searchInput} placeholder="Borrow Out" />
        <FontAwesome name="search" size={24} color="red" style={styles.searchIcon} />
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 10,
  },
  productList: {
    alignItems: 'center',
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  spikeballImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  vacuumImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  productAvailability: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
});

export default BookingScreen;