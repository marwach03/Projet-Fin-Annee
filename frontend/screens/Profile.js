import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import {firebase} from '../config';

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    });
  };

  //Change password 
  const changePassword = () =>{
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email).then(() => {
      alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profil!</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: windowHeight * -0.03,
  },
  button: {
    backgroundColor: '#008080',
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.09,
    borderRadius: windowWidth * 0.02,
    marginTop: windowWidth * 0.08,
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
});
export default Profile;