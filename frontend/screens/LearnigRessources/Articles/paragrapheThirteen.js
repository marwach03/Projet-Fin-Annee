import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphThirteen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>How to Nurture and Maintain Your Mental and Physical Health</Text>
                    <Image source={require('../../../images/p13.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        Looking after our mental health goes hand in hand with looking after our physical health; the two are inextricably linked.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Our thoughts, feelings and behavior can have a significant impact on our physical state, and therefore can positively or negatively affect our overall wellbeing. They are constantly in communication with one another, and it is empowering to see a growing body of research and evidence-based practices that supports this notion of the mind-body connection..{'\n'}
                    </Text>

                    <Text style={styles.h2}>The power of the mind-body connection{'\n'}</Text>

                    <Text style={styles.text1}>
                        When considering our mental and physical health, they are far from separate and there are many associations between the two. Often, poor mental health can lead to physical health issues, such as high blood pressure or chronic fatigue. Equally, research has shown that regular exercise can lift your mood as it releases positive hormones in the brain such as endorphins, increases motivation and can even reduce feelings of mild to moderate depression.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        In addition, there is growing evidence that highlights the link between our diet, positive mental health, and healthy brain development. Good quality nutrition plays an important role in contributing to the prevention of depression, and our friends at The Turmeric Co. offer various insights on this topic, sharing how nutrition can boost our mental health.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When you pay close attention to how you feel in your mental, physical and emotional wellbeing as a whole, this can lead to many improved benefits in your daily life. It can boost your performance at work, improve your focus and help to regulate your feelings and emotions.{'\n'}
                    </Text>

                    <Text style={styles.h2}>1. Better sleep{'\n'}</Text>

                    <Text style={styles.text1}>
                        Studies have shown that sleep deprivation can affect your psychological state, your cognitive skills and can even lead to unhealthy eating habits.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Difficulty sleeping, lack of sleep and disrupted sleep are all common symptoms of many mental health issues, including anxiety and depression. On the other hand, when we are feeling mentally well and have less stressful thoughts, our sleep can improve dramatically.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Identifying a soothing sleep routine can be a helpful way to nurture healthy habits that supports a relaxed state. If you struggle with stressful or overwhelming thoughts before going to bed, take a look at these benefits of writing to support your mental health.{'\n'}
                    </Text>

                    <Text style={styles.h2}>2. Increased sleep{'\n'}</Text>

                    <Text style={styles.text1}>
                        When we are experiencing difficulties with our mental health, including stress, burnout, anxiety or depression, we often lack energy and can even experience severe fatigue as a result.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        In contrast, nurturing good mental health can lead to feeling more energised and positive about our experiences, our environment and the relationships in our lives.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Whether it's setting healthy boundaries for yourself, practising Mindfulness or spending time in nature, prioritising self-care can enhance your energy levels, improve your sleep and inspire a renewed sense of purpose.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        3. Improved mood{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        While our mood can be affected if we are feeling irritated or stressed, nurturing good mental health can increase feelings of happiness and positivity. With less stressful thoughts clouding our minds, we can focus our attention on the positive aspects of our lives.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        One way to support our mental health is practicing conscious breathing exercises.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        This can help us to observe our thoughts and take notice of how we feel, which in turn helps us to regulate our mood, reflect, and introspect, before reacting to any situation. It also helps us to learn healthy habits that enables us to detach from stressful thoughts, realign our intentions and nurture effective decision making.{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>
                        The benefits of nurturing our mental and physical health{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        These 3 steps to nurturing good mental health can also lead to improved lifestyle choices, as well as contribute to positive physical health. When we look at our mental and physical health as a dual-approach to supporting our wellbeing, this can result in the following benefits:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        1. An increased capacity to make better nutritional choices{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we feel less fatigued, we are more able to focus effectively on important daily decisions, such as what foods to put in our bodies. Having more time awake and feeling energized to spend time on nutritional needs, such as preparing and eating the right foods, has a significant impact on our physical health.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we feel mentally and physically well, we are more likely to honor our meal times and remain hydrated, and less likely to turn to convenience foods and drinks that may lower our mood and impact our blood sugar levels.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        2. More desire to move and exercise regularly{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        With more energy comes an increased desire to move our bodies, whether it's walking, running, stretching, yoga or dancing. Different practices work for different people.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we are feeling more energized, we can also feel more inspired to move our bodies and exercise more regularly, therefore cultivating a long-term, healthy habit.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        For some people, combining regular exercise with seeing a friend, colleague or loved one also helps to boost motivation and strengthen social connections. This is a fundamental human need and supports a positive state of mental wellbeing.{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        3. Lower alcohol consumption{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we feel well-rested, more energized and experience a positive state of mind, we are less likely to turn to unhealthy habits such as high alcohol consumption. Excessive drinking is commonly linked to poor mental health, particularly high-stress levels and depression.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we are in a state of good mental health, we are more likely to feel a sense of empowerment and control over our consumption of alcohol. Rather than drinking in excess, which can impact negatively on our fitness goals and physical wellbeing, we can feel a greater sense of connection and centredness, inspired to nurture a well-balanced diet of food and drink.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        Nurturing good mental wellbeing for your physical health{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we consciously choose to prioritize our mental health, in turn, we experience a range of positive outcomes for our physical health.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        From an increase in our energy levels to feeling motivated to move our bodies, to ensuring as much quality, restful sleep as possible - it can lead us to make conscious decisions to eat and drink well.{'\n'}
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

export default ParagraphThirteen;
