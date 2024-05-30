import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimerCircle from './minuteur';
import Exercice from './exercice';

const ExercicesRelaxation = () => {
  const navigation = useNavigation();
  const [showTimer, setShowTimer] = useState(false);

  const handleStart = () => {
    navigation.navigate('Exercice');
    //setShowTimer(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Relaxation Exercises</Text>
          <View style={styles.containerRow}>
            <View style={styles.containers1}>
              <ImageBackground source={require('../../../images/V1.png')} style={styles.icons2}>
                <Text style={styles.datetext2}>Rhomboid stretch 30s</Text>
              </ImageBackground>
            </View>
            
            <View style={styles.containers1}>
              <ImageBackground source={require('../../../images/V2.png')} style={styles.icons3}>
                <Text style={styles.datetext2}>Clockwise circles 30s</Text>
              </ImageBackground>
            </View>

            <View style={styles.containers1}>
              <ImageBackground source={require('../../../images/V3.png')} style={styles.icons4}>
                <Text style={styles.datetext2}>crocodile shoulders 30s</Text>
              </ImageBackground>
            </View>

            <View style={styles.containers1}>
              <ImageBackground source={require('../../../images/V4.png')} style={styles.icons5}>
                <Text style={styles.datetext2}>Shoulder roll clockwise 30s</Text>
              </ImageBackground>
            </View>

            <View style={styles.containers1}>
              <ImageBackground source={require('../../../images/V5.png')} style={styles.icons5}>
                <Text style={styles.datetext2}>Head movements down and up 30s</Text>
              </ImageBackground>
            </View>

            <TouchableOpacity style={styles.button1} onPress={handleStart}>
              <Text style={styles.TextStart}>Start</Text>
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
  container: {
    marginTop: windowWidth * 0.9,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1:{
    marginTop: windowWidth * -0.8,
    fontSize: windowHeight * 0.04,
    marginLeft: windowHeight * 0.08,
    fontWeight: 'bold',
    color : "#FAA2AA",
  },
  containers1:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.03,
    borderBottomWidth: windowHeight * 0.005,
    borderColor : 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.25,
    margin: windowHeight * 0.015,
  },
  containerRow: {
    top: windowHeight * -0.03,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: windowHeight * 0.03,
  },
  datetext2:{
    marginTop: windowHeight * 0.07,
    marginLeft: windowHeight * -0.28,
    width: windowHeight * 0.32,
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 0, // Modifier selon votre besoin
  },
  icons2:{
    marginTop: windowHeight * 0.04,
    marginLeft: windowHeight * 0.28,
    width: windowHeight * 0.12,
    height: windowHeight * 0.2,
  },
  icons3:{
    marginTop: windowHeight * 0.01,
    marginLeft: windowHeight * 0.28,
    width: windowHeight * 0.1,
    height: windowHeight * 0.15,
  },
  icons4:{
    marginTop: windowHeight * 0.01,
    marginLeft: windowHeight * 0.28,
    width: windowHeight * 0.08,
    height: windowHeight * 0.18,
  },
  icons5:{
    marginTop: windowHeight * 0.01,
    marginLeft: windowHeight * 0.28,
    width: windowHeight * 0.1,
    height: windowHeight * 0.18,
  },
  button1:{
    alignSelf: 'center', 
    padding: 10,
    backgroundColor: "#008080",
    borderRadius: 10,
    marginTop: windowHeight * 0.7,
    marginLeft: windowHeight * 0.085,
    marginBottom:  windowHeight * -0.5,
    width:200,
  },
  TextStart:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
  }
});

export default ExercicesRelaxation;
