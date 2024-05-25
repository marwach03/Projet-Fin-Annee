import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Productivity = () => {

  const navigation = useNavigation();

  const handleParagraph9 = () => {
    navigation.navigate('ParagraphNine');
  }

  const handleParagraph10 = () => {
    navigation.navigate('ParagraphTen');
  }

  const handleParagraph11 = () => {
    navigation.navigate('ParagraphEleven');
  }

  const handleParagraph12 = () => {
    navigation.navigate('ParagraphTwelve');
  }


    return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Productivity and growth</Text>
          <View style={styles.containerRow}>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph9()}>
                <Text style={styles.datetext2}>5 Ways to Overcome Procrastination</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph10()}>
                <Text style={styles.datetext2}>Mastering Your Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph11()}>
                <Text style={styles.datetext2}>Breaking Through Limiting Beliefs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => handleParagraph12()}>
                <Text style={styles.datetext2}>The Power Of Using Your Intuition to Make Decisions</Text>
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

export default Productivity;
