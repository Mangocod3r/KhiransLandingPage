import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubscribe = () => {
    // Implement your email capturing logic here
    console.log('User subscribed with email:', email);
    // Reset the email input field after capturing
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4B0082', '#0000FF']} style={styles.gradient}>
        <Text style={styles.title}>Khirans Landing Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Button mode="contained" onPress={handleSubscribe}>
          Subscribe
        </Button>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default App;
