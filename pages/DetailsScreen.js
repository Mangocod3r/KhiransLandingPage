// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Text } from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';

// const DetailsScreen = ({ route }) => {
//   const { email } = route.params;

//   return (
//     <View style={styles.container}>
//       <LinearGradient colors={['#FFA500', '#FFD700']} style={styles.gradient}>
//         <Text style={styles.title}>Welcome to Khirans Landing Page</Text>
//         <Text style={styles.detailText}>Email: {email}</Text>
//         {/* Add more creative posts or details here */}
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
//   detailText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
// });

// export default DetailsScreen;
// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Text, Card } from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';

// const DetailsScreen = ({ route }) => {
//   const { email } = route.params;

//   const creativePosts = [
//     {
//       title: 'Enhancing Agriculture',
//       content: 'Discover how our farmers are implementing innovative techniques to boost crop quality and productivity.',
//     },
//     {
//       title: 'Farm-to-Table Journey',
//       content: 'Take a virtual tour of our farms and witness the journey of your food from the fields to your plate.',
//     },
//     {
//       title: 'Delicious Recipes',
//       content: 'Explore a collection of mouthwatering recipes crafted with love by our expert chefs.',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <LinearGradient colors={['#FFA500', '#FFD700']} style={styles.gradient}>
//         <Text style={styles.title}>Welcome to Khirans Landing Page</Text>
//         <Text style={styles.detailText}>Email: {email}</Text>
//         <ScrollView contentContainerStyle={styles.cardContainer}>
//           {creativePosts.map((post, index) => (
//             <Card key={index} style={styles.card}>
//               <Card.Content>
//                 <Text style={styles.cardTitle}>{post.title}</Text>
//                 <Text style={styles.cardContent}>{post.content}</Text>
//               </Card.Content>
//             </Card>
//           ))}
//         </ScrollView>
//       </LinearGradient>
//     </View>
//   );
// };

import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const DetailsScreen = ({ route }) => {
  const { email } = route.params;
  const navigation = useNavigation(); // Get the navigation object

  const creativePosts = [
    {
      title: 'Enhancing Agriculture',
      content: 'Discover how our farmers are implementing innovative techniques to boost crop quality and productivity.',
      section: 'FarmerEngagement',
    },
    {
      title: 'Farm-to-Table Journey',
      content: 'Take a virtual tour of our farms and witness the journey of your food from the fields to your plate.',
      section: 'FoodCategories',
    },
    {
      title: 'Delicious Recipes',
      content: 'Explore a collection of mouthwatering recipes crafted with love by our expert chefs.',
      section: 'VideoContent',
    },
  ];

  // Function to navigate to the corresponding section page
  const handleSectionPress = (section) => {
    navigation.navigate(section);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFA500', '#FFD700']} style={styles.gradient}>
        <Text style={styles.title}>Welcome to Khirans Landing Page</Text>
        <Text style={styles.detailText}>Email: {email}</Text>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {creativePosts.map((post, index) => (
            <TouchableOpacity key={index} onPress={() => handleSectionPress(post.section)}>
              <Card style={styles.card}>
                <Card.Content>
                  <Text style={styles.cardTitle}>{post.title}</Text>
                  <Text style={styles.cardContent}>{post.content}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  detailText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
  },
});

export default DetailsScreen;
