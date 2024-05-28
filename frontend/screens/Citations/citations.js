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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>

          <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Quotes</Text>
            <View style={styles.containerRow}>
            
                  <TouchableOpacity style={styles.containers1} onPress={() => handleQuotesTravail()}>
                    <Text style={styles.datetext2}>Work</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers2} onPress={() => handleQuotesSucces()}>
                    <Text style={styles.datetext2}>Succes</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers3} onPress={() => handleQuotesFriend()}>
                    <Text style={styles.datetext2}>Friend-ship</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers4} onPress={() => handleQuotesStress()}>
                    <Text style={styles.datetext2}>Stress</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers5} onPress={() => handleQuotesMothers()}>
                    <Text style={styles.datetext2}>For mothers</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.containers6} onPress={() => handleQuotesDeparts()}>
                    <Text style={styles.datetext2}>New departs</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1:{
    marginTop: windowWidth * 0.1,
    fontSize: windowHeight * 0.07,
    marginLeft: windowHeight * 0.15,
    fontWeight: 'bold',
    color : "#FAA2AA",
  },
  containers1:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#E3FEF7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers2:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#F2BBC8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers3:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#B8D9E3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers4:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#FFA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers5:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#FFA477',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containers6:{
    width: windowHeight * 0.4,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * -0.05,
    marginLeft: windowHeight * 0.06,
    backgroundColor: '#B7D2B6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 10,
    margin: windowHeight * 0.015,
  },
  containerRow: {
    top: windowHeight * -0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  datetext2:{
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 70, // Modifier selon votre besoin
  },
});

export default Citation;
