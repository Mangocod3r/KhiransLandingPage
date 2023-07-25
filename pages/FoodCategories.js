import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const FoodCategories = () => {
  return (
    <LinearGradient colors={['#32CD32', '#008000']} style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Food Categories and Recipes:</Text>
          <Text>Conduct market research and gather customer preferences to determine the most popular and in-demand food categories. This will ensure that your product offerings align with customer expectations.</Text>
          <Text>While your grandmother's recipes are valuable, consider incorporating a mix of traditional and innovative recipes to cater to a wider audience.</Text>
          <Text>Offer customization options for dietary preferences, such as vegetarian, vegan, gluten-free, etc.</Text>
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

export default FoodCategories;
