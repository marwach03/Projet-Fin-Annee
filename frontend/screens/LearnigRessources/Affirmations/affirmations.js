import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Affirmations = () => {

  const navigation = useNavigation();
    
  const handleMotivation = () => {
    navigation.navigate('Motivation');
  }

  const handleFocussing = () => {
    navigation.navigate('Focussing');
  }

  const handleControlStress = () => {
    navigation.navigate('ControlStress');
  }

  const handlePositivity = () => {
    navigation.navigate('Positivity');
  }

    return (
      <View style={styles.container}>

        <Text style={styles.h1}>CHOOSE YOUR AFFIRMATION THEME</Text>

        <TouchableOpacity style={styles.containers} onPress={() => handleMotivation()}>
            <Text style={styles.datetext2}>Motivation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containers} onPress={() => handleFocussing()}>
            <Text style={styles.datetext2}>focussing</Text>
        </TouchableOpacity>    

        <TouchableOpacity style={styles.containers} onPress={() => handleControlStress()}>
            <Text style={styles.datetext2}>Control stress</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.containers} onPress={() => handlePositivity()}>
            <Text style={styles.datetext2}>Positivity</Text>
        </TouchableOpacity>
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
    backgroundColor:'#344C64',
  },
  cont:{
    width: windowHeight * 0.5,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.1,
    marginBottom: -windowHeight * 0.01,
    marginLeft: windowHeight * 0.02,
  },
  h1:{
    marginTop: windowHeight * -0.01,
    fontSize: windowHeight * 0.027,
    marginLeft: windowHeight * 0.01,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "white",
  },
  containers:{
    width: windowHeight * 0.5,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.05,
    marginBottom: -windowHeight * 0.01,
    marginLeft: windowHeight * 0.02,
    borderBottomWidth:2,
    borderColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowHeight * 0.015,
  },
  datetext2:{
    fontSize: windowHeight * 0.028,
    fontWeight: 'bold',
  },
});

export default Affirmations;
