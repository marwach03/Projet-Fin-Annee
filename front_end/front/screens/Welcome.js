import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';


const Welcome = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login'); 
  };
  
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.image}/>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.title1}>Make your life easy with us!</Text>

      {/* Trois sphères */}
      <View style={styles.sphereContainer}>
        <View style={[styles.sphere, styles.smallSphere]} />
        <View style={[styles.sphere, styles.smallSphere2]} />
        <View style={[styles.sphere, styles.largeSphere]} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: windowWidth * 0.13,
    fontWeight: 'bold',
    color: '#008080',
    marginBottom: windowHeight * 0.08,
  },
  button1: {
    backgroundColor: '#BED3D3',
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.09,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowHeight * 0.02,
    marginRight: windowHeight * 0.2,
  },
  button2: {
    backgroundColor: '#BED3D3',
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.08,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowHeight * 0.1,
    marginLeft: windowHeight * 0.2,
    marginTop: windowWidth * -0.21,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
  },
  title1:{
    fontSize: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
    fontWeight: 'bold',
    color: 'black',
  },
  sphereContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight * -0.42,
  },
  sphere: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.15,
    backgroundColor: 'black',
  },
  largeSphere: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.3,
    backgroundColor: '#008080',
    top: windowHeight * -0.6,
    right: windowWidth * 0.3,
  },
  smallSphere: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    top: windowHeight * -0.6,
    left: windowWidth * 0.01,
  },
  smallSphere2: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    top: windowHeight * -0.6,
    right: windowHeight * -0.2,
  },
});

export default Welcome;
