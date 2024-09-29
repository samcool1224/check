import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ setCurrentScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
      setCurrentScreen('addbookings'); // Navigate to AddBookings after sign up
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Create an Account</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.separator} />
      <Button title="Sign Up" onPress={handleSignUp} color="#A10909" />
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => setCurrentScreen('signin')} color="#A10909">
          Sign In
        </Text>
      </Text>
      <View style={styles.navBar}>
        <Image
          source={require('../assets/nav1.png')}
          style={styles.navIcon}
          onPress={() => setCurrentScreen('signin')}
        />
        <Image
          source={require('../assets/nav2.png')}
          style={[styles.navIcon, styles.activeNavIcon]} // Active icon
          onPress={() => setCurrentScreen('signup')}
        />
        <Image
          source={require('../assets/nav3.png')}
          style={styles.navIcon}
          onPress={() => setCurrentScreen('addbookings')}
        />
        <Image
          source={require('../assets/nav4.png')}
          style={styles.navIcon}
          onPress={() => setCurrentScreen('someOtherScreen')} // Replace with actual screen
        />
        <Image
          source={require('../assets/nav5.png')}
          style={styles.navIcon}
          onPress={() => setCurrentScreen('anotherScreen')} // Replace with actual screen
        />
      </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
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
  separator: {
    height: 1,
    backgroundColor: '#A10909',
    marginVertical: 10,
  },
  link: {
    color: 'blue',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navIcon: {
    width: 40,
    height: 40,
    opacity: 0.5, // Default opacity
  },
  activeNavIcon: {
    opacity: 1, // Highlight active icon
    borderWidth: 2,
    borderColor: '#A10909', // Highlight color
    borderRadius: 20, // Rounded border
  },
});

export default SignUp;