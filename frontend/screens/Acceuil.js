import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from '../config';

const Acceuil = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Récupérer l'utilisateur actuellement connecté
    const currentUser = firebase.auth().currentUser;

    // Vérifier si un utilisateur est connecté
    if (currentUser) {
      // Récupérer les informations de l'utilisateur à partir de la base de données Firestore
      firebase.firestore().collection('users').doc(currentUser.uid).get().then((doc) => {
          if (doc.exists) {
            // Récupérer le nom d'utilisateur depuis les données de l'utilisateur
            const userData = doc.data();
            setUsername(userData.username);
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello {username || 'Guest'},</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Acceuil;
