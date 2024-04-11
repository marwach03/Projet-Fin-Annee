import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const GetStarted = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground source={require('../images/backround.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../images/logo2.png')} style={styles.image} />
        <Text style={styles.subtitle}>Mind Guard</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  subtitle: {
    color: 'white',
    fontSize: 40,
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#BED3C3',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default GetStarted;
