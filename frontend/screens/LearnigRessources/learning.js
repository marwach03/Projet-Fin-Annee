import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Learning = () => {
    const navigation = useNavigation();
    
    const handleArticles= () => {
        navigation.navigate('Articles');
    }

    return (
      <View style={styles.container}>

        <View style={styles.bigcontainer}>
          <Text style={styles.h1}>Learning ressources</Text>
          <View style={styles.containerRow}>
            <TouchableOpacity style={styles.containers} onPress={() => handleArticles()}>
              <Text style={styles.datetext2}>Articles</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} >
              <Text style={styles.datetext2}>Podcasts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} >
              <Text style={styles.datetext2}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} >
              <Text style={styles.datetext2}>Affiramtions</Text>
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
    fontSize: windowHeight * 0.04,
    marginLeft: windowHeight * 0.06,
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
    flexDirection: 'column',
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

export default Learning;
