import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Physical = () => {

  const navigation = useNavigation();

  const handleParagraph13 = () => {
    navigation.navigate('ParagraphThirteen');
  }

  const handleParagraph14 = () => {
    navigation.navigate('ParagraphFourteen');
  }

  const handleParagraph15 = () => {
    navigation.navigate('ParagraphFifteen');
  }

  const handleParagraph16 = () => {
    navigation.navigate('ParagraphSixteen');
  }


    return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Physical well-being</Text>
          <View style={styles.containerRow}>

            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph13()}>
              <ImageBackground source={require('../../../images/p13.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>How to Nurture and Maintain Your Mental and Physical Health</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph14()}>
              <ImageBackground source={require('../../../images/p14.jpg')} style={styles.icons2}>  
                <Text style={styles.datetext2}>4 Gentle Stretching Exercises to Prevent Neck and Back Pain</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph15()}>
              <ImageBackground source={require('../../../images/p15.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>5 Ways to Achieve Happiness Through Yoga</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph16()}>
              <ImageBackground source={require('../../../images/p16.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>The nature of Psychosomatic Illnesses</Text>
              </ImageBackground>
            </TouchableOpacity>
          
          </View>
        </View>        
      </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  h1:{
    marginTop: windowHeight * -0.2,
    fontSize: windowHeight * 0.07,
    marginLeft: windowHeight * 0.04,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "#6050DC",
  },
  containers:{
    width: windowHeight * 0.25,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.15,
    backgroundColor: '#000',
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
    fontSize: windowHeight * 0.02,
    paddingTop: windowHeight * 0.07,
    fontWeight: 'bold',
    color: 'white',
  },
  icons2:{
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * 0.1,
    left: windowHeight * -0.04,
    width: windowHeight * 0.45,
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
});

export default Physical ;
