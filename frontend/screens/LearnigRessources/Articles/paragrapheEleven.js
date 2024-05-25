import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphEleven = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>Breaking Through Limiting Beliefs: How to Overcome Mental Barriers and Set Yourself Free</Text>
                    <Image source={require('../../../images/p11.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        Limiting beliefs are thoughts or beliefs that we hold about ourselves or the world that hinder our growth and potential. They are self-imposed limitations that we place on ourselves, often without even realizing it. These beliefs can be based on past experiences, societal conditioning, or the opinions of others. Limiting beliefs can hold us back from pursuing our goals, trying new things, or taking risks. They can look like this:{'\n'}
                    </Text>
                    
                    <Text style={styles.text2}>
                        • 'I'm not smart enough to do that.'{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • 'I'm not attractive enough to find love.' {'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • 'I'm too old to start something new.'{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • 'I don't have enough experience to be successful.'{'\n'}
                    </Text>

                    <Text style={styles.h2}>Recognizing a limiting belief</Text>
                    <Text style={styles.text1}>
                        Did you recognize yourself in any of these sentences above, or can you think of another limiting belief that you're holding about yourself? Don't worry, you've just taken the first and hardest step to overcome this limiting belief, which is to become aware of it. Once you recognize the beliefs that are holding you back, you can start to challenge them and replace them with more empowering thoughts. This can help you to break free from the constraints of your own self-imposed limitations and live up to your full potential.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Challenging the limitation</Text>
                    <Text style={styles.text1}>
                        Once you have identified the belief, try to find arguments why the belief is not true. Consider the very first example we gave you: 'I'm not smart enough to do that'. In this case, you could think of things you have done before and you were smart enough to do them.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Advising yourself is like advising a friend</Text>
                    <Text style={styles.text1}>
                        We will explain this again in our example. If your friend told you that he/she is not good enough to do something, what advice would you give him/her? You'd probably tell your friend to try, and that the result does not only depend on how smart he/she is.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Set an alternative belief</Text>
                    <Text style={styles.text1}>
                        Find a more open minded alternative to your original belief. Try to reframe the thought you're holding about yourself to a more flexible version. For example: I'm doing my best to move forward.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Recapitulation</Text>

                    <Text style={styles.text2}>
                        1. Recognize a belief that is limiting you: I'm not good enough to do that.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        2. Challenge the limiting belief: I was good enough to write that essay last week.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        3. Speak to yourself like to a friend: Don't be that hard on yourself. You can't judge your whole personality according to one task.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        4. Replace the original belief with an alternative: I'm doing my best to move forward.{'\n'}
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

export default ParagraphEleven;
