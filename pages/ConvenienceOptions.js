import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const ConvenienceOptions = () => {
  return (
    <LinearGradient colors={['#FF1493', '#FF69B4']} style={styles.container}>
      <Text style={styles.sectionTitle}>Convenience and Delivery Options:</Text>
      <Text>Along with the meeting point for order pickup, explore the possibility of offering home delivery for customers who prefer convenience. Ensure efficient and timely delivery to maintain customer satisfaction.</Text>
      <Text>Integrate a user-friendly online ordering system in your mobile app/website to streamline the ordering process and make it more convenient for customers.</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});

export default ConvenienceOptions;
