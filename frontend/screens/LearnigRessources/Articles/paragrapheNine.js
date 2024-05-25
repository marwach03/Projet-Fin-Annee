import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphNine = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>5 Ways to Overcome Procrastination and Improve Your Productivity</Text>
                    <Image source={require('../../../images/p10.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        Procrastination is a common struggle for many people, and it can be a significant barrier to productivity. When we procrastinate, we delay important tasks and activities, which can ultimately lead to stress and anxiety. Fortunately, there are several ways to overcome it and be more productive. We've put together 5 methods that can help you deal with procrastination. To help you apply them in practice, we've based them on a model situation of preparing for a challenging exam:{'\n'}
                    </Text>

                    <Text style={styles.h2}>1. Break tasks into smaller chunks</Text>
                    <Text style={styles.text1}>
                        When we face a large task, it can feel overwhelming and tempt us to procrastinate. Breaking the big task down into smaller, more manageable chunks can make it less daunting and more achievable. Start with the most critical parts and then work your way down.{'\n'}
                    </Text>
                    <Text style={styles.gras}>EXAMPLE:</Text>
                    <Text style={styles.text2}>
                        Rather than trying to study everything at once, break down your material into smaller sections. Start with the core concepts of the topic and once you've understood them, continue to the more marginal sections step by step.{'\n'}
                    </Text>

                    <Text style={styles.h2}>2. Set achievable goals</Text>
                    <Text style={styles.text1}>
                        It's essential to set realistic goals and deadlines. Avoid overcommitting and creating unrealistic expectations, as those can lead to procrastination. Set achievable goals that can be accomplished in a reasonable amount of time.{'\n'}
                    </Text>
                    <Text style={styles.gras}>EXAMPLE:</Text>
                    <Text style={styles.text2}>
                        Set a goal to complete a specific amount of material each day. For example, aim to read two chapters or 20 pages a day while taking proper notes. Make sure your goal is challenging but achievable without too much stress.{'\n'}
                    </Text>

                    <Text style={styles.h2}>3. Make a schedule</Text>
                    <Text style={styles.text1}>
                        A proper schedule can help you stay organized and focused. Plan your day, week, or month in advance. Don't forget to include breaks and leisure activities in your plan. It will help you stay focused when needed and relax properly when it's time to rest. You can use the Pomodoro technique to break work into shorter intervals separated by small breaks. There are also many focus-oriented apps you can try out. Stick to your schedule as much as possible, as it will help you establish a routine and stay on track.{'\n'}
                    </Text>
                    <Text style={styles.gras}>EXAMPLE:</Text>
                    <Text style={styles.text2}>
                        Create a study schedule that allows for frequent breaks and time for leisure activities. Work for a set amount of time, say 25 minutes, and then take a 5-minute break even if you don't feel tired yet. Block out specific times every day for studying and stick to the schedule as much as you can.{'\n'}
                    </Text>

                    <Text style={styles.h2}>4. Eliminate distractions</Text>
                    <Text style={styles.text1}>
                        Social media, television, and other distracting factors can significantly affect productivity. Try to remove these distractions from your work environment or set up a specific time to use them. Limiting distractions will help you focus on the task at hand.{'\n'}
                    </Text>
                    <Text style={styles.gras}>EXAMPLE:</Text>
                    <Text style={styles.text2}>
                        Turn off your phone or put it on silent mode while studying. Avoid checking social media or doing other distracting activities during your study time.{'\n'}
                    </Text>

                    <Text style={styles.h2}>5. Find a reliable partner</Text>
                    <Text style={styles.text1}>
                        Sometimes, having someone to keep an eye on our schedule can be beneficial. Share your goals and deadlines with a friend, family member, or colleague, and ask them to check in on your progress regularly. Having a person to answer to can help you keep up with your plan.{'\n'}
                    </Text>
                    <Text style={styles.gras}>EXAMPLE:</Text>
                    <Text style={styles.text2}>
                        Ask a friend or classmate to be your study partner and to check if you're completing your daily goals. You can also schedule regular check-ins with a teacher or tutor to stay on track.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        In conclusion, overcoming procrastination and improving productivity is not something unachievable. And remember, progress - not perfection - is the key to success. Don't forget to take care of yourself and take breaks too.{'\n'}
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

export default ParagraphNine;
