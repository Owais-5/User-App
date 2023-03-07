import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // TODO: Implement sign-in logic
    if (email === 'cs191051@dsu.edu.pk' && password === '123') {
      setErrorMessage('Welcome');
      navigation.navigate("Home");
    } else {
      setErrorMessage('Invalid email or password');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40, // added padding to create some space between the edges of the container and the content
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
      
    },
    input: {
      width: 200, // make input fields take up the full width of the container
      height: 48,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 16,
      fontSize: 16,
    },
    button: {
      width: 100, // make the button take up the full width of the container
      height: 48,
      backgroundColor: '#007bff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
    

export default SignIn;