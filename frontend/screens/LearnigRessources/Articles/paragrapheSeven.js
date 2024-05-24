import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphSeven = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>5 Common myths about therapy</Text>
                    <Image source={require('../../../images/p7.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        In our society, it's completely normal to go to a doctor when we're feeling physically sick - however, we don't see that the same is true about seeing a psychotherapist when we feel low. One of the main reasons why people don't perceive therapy as a normal thing is that they have received very distorted and false information about it. So, what are common myths about psychotherapy? Let's find out!{'\n'}
                    </Text>

                    <Text style={styles.h2}>Therapy is just for people with severe mental illnesses</Text>
                    <Text style={styles.text1}>
                        Many people think that you can't see the therapist unless you have hallucinations, suicidal thoughts, or a diagnosed mental illness. That's not true! As it's written in doctor Robinson's article, therapy clients often want to have better relationships, manage their work-life balance, have anxieties, or they're going through hard situations that could happen to anyone. Some people see therapists because they want to improve their productivity and focus on personal self-growth.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Therapy is just talking about my daddy-issues</Text>
                    <Text style={styles.text1}>
                        Many people think that during the therapy you're just talking about a relationship with your parents and looking for problems in your childhood. The truth is that if you don't want to talk about your childhood, you just don't have to - therapists can't and won't force you to talk about it. You are the one who explains what's bothering you, and you are the one defining what you need.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Therapy costs a fortune</Text>
                    <Text style={styles.text1}>
                        Keep in mind that you don't need to spend all your income on therapy sessions. There are a lot of good therapists still under supervision, because they must have practise and experience in order to get a license. These therapists often offer sessions for a lower price, but they are still at a high, professional level. Many health insurance companies also will cover a fee for therapy sessions, so it's worth checking with your provider!{'\n'}            
                    </Text>
                    
                    <Text style={styles.h2}>Psychotherapist will only put me on medication</Text>
                    <Text style={styles.text1}>
                        There is a significant difference between psychotherapists and psychiatrists. As you can read in Dr. Robinson's article mentioned above, psychotherapists can't prescribe you any medication. Psychiatrists are those who prescribe pills for mental health issues.{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>Psychotherapist will tell me what to do</Text>
                    <Text style={styles.text1}>
                        Sometimes people think that therapists will tell them exactly what they need to do, how they should think, or what they should say to other people. This is a myth. Yes, there are some cases when therapists are direct and tell you what to do, but that usually happens in a case of emergency, when there's a reason to be concerned about your or someone else's safety. According to Dr. Glasofer's article, 'psychotherapists can help you determine what you want and why.' Basically, a psychotherapist is more like a guide - they reflect your feelings, can help you realise you have other options. or remind you what your main focus is.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Keep in mind that asking for help doesn't mean you're weak, nor does going to therapy... It means you're aware of your problem and you want to improve your life.{'\n'}
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

export default ParagraphSeven;
