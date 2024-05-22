import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Citation = () => {
  const navigation = useNavigation();

  const handleQuotesTravail = () => {
    navigation.navigate('Work');
  };

  const handleQuotesSucces = () => {
    navigation.navigate('Succes');
  };

  const handleQuotesFriend = () => {
    navigation.navigate('Friend');
  };

  const handleQuotesStress= () => {
    navigation.navigate('Stress');
  };

  const handleQuotesMothers= () => {
    navigation.navigate('Mothers');
  };

  const handleQuotesDeparts= () => {
    navigation.navigate('Departs');
  };

  return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Quotes</Text>
          <View style={styles.containerRow}>
            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesTravail()}>
              <Text style={styles.datetext2}>Work</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesSucces()}>
              <Text style={styles.datetext2}>Succes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesFriend()}>
              <Text style={styles.datetext2}>Friend-ship</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesStress()}>
              <Text style={styles.datetext2}>Stress</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesMothers()}>
              <Text style={styles.datetext2}>For mothers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => handleQuotesDeparts()}>
              <Text style={styles.datetext2}>New departs</Text>
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
    backgroundColor:'#135D66',
  },
  h1:{
    marginTop: windowHeight * -0.02,
    fontSize: windowHeight * 0.07,
    marginLeft: windowHeight * 0.15,
    marginBottom: windowHeight * -0.01,
    fontWeight: 'bold',
    color : "white",
  },
  containers:{
    width: windowHeight * 0.2,
    height: windowHeight * 0.2,
    marginTop: windowHeight * 0.07,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.035,
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

export default Citation;
