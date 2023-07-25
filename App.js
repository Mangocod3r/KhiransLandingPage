import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import FarmerEngagement from './pages/FarmerEngagement';
import FoodCategories from './pages/FoodCategories';
import VideoContent from './pages/VideoContent';
// Import other section components here

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="FarmerEngagement" component={FarmerEngagement} />
        <Stack.Screen name="FoodCategories" component={FoodCategories} />
        <Stack.Screen name="VideoContent" component={VideoContent} />
        {/* Add other section screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
