import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphTwelve = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>The Power of Using Your Intuition to make Decisions</Text>
                    <Image source={require('../../../images/p12.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        "I know it's right, don't I?".{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        We all know that feeling - when faced with a decision, big or small, we just don't know what's best to do. We go back and forth, weigh pros and cons perhaps, or even avoid the decision by asking others opinions in the name of research.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        What's the problem here? Well I think it's a lot to do with trust - trusting ourselves and our ability to chose the best path.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        If you work alone, are a freelancer, entrepreneur, business owner or perhaps lead a team, it can be tough to make decisions. Even just having the knowledge that the decisions are down to you can lead to overwhelm, a crippling feeling even. So, why can it feel so tough to trust ourselves?{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Using your gut and intuition comes from the idea of making decisions instinctively and without conscious reasoning. So this would mean no pros and cons lists, no over-analysing, going back and forth, etc. However, if you are finding it difficult to make the decision from a place of intuition, you could ask yourself - why do you feel the decision is so difficult?{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        What blocks a decision being made can be a number of factors, including the fear of making a mistake, letting others down or putting pressure on yourself. When coming from a place of fear, it can feel hard to be in tune with yourself and what actually "sits right" with you.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So many things demand our attention these days, especially if you are a business owner facing many different pulls, thoughts and demands on your attention. However, I believe the key to discovering your own true voice is to take time to work out what your intuition is really telling you. Being able to separate this from the other elements, which could simply be competing noise, is the main skill to develop.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So, how do you hone in on your gut intuition?{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        One of the things that can help is being in tune with your body, to feel how things sit with you. So much of our inner knowledge and guidance toward what is right for us and our business comes from inside. After all, the values of your business come from you.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So let's go internal and try out these exercises:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        1.  Close your eyes and sit with yourself. Imagine your attention turning inward, and breathe deeply for a few minutes.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        2. How does it feel when you start to imagine the situation you find challenging to make a decision about. Is there discomfort?{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        3. Explore where this is in your body and ask yourself "what sits best for me?" What would make it easier?{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        If you're not sure, it's possible that fear could be standing in the way, so take time to explore what these issues are around making your decision.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Now, get a pen and paper:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        1. Ask yourself: Is it purely practical logistics you're working out? Is there a lot at stake here? Pressure? Responsibility?{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        2. Be mindful of how you're viewing the decision itself: What does it mean to you? What does it mean if you get the decision "wrong"? There, could lie the deeper fear.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        3. Write down what fears come to mind.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        These questions are an essential component for working out the blocks you're experiencing and learning to trust yourself to make decisions that feel right for you. Once you have a hold on what is preventing you, you can better understand how to listen to yourself and unblock your intuition.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Ultimately the entrepreneur journey isn't about making the right decisions, its about making decisions that sit right with you. It's all a journey, mistakes are allowed
                        encouraged even! It really is how we learn. Failing is simply one option not working out how you'd expected or had hoped, remember that there are many other options to choose from.{'\n'}
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

export default ParagraphTwelve;
