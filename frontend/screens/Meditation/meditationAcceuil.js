import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config';
import { Audio,Video } from 'expo-av';

const MeditationAcceuil = () => {
  const navigation = useNavigation();

  const handleMindClear = () => {
    navigation.navigate('MindClear');
  };

  const handleBrightenDay = () => {
    navigation.navigate('BrightenDay');
  };

  const handleMoreConfident = () => {
    navigation.navigate('MoreConfident');
  };

  const handleMindfulness = () => {
    navigation.navigate('Mindfulness');
  };

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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <View style={styles.containerRow}>

          <Video
            source={require('../../assets/back7.mp4')}
            rate={1.0}
            resizeMode="cover"
            shouldPlay
            isMuted={true}
            isLooping
            style={styles.containerVideo}
          />

            <View>
              <Text style={styles.usernameS}>{username || 'Guest'}, are you ready to relax</Text>
              <Image source={require('../../images/play.png')} style={styles.icons1} />            
            </View>


            <TouchableOpacity style={styles.containers} onPress={() => handleMindClear()}>
              <Image source={require('../../images/play.png')} style={styles.icons2} /> 
              <Text style={styles.datetext2} >Clear Your Mind & Start New Positive Habits</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleBrightenDay()}>
              <Image source={require('../../images/play.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Brighten Your Day</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleMoreConfident()}>
              <Image source={require('../../images/play.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>More confident</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleMindfulness()}>
              <Image source={require('../../images/play.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Mindfulness</Text>
            </TouchableOpacity>
          </View>
        </View>        
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 0, // Modifier selon votre besoin
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 1000,
    alignItems: 'center',
    backgroundColor:'#90a39d',//135D66
  },
  h1:{
    //marginTop: windowHeight * 0.3,
    paddingTop: windowHeight * 0.04,
    fontSize: windowHeight * 0.05,
    marginLeft: windowHeight * 0.02,
    marginBottom: windowHeight * 0.001,
    fontWeight: 'bold',
    color : "black",
  },
  containers:{
    width: windowHeight * 0.48,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.02,
    backgroundColor: '#bce0d6',//E3FEF7
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  datetext2:{
    marginTop: windowHeight * -0.04,
    marginBottom: windowHeight * 0.03,
    marginLeft: windowHeight * 0.12,
    width: 320,
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  icons2:{
    marginTop: windowHeight * 0.03,
    width: windowHeight * 0.1,
    height: windowHeight * 0.1,
  },
  containers2:{
    width: windowHeight * 0.2,
    height: windowHeight * 0.4,
    marginTop: windowHeight * 0.07,
    marginLeft: windowWidth * 0.035,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
    marginHorizontal: 10,
  },
  imageuser:{
    marginTop: windowWidth * -0.1,
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 1,
    height: windowWidth * 0.6,
    borderRadius:20,
    overflow: 'hidden',
  },
  usernameS:{
    color:'white',
    fontWeight: 'bold',
    fontSize:windowHeight * 0.033,
    marginTop: windowHeight * -0.25,
    paddingLeft:windowHeight * 0.02,
  },
  icons1:{
    marginTop: windowHeight * 0.09,
    marginLeft: windowHeight * 0.37,
    width: windowHeight * 0.05,
    height: windowHeight * 0.05,
  },
  containerVideo:{
    marginTop: windowWidth * -0.05,
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 0.97,
    height: windowWidth * 0.6,
    borderRadius:20,
    overflow: 'hidden',
    marginBottom: windowWidth * -0.05,
  },
  icons2:{
    marginTop: windowHeight * 0.03,
    marginLeft: windowHeight * -0.41,
    width: windowHeight * 0.05,
    height: windowHeight * 0.05,
    justifyContent: 'center', 
    alignItems: 'center',
  },
});

export default MeditationAcceuil;
