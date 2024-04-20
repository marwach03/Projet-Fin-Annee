import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import SwipeGesture from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

const NeutralEmoji = () => <Text style={styles.emoji}>{' 😐 '}</Text>;

const Humeur = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
    setSelectedDate(null); // Reset selected date when changing month
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysOfMonth = [];
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysOfMonth.push(i);
  }
  const firstDayPosition = firstDayOfMonth.getDay();
  for (let i = 0; i < firstDayPosition; i++) {
    daysOfMonth.unshift('');
  }
  const totalDaysInCalendar = 42;
  while (daysOfMonth.length < totalDaysInCalendar) {
    daysOfMonth.push('');
  }

  const calendarGrid = [];
  for (let i = 0; i < daysOfMonth.length; i += 7) {
    const week = daysOfMonth.slice(i, i + 7);
    calendarGrid.push(
      <View key={i} style={styles.weekRow}>
        {week.map((day, index) => (
          <TouchableOpacity key={index} onPress={() => handleDateClick(day)} style={[styles.dayCell, day === selectedDate ? styles.selectedDay : null]}>
            <Text style={[styles.dayText, day === todayDate && currentDate.getMonth() === todayMonth && currentDate.getFullYear() === todayYear ? styles.todayText : null]}>
              {day}
            </Text>
            {day !== '' && <NeutralEmoji />}
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  const navAddMood = () => {
      navigation.navigate('AddMood');
  };

  const swipeConfig = {
    velocityThreshold: 0.2 ,
    directionalOffsetThreshold: 70,
  };

  const onSwipeLeft = () => changeMonth(1);
  const onSwipeRight = () => changeMonth(-1);

  return (
    <View>
      <Image source={require('../images/logo.png')} style={styles.image} />
        <Text style={styles.title}>Mood Board</Text>

        <View>
          <SwipeGesture
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            config={swipeConfig}
            style={styles.container}
          >


              <ImageBackground source={require('../images/marbre.jpg')}  style={styles.calendar}>
                <View style={styles.navigation}>

                  <TouchableOpacity onPress={() => changeMonth(-1)}>
                    <Text style={styles.navigationText}>{'<'}</Text>
                  </TouchableOpacity>

                  <Text style={styles.navigationText}>
                    {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                  </Text>

                  <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Text style={styles.navigationText}>{'>'}</Text>
                  </TouchableOpacity>

                  </View>

                  <View style={styles.daysOfWeekRow}>
                  {daysOfWeek.map((day) => (
                    <Text key={day} style={styles.dayOfWeekText}>
                      {day}
                    </Text>
                  ))}
                  </View>
                  {calendarGrid}
              </ImageBackground>

          </SwipeGesture>
        </View>

        <View >
        <ImageBackground source={require('../images/poudre.jpg')} style={styles.container2}>
            <Text style={styles.datetext}>{ currentDate.getDay() } {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</Text>
        </ImageBackground>
        </View>

        <View style={styles.line}></View>

        <ImageBackground source={require('../images/marbre.jpg')} style={styles.container3}>
          <TouchableOpacity onPress={navAddMood}>
            <Text style={styles.datetext2}>Add My Mood</Text>
          </TouchableOpacity>
        </ImageBackground>
    </View>

    
    
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  calendar:{
    borderRadius: 40,
    overflow: 'hidden',
  },
  container: {
    marginTop: windowHeight * 0.19,
    marginLeft: windowHeight * 0.007,
    width: '97%',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#000',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: windowHeight * 0.01,
    paddingHorizontal: windowHeight * 0.03,
  },
  navigationText: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  },
  daysOfWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayOfWeekText: {
    fontSize: windowWidth * 0.04,
    marginBottom: windowHeight * 0.005,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayCell: {
    alignItems: 'center',
    width: '14.28%',
    paddingVertical: windowHeight * 0.005,
  },
  dayText: {
    fontSize: windowWidth * 0.03,
    marginBottom: windowHeight * 0.003,
  },
  emoji: {
    fontSize: windowHeight * 0.025,
    marginTop: windowHeight * 0.003,
    color: '#4caf50',
  },
  selectedDay: {
    backgroundColor:'#008080',
    borderRadius:25,
  },
  todayText: {
    fontWeight: 'bold', // Style for today's date
    fontWeight:900,
    fontSize: windowHeight * 0.017,
  },
  image: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    marginBottom: windowWidth * 0.01,
    marginTop:windowHeight * 0.06,
    marginLeft: windowHeight * 0.02,
  },
  title: {
    fontSize: windowWidth * 0.09,
    marginTop: windowWidth * -0.17,
    marginLeft: windowHeight * 0.11,
    marginBottom: windowHeight * -0.15,
    fontWeight: 'bold',
    color: '#008080',
  },
  container2:{
    marginTop: windowWidth * 0.15,
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.8,
    height: windowWidth * 0.3,
    borderRadius:15,
    overflow: 'hidden',
  },
  datetext:{
    color:'white',
    textAlign: 'center',
    fontSize:windowHeight * 0.028,
    width: windowWidth * 0.15,
    marginTop: windowWidth * 0.04,
    marginLeft: windowWidth * 0.04,
  },
  line: {
    marginTop: -windowHeight * 0.12,
    marginLeft: windowHeight * 0.15,
    width: windowHeight * 0.002, 
    height: windowHeight * 0.1, 
    backgroundColor: 'black', 
  },
  container3:{
    marginTop: -windowHeight * 0.07,
    marginLeft: windowHeight * 0.18,
    width: windowHeight * 0.22,
    height: windowHeight * 0.05,
    borderRadius: 25,
    overflow: 'hidden',
  },
  datetext2:{
    color:'black',
    fontSize:windowHeight * 0.025,
    width: windowWidth * 0.5,
    marginTop: windowWidth * 0.01,
    marginLeft: windowWidth * 0.05,
  }
});

export default Humeur;
