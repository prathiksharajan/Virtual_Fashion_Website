import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Comment out the axios request
      // const url = 'http://192.168.56.1:3000/login';
      // console.log('Requesting URL:', url);
  
      // const response = await axios.post(url, {
      //   username,
      //   password
      // });
  
      // Comment out the response handling
      // if (response.data.isAuthenticated) {
      //   console.log('Login successful');
      //   await AsyncStorage.setItem('username', username);
      //   navigation.navigate('Menu', { username: username });
      // } else {
      //   Alert.alert('Error', 'Invalid username or password');
      // }
  
      // Directly navigate to the Menu screen
      navigation.navigate('Menu', { username: username });
      Alert.alert('Login Success', 'You have successfully logged in.');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };
  

  const handleSignUp = () => {
    // Navigate to the sign-up screen (assuming 'SignUpScreen' is the route name for SignUpScreen.js)
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1adcc'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#cb16cb',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  signUpText: {
    color: '#0000ff',
    textAlign: 'center',
  },
});

export default LoginScreen;
