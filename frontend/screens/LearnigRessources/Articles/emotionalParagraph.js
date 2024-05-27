import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Emotional = () => {

  const navigation = useNavigation();

  const handleParagraph1 = () => {
    navigation.navigate('ParagraphOne');
  }

  const handleParagraph2 = () => {
    navigation.navigate('ParagraphTwo');
  }

  const handleParagraph3 = () => {
    navigation.navigate('ParagraphThree');
  }

  const handleParagraph4 = () => {
    navigation.navigate('ParagraphFour');
  }
    return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Emotional well-being</Text>     

          <View style={styles.containerRow}>
          
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph1()}>
              <ImageBackground source={require('../../../images/p1.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>Hunger of the heart: food is not just fuel</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph2()}>
              <ImageBackground source={require('../../../images/p2.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>Dealing with grief and loss</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph3()}>
              <ImageBackground source={require('../../../images/p3.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>The best Tech Tools to combat depression </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph4()}>
              <ImageBackground source={require('../../../images/p4.jpg')} style={styles.icons2}>
                <Text style={styles.datetext2}>3 Ways to reset your mental health</Text>
              </ImageBackground>
            </TouchableOpacity>
            
          </View>
        </View>        
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
    backgroundColor:'white',
  },
  h1:{
    marginTop: windowHeight * -0.2,
    fontSize: windowHeight * 0.08,
    marginLeft: windowHeight * 0.04,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "#007CB0",
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

export default Emotional;
