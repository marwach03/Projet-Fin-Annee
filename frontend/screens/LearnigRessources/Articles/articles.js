import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Articles = () => {

  const navigation = useNavigation();
    
  const handleEmotional= () => {
      navigation.navigate('Emotional');
  }

  const handlePsychology = () => {
    navigation.navigate('Psychology');
  }

    return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Articles</Text>
          <View style={styles.containerRow}>
            <TouchableOpacity style={styles.containers} onPress={() => handleEmotional()}>
              <Text style={styles.datetext2}>Emotional well-being</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handlePsychology()}>
              <Text style={styles.datetext2}>Psychology</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} >
              <Text style={styles.datetext2}>Productivity and growth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} >
              <Text style={styles.datetext2}>Physical well-being</Text>
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
    marginLeft: windowHeight * 0.13,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "white",
  },
  containers:{
    width: windowHeight * 0.46,
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * -0.05,
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
    marginTop: windowHeight * -0,
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

export default Articles;
