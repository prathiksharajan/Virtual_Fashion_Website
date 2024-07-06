import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Comment out the axios request
      // const url = 'http://192.168.56.1:3000/signup';
      // console.log('Requesting URL:', url);
  
      // const response = await axios.post(url, {
      //   username,
      //   password
      // });
  
      // Comment out the response handling
      // if (response.data.success) {
      //   Alert.alert('Success', 'Account created successfully. Please log in.');
      //   navigation.navigate('LoginScreen');
      // } else {
      //   Alert.alert('Error', 'Failed to create account. Please try again.');
      // }
  
      // Directly navigate to the LoginScreen
      Alert.alert('Success', 'Account created successfully. Please log in.');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };
  

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
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
  clearButton: {
    backgroundColor: '#cb16cb',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default SignUpScreen;
