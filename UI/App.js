import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import OutfitRecommendationsScreen from './OutfitRecommendationsScreen';
import FashionBasicsScreen from './FashionBasicsScreen';
import SignUpScreen from './SignScreen';
import MenuScreen from './MenuScreen';// Import MenuScreen
import VirtualWardrobe from './wardrobe';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>
          Welcome to <Text style={styles.italic}>StyleHarbor!</Text>
        </Text>
      </View>

      <ScrollView style={styles.main}>
        <TouchableOpacity
          style={styles.featureContainer}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.featureTitle}>
            <Text style={styles.link}>Login</Text>
          </Text>
          <Text style={styles.liner}>Seamlessly access your personalized fashion journey</Text>
          <Image source={require('./recom.jpg')} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; StyleHarbor2024. All rights reserved</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu">
  {props => <MenuScreen {...props} />}
</Stack.Screen>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OutfitRecommendationsScreen" component={OutfitRecommendationsScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="FashionBasicsScreen" component={FashionBasicsScreen} />
        <Stack.Screen name="VirtualWardrobe" component={VirtualWardrobe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1adcc',
    padding: 10,
  },
  top: {
    paddingVertical: 20,
    backgroundColor: '#d1adcc',
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Sofia',
    fontSize: 24,
  },
  italic: {
    color: '#cb16cb',
    fontStyle: 'italic',
  },
  main: {
    flex: 1,
    backgroundColor: '#d1adcc',
    paddingHorizontal: 10,
  },
  featureContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 20,
    fontFamily: 'Sofia',
    color: '#cb16cb',
    marginBottom: 5,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#cb16cb',
    fontFamily: 'Sofia',
  },
  liner: {
    fontFamily: 'Sofia',
    fontStyle: 'italic',
    letterSpacing: 1,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginVertical: 10,
  },
  footer: {
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#d1adcc',
  },
  footerText: {
    fontFamily: 'Sofia',
    fontSize: 12,
  },
});

export default App;