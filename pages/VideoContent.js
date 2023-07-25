import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const VideoContent = () => {
  return (
    <LinearGradient colors={['#FF4500', '#FFA07A']} style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Video Content and Transparency:</Text>
          <Text>Share videos showcasing the cooking process to highlight the cleanliness, hygiene, and quality standards of your food preparation.</Text>
          <Text>Consider sharing snippets of farm visits and interactions with farmers to build trust and transparency with your customers.</Text>
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

export default VideoContent;
