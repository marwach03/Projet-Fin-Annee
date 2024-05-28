import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebase } from '../config';
import ToDoList from './todolist/ToDoList';
import { useNavigation } from '@react-navigation/native';
import citation from './Citations/citations';
import MeditationAcceuil from './Meditation/meditationAcceuil';
import Sleep from './Sleep/BedtimeDial';
import SleepDurationChart from './Sleep/chartSleep';

const Acceuil = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);

  const handleQuotes = () => {
    navigation.navigate('Citation');
  };

  const handleMeditationAcceuil = () => {
    navigation.navigate('MeditationAcceuil');
  };

  const handlBreathing = () => {
    navigation.navigate('Breathing');
  };

  const handleSleep = () => {
    navigation.navigate('Sleep');
  };

  const currentDate = new Date();
  // Formater la date (par exemple: "27 avril 2024")
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });  

  const handleToDoList = () => {
    navigation.navigate('ToDoList'); 
  }

  const handleLearning = () => {
    navigation.navigate('Learning');
  }

  const handleChartSleep = () => {
    navigation.navigate('SleepDurationChart');
  }

  const handleParagraph1 = () => {
    navigation.navigate('ParagraphOne');
  }

  const handleParagraph5 = () => {
    navigation.navigate('ParagraphFive');
  }

  const handleParagraph10 = () => {
    navigation.navigate('ParagraphTen');
  }

  const handleParagraph15 = () => {
    navigation.navigate('ParagraphFifteen');
  }

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
        <ImageBackground source={require('../images/butterfly.jpg')} style={styles.imageuser}>
          <Image source={require('../images/logo.png')} style={styles.imagelogo} />
          <Text style={styles.usernameS}>Hello, {username || 'Guest'}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </ImageBackground>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Recommended for you</Text>
          <View style={styles.containerRow}>
            <TouchableOpacity style={styles.containers} onPress={() => handleQuotes()}>
              <Image source={require('../images/citation2.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Quotes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleSleep()}>
              <Image source={require('../images/sommeil.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Sleep</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleLearning()}>
              <Image source={require('../images/ressourcesEd.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Learning resources</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleMeditationAcceuil()}>
              <Image source={require('../images/meditation.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Guided meditation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handlBreathing()}>
              <Image source={require('../images/respiration.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>Breathing exercises</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleToDoList()}>
              <Image source={require('../images/todolist.png')} style={styles.icons2} />
              <Text style={styles.datetext2}>To do list</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SleepDurationChart />

        <View>
          <Text style={styles.h2}>Articles for you</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.containerRow}>
          
            <TouchableOpacity style={styles.containers2} onPress={() => handleParagraph10()}>
                <ImageBackground source={require('../images/p10.jpg')} style={styles.icons3}>
                  <Text style={styles.datetext3}>Mastering Your Day</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.containers2} onPress={() => handleParagraph15()}>
                <ImageBackground source={require('../images/p15.jpg')} style={styles.icons3}>
                  <Text style={styles.datetext3}>5 Ways to Achieve Happiness Through Yoga</Text>
                </ImageBackground>
              </TouchableOpacity>

            <TouchableOpacity style={styles.containers2} onPress={() => handleParagraph1()}>
              <ImageBackground source={require('../images/p1.jpg')} style={styles.icons3}>
                <Text style={styles.datetext3}>Hunger of the heart: food is not just fuel</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers2} onPress={() => handleParagraph5()}>
              <ImageBackground source={require('../images/p5.jpg')} style={styles.icons3}>
                <Text style={styles.datetext3}>How to deal with anger</Text>
              </ImageBackground>
            </TouchableOpacity>

          </View>
        </ScrollView>
        
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 150, // Modifier selon votre besoin
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameS:{
    color:'white',
    fontWeight: 'bold',
    fontSize:windowHeight * 0.035,
    marginTop: windowHeight * -0.045,
    paddingLeft:windowHeight * 0.09,
  },
  imageuser:{
    marginTop: windowWidth * 0.2,
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 0.9,
    height: windowWidth * 0.4,
    borderRadius:15,
    overflow: 'hidden',
  },
  imagelogo:{
    marginTop: windowWidth * 0.03,
    marginLeft: windowWidth * 0.02,
    width: windowHeight * 0.08,
    height: windowHeight * 0.05,
  },
  date:{
    fontWeight: 'bold',
    fontSize: windowHeight * 0.02,
    marginLeft: windowHeight * 0.05,
    marginTop: windowHeight * 0.01,
  },
  h1:{
    marginTop: windowHeight * 0.02,
    fontSize: windowHeight * 0.03,
    marginLeft: windowHeight * 0.03,
    marginBottom: windowHeight * -0.04,
    fontWeight: 'bold',
  },
  containers:{
    width: windowHeight * 0.2,
    height: windowHeight * 0.2,
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.035,
    backgroundColor: 'white',
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
    marginTop: windowHeight * -0,
    fontSize: windowHeight * 0.02,
  },
  datetext3:{
    marginTop: windowHeight * -0,
    fontWeight: 'bold',
    left: windowHeight * 0.01,
    top : windowHeight * 0.02,
    fontSize: windowHeight * 0.02,
    color: 'white',
  },
  icons2:{
    marginTop: windowHeight * 0.03,
    width: windowHeight * 0.1,
    height: windowHeight * 0.1,
  },
  icons3:{
    marginTop: windowHeight * -0.2,
    top: windowHeight * 0.1,
    width: windowHeight * 0.2,
    height: windowHeight * 0.4,
  },
  h2:{
    marginTop: windowHeight * 0.08,
    fontSize: windowHeight * 0.03,
    marginLeft: windowHeight * -0.2,
    marginBottom: windowHeight * -0.04,
    fontWeight: 'bold',
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
});

export default Acceuil;
