import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphTen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>Mastering Your Day: A Step-By-Step Guide to Effective Daily Planning</Text>
                    <Image source={require('../../../images/p10.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        No matter if you have a lot on your plate or you want to avoid procrastination, it all starts with effective daily planning. By taking the time to plan out your day, you can actually get a lot of time back, increase productivity, reduce stress, and ensure that you are making progress towards your goals. In this step-by-step guide, we will explore the key components of effective daily planning.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Step 1: Set Goals</Text>
                    <Text style={styles.text1}>
                       The first Step in effective daily planning is to set goals. Without clear goals, it can be difficult to prioritize tasks for the day in the main categories. This could include work tasks, personal projects, or other important commitments.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Step 2: Make a To-Do List</Text>
                    <Text style={styles.text1}>
                        Once you have identified your goals, create a to-do list for the day. Write down all of the tasks that you need to complete and prioritize them based on importance and urgency. You can also divide the tasks into categories such as work, school, sports or friends, to help you better maintain balance in your schedule.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Step 3: schedule Your Day</Text>
                    <Text style={styles.text1}>
                        Now that you have a to-do list, it's time to schedule your day. Block off time in your calendar for each task, taking into account your energy levels and the amount of time each task will take. Don't forget to also schedule breaks and time to rest.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Step 4: Stay Flexible</Text>
                    <Text style={styles.text1}>
                        Even with the best planning, unexpected events can arise throughout the day. It's important to stay flexible and be willing to adjust your plans as needed. This could involve re-prioritizing tasks, rescheduling blocks of time, or delegating tasks to others.
                        By following these steps, you can master your day and make the most of your time. Effective daily planning is a skill that can be developed over time. Moreover, what works for one may not work for another. Be patient and find a system that works for you.
                        Step.{'\n'}
                    </Text>
                    
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
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 140, // Modifier selon votre besoin
    backgroundColor:'black',
  },
  h1:{
    marginTop: windowHeight * 0.07,
    fontSize: windowHeight * 0.04,
    marginLeft: windowHeight * 0.03,
    marginBottom: windowHeight * 0.02,
    fontWeight: 'bold',
    color : "white",
  },
  h2:{
    fontSize: windowHeight * 0.022,
    fontWeight: 'bold',
    color : "white",
    marginLeft: windowHeight * 0.02,
    marginTop: windowHeight * 0.03,
  },
  text1:{
    fontSize: windowHeight * 0.022,
    color : "white",
    marginLeft: windowHeight * 0.03,
  },
  icons2:{
    marginTop: windowHeight * 0.001,
    width: windowHeight * 0.48,
    height: windowHeight * 0.3,
    marginLeft: windowHeight * 0.02,
    marginBottom: windowHeight * 0.04,
    borderRadius:9,
  },
  text2:{
    fontSize: windowHeight * 0.022,
    color : "white",
    marginLeft: windowHeight * 0.035,
  },
  gras:{
    fontWeight:'bold',
    color:'white',
    left: 30,
    fontSize: 15,
  },
});

export default ParagraphTen;
