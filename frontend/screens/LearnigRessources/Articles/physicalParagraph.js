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
                <Text style={styles.datetext2}>How to Nurture and Maintain Your Mental and Physical Health</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph14()}>
                <Text style={styles.datetext2}>4 Gentle Stretching Exercises to Prevent Neck and Back Pain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph15()}>
                <Text style={styles.datetext2}>5 Ways to Achieve Happiness Through Yoga</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph16()}>
                <Text style={styles.datetext2}>The nature of Psychosomatic Illnesses</Text>
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
    backgroundColor:'black',
  },
  h1:{
    marginTop: windowHeight * -0.02,
    fontSize: windowHeight * 0.07,
    marginLeft: windowHeight * 0.09,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "white",
  },
  containers:{
    width: windowHeight * 0.46,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.03,
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
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
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
});

export default Physical ;
