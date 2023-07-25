import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const CustomerIncentives = () => {
  return (
    <LinearGradient colors={['#4169E1', '#0000FF']} style={styles.container}>
      <Text style={styles.sectionTitle}>Customer Incentives and Reviews:</Text>
      <Text>In addition to the 10% discount on the next order for providing a review, consider implementing a loyalty program where customers earn points for every purchase, which can be redeemed for discounts or free items.</Text>
      <Text>Encourage customers to provide detailed feedback and suggestions, which can help you improve your offerings and overall customer experience.</Text>
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

export default CustomerIncentives;
