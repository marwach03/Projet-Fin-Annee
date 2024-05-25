import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import Humeur from './Humeur';
import Acceuil from './pageAcceuil';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'; // Importez firebase depuis le fichier de configuration

const Emoji = ({ emoji }) => <Text style={styles.emojiText}>{emoji}</Text>;

const AddMood = ({ navigation }) => {
  const [selectedMoodIndex, setSelectedMoodIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Récupérer l'utilisateur actuellement connecté
    const currentUser = firebase.auth().currentUser;

    // Vérifier si un utilisateur est connecté
    if (currentUser) {
      // Récupérer les informations de l'utilisateur à partir de la base de données Firestore
      firebase.firestore().collection('users').doc(currentUser.uid).get()
        .then((doc) => {
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
  }, []); // Le tableau vide en tant que dépendance assure que cela ne s'exécute qu'une seule fois après le rendu initial

  const handleMoodBoard = () => {
    navigation.navigate('Acceuil');
  }

  const handleEmojiPress = (index) => {
    setSelectedMoodIndex(index);
    setSelectedIndex(index);
  };

  const handleValidation = async () => {
    try {
      if (selectedMoodIndex !== null) {
        const selectedMood = emojis[selectedMoodIndex];
        const moodData = {
          mood: selectedMood.emoji.props.emoji,
          description: selectedMood.mood,
          timestamp: new Date().toISOString(),
          username: username, // Utilisez le nom d'utilisateur récupéré depuis Firebase
        };
  
        // Appel de la fonction addMood ici
        await axios.post('http://192.168.11.220:3000/enregistrer-mood', moodData);
        
        console.log('Mood envoyé avec succès au serveur.');
  
        // Navigation vers la page Humeur après un enregistrement réussi
        handleMoodBoard();
      } else {
        console.error('Aucun mood sélectionné.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du mood au serveur :', error);
    }
  };
  
  
  const emojis = [
    { emoji: <Emoji emoji="⊗" />, mood: '~  ~' },
    { emoji: <Emoji emoji="🙂" />, mood: '~ Slightly ~' },
    { emoji: <Emoji emoji="🥹   " />, mood: '~ Back tears ~' },
    { emoji: <Emoji emoji="😌" />, mood: '~ Relieved ~' },
    { emoji: <Emoji emoji="😄" />, mood: '~ Happy ~' },
    { emoji: <Emoji emoji="🥰" />, mood: '~ Love ~' },
    { emoji: <Emoji emoji="🤪" />, mood: '~ Zany ~' },
    { emoji: <Emoji emoji="🤓" />, mood: '~ Education ~' },
    { emoji: <Emoji emoji="😇" />, mood: '~ Liked ~' },
    { emoji: <Emoji emoji="😒" />, mood: '~ Unamused ~' },
    { emoji: <Emoji emoji="😞" />, mood: '~ Disapointed ~' },
    { emoji: <Emoji emoji="😟" />, mood: '~ Anguished ~' },
    { emoji: <Emoji emoji="🥳" />, mood: '~ Partying ~' },
    { emoji: <Emoji emoji="😕" />, mood: '~ Confused ~' },
    { emoji: <Emoji emoji="☹️" />, mood: '~ Frowning ~' },
    { emoji: <Emoji emoji="😫" />, mood: '~ Tired ~' },
    { emoji: <Emoji emoji="😔" />, mood: '~ Pensive ~' },
    { emoji: <Emoji emoji="😢" />, mood: '~ Crying ~' },
    { emoji: <Emoji emoji="😡" />, mood: '~ Angry ~' },
    { emoji: <Emoji emoji="🤔" />, mood: '~ Thinking ~' },
    { emoji: <Emoji emoji="🤧" />, mood: '~ Sick ~' },
    { emoji: <Emoji emoji="😴" />, mood: '~ Sleeping ~' },
    { emoji: <Emoji emoji="😑" />, mood: '~ Expressionless ~' },
    { emoji: <Emoji emoji="🤯" />, mood: '~ Exploding head ~' },
    // Ajouter plus d'emojis ici
  ];

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{formattedDate}</Text>
      </View>

      <View style={styles.container}>
        {emojis.map(({ emoji, mood }, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.emojiContainer, index === selectedIndex && styles.selectedEmoji]}
            onPress={() => handleEmojiPress(index)}
          >
            {emoji}
          </TouchableOpacity>
        ))}
        {selectedMoodIndex !== null && (
          <Text style={styles.selectedMoodText}>{emojis[selectedMoodIndex].mood}</Text>
        )}
      </View>
      
      <TouchableOpacity style={styles.button1} onPress={handleValidation}>
        <Text style={styles.TextValider}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    marginTop: windowHeight * 0.08,
    marginBottom: windowHeight * 0.04,
    alignItems: 'center',
    marginBottom: 7.5,
  },
  headerText: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    marginTop: -24,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  emojiContainer: {
    flexBasis: '25%',
    aspectRatio: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  emojiText: {
    fontSize: windowHeight * 0.04,
  },
  selectedEmoji: {
    borderRadius: 10,
    backgroundColor: '#008080',
    width: 5,
  },
  selectedMoodText: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button1: {
    marginTop: windowHeight * 0.9,
    marginLeft: windowWidth * 0.2,
    padding: 10,
    paddingLeft: windowWidth * 0.25,
    paddingRight: windowWidth * 0.25,
    backgroundColor: "#008080",
    borderRadius: 10,
    position: 'absolute',
  },
  TextValider: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  }
});

export default AddMood;