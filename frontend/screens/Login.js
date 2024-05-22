import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { firebase } from '../config';
import { FONTS } from '../constants/fonts';
import Acceuil from './acceuil';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation(); // Obtenez l'objet de navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Acceuil');
  }

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Acceuil');
    } catch (error) {
      alert(error.message);
    }
  };

  //Forget Password
  const forgetPassword = () => {
    firebase.auth().sendPasswordResetEmail(email) .then(() => {
      alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.image} />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username or e-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button3} onPress={() => forgetPassword()}>
        <Text style={styles.buttonText}>Forgot password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => loginUser(email, password)}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.title1}>You haven't an account?</Text>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText1} onPress={handlesignup}> Sign up</Text>
      </TouchableOpacity>
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
  button2: {
    marginTop: windowWidth * -0.068,
    marginLeft: windowWidth * 0.6,
  },
  button3: {
    marginTop: windowWidth * 0.04,
    marginLeft: windowWidth * 0.45,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonText1: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#008080',
  },
  image: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    marginBottom: windowWidth * -0.06,
  },
  title1: {
    fontSize: windowWidth * 0.05,
    marginTop: windowHeight * 0.01,
    color: 'black',
    marginRight: windowHeight * 0.06,
  },
  sphereContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight * -0.15,
  },
  largeSphere: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderRadius: windowWidth * 0.3,
    backgroundColor: '#BED3D3',
    top: windowHeight * -0.7,
    right: windowWidth * 0.7,
  },
  smallSphere: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5    ,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    bottom: windowWidth * -0.65,
    left: windowWidth * 0.35,
  },
  smallSphere2: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    backgroundColor: '#BED3D3',
    bottom: windowWidth * -0.5,
    right: windowHeight * -0.21,
  },
});

export default Login;