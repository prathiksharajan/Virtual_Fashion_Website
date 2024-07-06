import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation, route  }) => {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>
          Welcome to <Text style={styles.italic}>StyleHarbor!</Text>
        </Text>
      </View>

      <ScrollView style={styles.main}>

        {/* Feature 2: Outfit Recommendations */}
        <TouchableOpacity
          style={styles.featureContainer}
          onPress={() =>{if (username) {
            navigation.navigate('OutfitRecommendationsScreen', { username: username });
          } else {
            console.error('Username is undefined or empty');
          }
          }}>
          <Text style={styles.featureTitle}>
            <Text style={styles.link}>Outfit Recommendations</Text>
          </Text>
          <Text style={styles.liner}>Explore curated outfit suggestions tailored just for you</Text>
          <Image source={require('./closet.jpg')} style={styles.image} />
        </TouchableOpacity>

        {/* Feature 3: Virtual Wardrobe */}
        <TouchableOpacity
          style={styles.featureContainer}
          onPress={() => navigation.navigate('VirtualWardrobe')}>
          <Text style={styles.featureTitle}>
            <Text style={styles.link}>Virtual Wardrobe</Text>
          </Text>
          <Text style={styles.liner}>Organize and discover your clothing collection in a virtual space</Text>
          <Image source={require('./purple1.jpg')} style={styles.image} />
        </TouchableOpacity>

        {/* Feature 4: Create Ideas */}
        <TouchableOpacity
          style={styles.featureContainer}
          onPress={() => console.log('Create Ideas')}>
          <Text style={styles.featureTitle}>
            <Text style={styles.link}>Create Ideas</Text>
          </Text>
          <Text style={styles.liner}>Unleash your creativity by crafting and visualizing unique outfit ideas.</Text>
          <Image source={require('./acc.jpg')} style={styles.image} />
        </TouchableOpacity>

        {/* Feature 5: Fashion Basics */}
        <TouchableOpacity
          style={styles.featureContainer}
          onPress={() => navigation.navigate('FashionBasicsScreen')}>
          <Text style={styles.featureTitle}>
            <Text style={styles.link}>Fashion Basics</Text>
          </Text>
          <Text style={styles.liner}>
            Explore the fundamentals of style in Fashion Basics—a journey into the essential elements that form the canvas
            of your chic and timeless wardrobe.
          </Text>
          <Image source={require('./lavender.jpg')} style={styles.image} />
        </TouchableOpacity>

        {/* Logout Option */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log('Logout')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; StyleHarbor2024. All rights reserved</Text>
      </View>
    </View>
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
  logoutButton: {
    padding: 10,
    backgroundColor: '#cb16cb',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontFamily: 'Sofia',
    fontSize: 16,
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

export default MenuScreen;
