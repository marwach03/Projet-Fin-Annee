import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphFour = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>3 Ways to reset your mental health</Text>
                    <Image source={require('../../../images/p4.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Attitudes towards the state of mental health over the last few years have changed a lot, and 2021 is no exception. As a result of the COVID-19 pandemic, there has been more focus on our states of mind than ever before. {'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        If you feel you've been struggling with your mental health, this week's guest writer, George Newton, shares some essential ways to bring yourself back down to the ground and reset how you're feeling. {'\n'}
                    </Text>

                    <Text style={styles.h2}> 1 - Engage in light exercise regularly</Text>
                    <Text style={styles.text1}>
                      Lockdown restrictions and being forced to stay at home have made it more difficult for many of us to stay active over the last year. However, studies consistently show that getting outdoors and moving our bodies does wonder for our mental state. Whether it's running, walking, or taking part in a workout or yoga session, keeping our minds and bodies active is a simple way to nurture a healthy state of mind. {'\n'}
                    </Text>

                    <Text style={styles.text1}>
                      Consider allocating a bit of time into your calendar each week to leave your phone at home and take yourself for a walk around the block - prioritizing this time to get some fresh air, enjoy gentle exercise and give your mind a rest from work, family and social commitments will enable you to find some headspace to focus on what you need. {'\n'}
                    </Text>

                    <Text style={styles.h2}>2 - Find the right social balance for you</Text>
                    <Text style={styles.text1}>
                      Unfortunately, staying at home more has meant we've become less connected with our friends and family, and more of us are feeling the loneliness that can come from this. However, while social media exists, it's not a proper substitute for that all-important human connection and thankfully with restrictions starting to ease, this enables us to reach out to those we care about in person, for the first time in a long time. {'\n'}
                    </Text>

                    <Text style={styles.text1}>
                      While we've been so used to connecting with others online during the pandemic, be mindful of striking the right social balance for you, in terms of ensuring you're getting enough time for your own self-care, connecting with people you care about online and in-person where possible - it's also important to be aware of your digital technology habits. If you're feeling lonely, try to manage these emotions by speaking to someone you trust, or reaching out to a professional who can help you.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                      It's important to create healthy boundaries that empower you to have time to yourself while spending time with people you care about.{'\n'}
                    </Text>

                    <Text style={styles.h2}>3 - Spend your downtime doing things you love</Text>
                    <Text style={styles.text1}>
                      With some restrictions on travel and working from home still in place, why not use the time to learn something new or practice a hobby you love?{'\n'}            
                    </Text>

                    <Text style={styles.text1}>
                      It could be something therapeutic like drawing or getting creative, reading, or writing down your thoughts and feelings in a journal. If you aren't feeling too creative, try something practical like organizing your cupboards or clearing out your wardrobe - this can feel rather therapeutic and helps to create a sense of cleansing, removing items that no longer serve you.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                      Dedicating even a small amount of time to learning a new skill, organizing, or doing something more relaxing like reading will keep your brain engaged while allowing you to switch off from any worries in your work, personal life, or in the wider news.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Be kind to yourself</Text>
                    <Text style={styles.text1}>
                      Everyone deals with stresses and worries in different ways and in uncertain times, there is no right or wrong way to feel. During unsettling times in particular, it's so important to take a step back and check-in with yourself. Try not to feel like you have to keep up with what everyone else is doing and instead, do as much or as little as you are comfortable with go at peace that works for you.{'\n'}
                   </Text>

                   <Text style={styles.text1}>
                      If you're feeling fatigued with everything going on in the world, then consider taking a positive step towards focusing on resetting your mind. I hope the steps outlined above can help you to get started.
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
});

export default ParagraphFour;
