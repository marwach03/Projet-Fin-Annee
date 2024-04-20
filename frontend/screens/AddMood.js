import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import {firebase} from '../config';
import { useNavigation } from '@react-navigation/native';

const AddMood = ({ navigation }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();



  return (
    <View>
        <Text style={styles.date}>{ currentDate.getDay() } {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text1:{
      color:'black',
      fontWeight: 'bold',
      marginTop:200,
      marginLeft: 50,
    },
    date:{
        
    }
  });

export default AddMood;