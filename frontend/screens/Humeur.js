import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {firebase} from '../config';

const Humeur = () => {
  return (
    <View style={styles.container}>
      <Text>WELCOME TO Humeur</Text>
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
export default Humeur;