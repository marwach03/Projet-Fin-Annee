import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {firebase} from '../config';

const Acceuil = ({ navigation }) => {
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <View style={styles.container}>
      <Text>WELCOME TO ACCEUIL</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default Acceuil;