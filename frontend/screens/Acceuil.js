import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {firebase} from '../config';

const Acceuil = () => {

  return (
    <View style={styles.container}>
      <Text>WELCOME TO ACCEUIL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Acceuil;