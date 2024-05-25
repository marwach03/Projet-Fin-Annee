import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphFifteen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>5 Ways to Achieve Happiness Through Yoga</Text>
                    <Image source={require('../../../images/p15.jpg')} style={styles.icons2} />

                    <Text style={styles.h2}>There is a power in different postures{'\n'}</Text>

                    <Text style={styles.text1}>
                        While some of us avoid physical workouts as practising a single activity sounds monotonous, the beauty of yoga is in the many different postures. There are so many to explore and no yoga session need ever be the same as you can try new variations each time. Postures range from beginner to advanced, and even power yoga, and they all help you stay fit and healthy while allowing you to meditate at the same time.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Practising poses such as "downward facing dog" can help to improve your blood circulation which increases energy levels, while gentle poses like "happy baby" can help slow down your thoughts and work to soothe feelings of anxiety.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Yoga positively affects the brain{'\n'}</Text>

                    <Text style={styles.text1}>
                        Practising yoga every day can increase your happiness levels as the GABA (Gamma-aminobutyric) levels of your brain rise after an hour of exercise. How does this rise of GABA help?{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Well, low GABA levels are related to feelings of anxiety and depression in humans, which both have a challenging impact on our emotional health. This means that an hour of yoga can improve your brain health which lifts your mood, helping you to achieve happiness.{'\n'}
                    </Text>

                    <Text style={styles.h2}>The benefits are long-term{'\n'}</Text>

                    <Text style={styles.text1}>
                        Another benefit to yoga is that you can continue to adapt your practice throughout your life.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Research indicates that people who practice yoga for years experience higher levels of happiness and overall health, and regular practice can even improve your lifespan! Yoga can also curb several issues like anger, unknown fatigue, and distress with its healing components, and such biochemical changes can have a profound and lasting impact on your overall happiness.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Yoga supports our breathing{'\n'}</Text>

                    <Text style={styles.text1}>
                        There are many reasons why breathing exercises throughout yoga is beneficial. It can strengthen your practice, help to avoid injury and breathing exercises are also good for happiness.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When you practise yoga and breathing exercises, this creates a heightened state of relaxation, which ultimately can help to lower stress levels and improve your mood.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        Yoga strengthens the mind-body connection{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Practising yoga is known to establish a sync between your mind and body, helping you to create a positive and strong bond with your inner self. This supports the idea that the body's processes can influence the mind.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Therefore, when you are practising yoga and the body is still, focused and relaxed, this will have a positive influence on your mental wellbeing.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Building a positive attitude through yoga Practising yoga for your mental wellbeing can not only improve your mood and happiness, but it can also help keep feelings of anxiety, depression and stress away. Yoga also inspires a positive attitude by teaching you to practise gratitude for what you have.{'\n'}
                    </Text>              

                    <Text style={styles.text1}>
                        So, why wait for anyone or anything to make you happy? By practising yoga, you can redefine your mental wellbeing and encourage happier views, thoughts, and a more proactive attitude.{'\n'}
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

export default ParagraphFifteen;
