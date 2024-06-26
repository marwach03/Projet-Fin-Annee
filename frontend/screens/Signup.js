import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, Alert } from 'react-native';
import React,{useState} from 'react';
import {firebase} from '../config'
import {useNavigation} from '@react-navigation/native';

const Signup = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const registerUser = async (username, email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://auth-220c4.firebaseapp.com',
      });
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
        email,
        username,
      });
      alert('Verification email sent');
      navigation.navigate('Login'); // Redirection vers l'écran de connexion après l'inscription
      //Alert.alert("Success signUp, now Login");
    } catch (error) {
      alert(error.message);
    }
  };
  
  

  const handleLogin = () => {
    navigation.navigate('Login');  
  };

  const handleAcceuil = () => {
    navigation.navigate('Acceuil');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.image} />
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.button1} onPress={() => registerUser(username,email,password)}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.title1}>You have already an account?</Text>
      <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText1} onPress={handleLogin}> Login</Text>
        </TouchableOpacity>

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
  // ... (previous styles)

  input: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    marginTop: windowWidth * 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
    color: '#008080',
    marginBottom: windowHeight * -0.03,
  },
  button1: {
    backgroundColor: '#008080',
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.09,
    borderRadius: windowWidth * 0.02,
    marginTop: windowWidth * 0.08,
  },
  button2 :{
    marginTop: windowWidth * -0.068,
    marginLeft:windowWidth * 0.67,
    
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonText1: {
    fontSize:windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#008080',
  },
  image: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    marginBottom: windowWidth * -0.06,
  },
  title1:{
    fontSize: windowWidth * 0.05,
    marginTop: windowHeight * 0.01,
    color: 'black',
    marginRight:windowHeight * 0.06,
  },
  sphereContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight * -0.19,
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
    backgroundColor: '#BED3D3',
    top: windowHeight * -0.84,
    right: windowWidth * 0.7,
  },
  smallSphere: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    bottom: windowWidth * -0.5,
    left: windowWidth * 0.35,
  },
  smallSphere2: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    bottom: windowWidth * -0.37,
    right: windowHeight * -0.21,
  },
});

export default Signup;