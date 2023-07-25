import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const FarmerEngagement = () => {
  return (
    <LinearGradient colors={['#4B0082', '#0000FF']} style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Farmer Engagement and Development:</Text>
          <Text>In addition to paying farmers 10% of your revenue, consider establishing long-term contracts with them to provide stability and ensure a consistent supply of high-quality crops.</Text>
          <Text>Offer training programs and workshops to farmers to help them enhance their agricultural practices, increase productivity, and improve crop quality.</Text>
          <Text>Create a feedback loop with farmers to understand their challenges and needs better. This can help you provide them with targeted support and advice.</Text>
        </Card.Content>
      </Card>
    </LinearGradient>
  );
};

// Remaining styles remain unchanged


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
    color: 'black',
    marginBottom: 16,
  },
});

export default FarmerEngagement;
