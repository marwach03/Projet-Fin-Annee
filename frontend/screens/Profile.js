import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, Image} from 'react-native';
import {firebase} from '../config';

const Profile = ({ navigation }) => {

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    });
  };

  useEffect(() => {
    // Récupérer l'utilisateur actuellement connecté
    const currentUser = firebase.auth().currentUser;
    const email = firebase.auth().currentUser.email;
    // Vérifier si un utilisateur est connecté
    if (currentUser) {
      // Récupérer les informations de l'utilisateur à partir de la base de données Firestore
      firebase.firestore().collection('users').doc(currentUser.uid).get().then((doc) => {
          if (doc.exists) {
            // Récupérer le nom d'utilisateur depuis les données de l'utilisateur
            const userData = doc.data();
            setUsername(userData.username);
            setEmail(userData.email);
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, []);
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
      <Image source={require('../images/ProfilNeutre.png')} style={styles.imageuser}></Image>
      <Text style={styles.text}>{username || 'Guest'}</Text>
      <Text style={styles.text2}>{email}</Text>
      <TouchableOpacity style={styles.button} onPress={changePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
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
    marginTop: windowHeight * -0.05,
    marginBottom: windowHeight * 0.05,
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
  imageuser:{
    width:200,
    height:200,
    marginTop: windowHeight * -0.3,
  },
  text2: {
    fontSize: windowWidth * 0.05,
    marginTop: windowHeight * -0.04,
    marginBottom: windowHeight * 0.05,
  },
});
export default Profile;