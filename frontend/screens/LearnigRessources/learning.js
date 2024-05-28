import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio,Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

const Learning = () => {
    const navigation = useNavigation();

    const handleEmotional= () => {
      navigation.navigate('Emotional');
    }

    const handlePsychology = () => {
      navigation.navigate('Psychology');
    }

    const handleProductivity = () => {
      navigation.navigate('Productivity');
    }

    const handlePhysical = () => {
      navigation.navigate('Physical');
    }

    const [rotationAngle, setRotationAngle] = useState(new Animated.Value(0)); 

    const handleRotateWheel = () => {
      // Gérer la rotation de la roue lorsque la roulette est tournée
      Animated.timing(rotationAngle, {
        toValue: Math.random() * 360, // Tourner la roue à un angle aléatoire entre 0 et 360 degrés
        duration: 500, // Durée de l'animation en millisecondes (moitié de la durée initiale)
        useNativeDriver: true, // Utiliser le moteur natif pour l'animation
      }).start();
    };

    const positions = [
      { x: 0, y: -100 },
      { x: 100, y: 0 },
      { x: 0, y: 100 },
      { x: -100, y: 0 }
    ];

    const animatedStyle = {
      transform: [
        {
          rotate: rotationAngle.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };

    const handleButtonPress = (index) => {
      switch (index) {
        case 0:
          navigation.navigate('Motivation');
          break;
        case 1:
          navigation.navigate('Focussing');
          break;
        case 2:
          navigation.navigate('ControlStress');
          break;
        case 3:
          navigation.navigate('Positivity');
          break;
      }
    };
  

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <View style={styles.bigcontainer}>

              <Text style={styles.h1}>Selection made for you</Text>

              <View style={styles.containerRow}>

                <Video
                  source={require('../../assets/back8.mp4')}
                  rate={1.0}
                  resizeMode="cover"
                  shouldPlay
                  isMuted={true}
                  isLooping
                  style={styles.containerVideo}
                />

                  <View>
                    <Text style={styles.titre}>Articles</Text>
                  </View>

                  <TouchableOpacity style={styles.containers2} onPress={() => handleEmotional()}>
                    <Text style={styles.datetext2}>Emotional well-being</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers3} onPress={() => handlePsychology()}>
                    <Text style={styles.datetext2}>Psychology</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers4} onPress={() => handleProductivity()}>
                    <Text style={styles.datetext2}>Productivity and growth</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers5} onPress={() => handlePhysical()}>
                    <Text style={styles.datetext2}>Physical well-being</Text>
                  </TouchableOpacity>

                    <View style={styles.containerR}>

                    <View>
                      <Text style={styles.titre2}>Tournez la roue et découvrez la pensée qui embellira votre journée !</Text>
                    </View>

                    <Animated.View style={[styles.rouletteContainer, animatedStyle]}>
                        {positions.map((position, index) => (
                          <TouchableOpacity
                            key={index}
                            style={[
                              styles.button,
                              {
                                transform: [
                                  { translateX: position.x },
                                  { translateY: position.y }
                                ]
                              }
                            ]}
                            onPress={() => handleButtonPress(index)}
                          >

                            {/* <Image source={require('../../images/chance.png')} style={styles.icons2} /> */}
                            <Icon name="leaf" size={60} color="white" />
                          </TouchableOpacity>
                        ))}
                      </Animated.View>

                      <TouchableOpacity style={styles.rotateButton} onPress={handleRotateWheel}>
                        <Text style={styles.rotateButtonText}>Tourner</Text>
                      </TouchableOpacity>
                  </View>

                  <View>
                    <Text style={styles.titre}>Podcasts</Text>
                  </View>

                  <TouchableOpacity style={styles.containers} >
                    <Text style={styles.datetext2}>Podcasts</Text>
                  </TouchableOpacity>

                  <View>
                    <Text style={styles.titre}>Videos</Text>
                  </View>

                  <TouchableOpacity style={styles.containers} >
                    <Text style={styles.datetext2}>Videos</Text>
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
    paddingBottom: 1, // Modifier selon votre besoin
  },
  container: {
    flex: 1,
    left: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  h1:{
    marginTop: windowHeight * 0.05,
    fontSize: windowHeight * 0.04,
    marginLeft: windowHeight * 0.02,
    marginBottom: windowHeight * -0.28,
    fontWeight: 'bold',
    color : "#008080",
  },
  containers:{
    width: windowHeight * 0.43,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.02,
    marginLeft: windowHeight * 0.02,
    backgroundColor: '#E3FEF7',
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
    marginTop: windowHeight * 0.01,
    fontSize: windowHeight * 0.02,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  icons2:{
    marginTop: windowHeight * 0.03,
    width: windowHeight * 0.05,
    height: windowHeight * 0.05,
  },
  containers2:{
    width: windowHeight * 0.19,
    height: windowHeight * 0.2,
    marginTop: windowHeight * 0.1,
    marginLeft: windowWidth * -0.27,
    backgroundColor: "#007CB0",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers3:{
    width: windowHeight * 0.19,
    height: windowHeight * 0.31,
    marginTop: windowHeight * -0.22,
    marginLeft: windowWidth * 0.5,
    backgroundColor: "#26C4EC",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers4:{
    width: windowHeight * 0.19,
    height: windowHeight * 0.3,
    marginTop: windowHeight * -0.1,
    marginLeft: windowWidth * 0.062,
    backgroundColor: "#008E8E",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers5:{
    width: windowHeight * 0.19,
    height: windowHeight * 0.19,
    marginTop: windowHeight * 0.01,
    marginLeft: windowWidth * 0.0,
    backgroundColor: "#6050DC",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containerVideo:{
    marginTop: windowWidth * 0.6,
    marginLeft: windowWidth * 0.01,
    width: windowWidth * 1,
    height: windowWidth * 0.5,
    borderRadius:20,
    overflow: 'hidden',
  },
  titre:{
    top: windowWidth * 0.03,
    fontSize: windowWidth * 0.1,
    left: windowWidth * 0.07,
  },
  titre2:{
    top: windowWidth * 0.03,
    fontSize: windowWidth * 0.05,
    left: windowWidth * 0.01,
  },
  rouletteContainer: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    top: windowHeight * 0.2,
    left: windowHeight * 0.2,
    marginBottom: windowHeight * 0.38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    borderRadius: windowWidth * 0.28 / 2,
    backgroundColor: '#008080',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotateButtonText: {
    left: windowWidth * 0.35,
    top: windowWidth * 0.05,
    fontSize: windowWidth * 0.07,
    borderWidth: 2, // Ajout de la largeur de la bordure
    borderColor: 'red', // Couleur de la bordure
    opacity: 1,
    width: windowWidth * 0.3,
    paddingLeft: windowWidth * 0.02,
    marginBottom: windowWidth * 0.08,
  },
  
});

export default Learning;
