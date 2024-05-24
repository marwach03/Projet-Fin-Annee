import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphSix = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>Understanding panic attacks and the effects on your body</Text>
                    <Image source={require('../../../images/p6.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Anxiety is a natural, human response to stressful or challenging situations. Everyone will experience feelings of anxiety and panic at certain times in their life, but for some, they may experience heightened states of anxiety which can lead to panic attacks. This can manifest in many ways and can happen at any time and often for no clear reason.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        This weeks guest post by Dr. Ram Pardeshi, MD, takes us through a process of understanding the symptoms of panic attacks, how it manifests and how to help yourself or someone you know who may be experiencing this common issue.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Understanding your body's reaction to panic attacks</Text>
                    <Text style={styles.text1}>
                        Panic attacks are sometimes described as intense waves of fear or worry that immobilize the body. They tend to be unpredictable but may be linked to a variety of triggers such as crowded rooms, social gatherings, severe stress in the workplace, or a significant life transition.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        In order to fully treat the effects of a panic attack, it's important to understand how it affects the body.{'\n'}
                    </Text>

                    <Text style={styles.h2}>What causes a panic attack?</Text>
                    <Text style={styles.text1}>
                        A panic attack often strikes at the most unexpected moment. For some people, it may only happen once. For others, these attacks recur often and may be triggered by specific situations. If a person regularly experiences panic attacks, it could be that they may stem from another condition such as depression, agoraphobia or a panic disorder.{'\n'}            
                    </Text>

                    <Text style={styles.text1}>
                        Symptoms of a panic disorder can include anticipatory anxiety and phobic avoidance. The former is a regular feeling of anxiety and tension, usually coming from the fear of a future panic attack. This sense of dread may limit the enjoyment of everyday activities and responsibilities.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Phobic avoidance is the act of purposely staying away from certain locations that have either triggered panic attacks before or that contain potential triggers. It may also lead to severe agoraphobia, which is the fear of having a panic attack in a place that wouldn't be easy to leave.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Panic attacks don't only occur when there is a history of anxiety. Though the exact causes are unconfirmed, some other medical conditions and substances can contribute to panic as well. These include:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • Cardiac issues{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • Hyperthyroidism{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • Hypoglycemia Stimulants{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • Stimulants{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • Medications or medication withdrawal{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>How can you help someone experiencing a panic attack?</Text>
                    <Text style={styles.text1}>
                    An unexpected panic attack can be overwhelming to manage. If a friend, family member or coworker is experiencing one, immediate support minimizes danger and prevents future stress. You could take the following steps to help someone in crisis:{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        • Stay calm: Being near a panic attack may trigger your fight or flight response. Try to maintain a calm demeanor to help the person feel more grounded.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        •Activate the senses: To help the person connect to the present moment, ask them, "Can you name five things you can see? Four things you can touch? Three things you can hear? Two things you can smell? One thing you can taste?"{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        • Offer reassurance: Panic attacks tend to last a few minutes, so make sure the person is breathing normally and regaining composure. At a later point, and particularly if the panic attack continues to occur for the individual, it may be helpful to encourage them to seek professional support for anxiety, such as therapy.{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>How are panic attacks treated?</Text>
                    <Text style={styles.text1}>
                        At times, severe anxiety can be quite challenging to treat, as it is usually provoked by stress and factors that seem outside of one's control. Seeking a physician's advice is helpful in confirming that the symptoms are not coming from another disorder.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Seeking out Counselling and Cognitive Behavioral Therapy (CBT) are common ways to identify potential triggers. These forms of professional support are often effective in treating panic disorders, phobias, social anxiety disorder, general anxiety, and other issues. A successful therapy session can break down negative thoughts that contribute to anxiety and reframe perceptions of everyday situations to be more realistic.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The physical symptoms of a panic attack may affect an individual even after the attack has passed. Some medications can help treat symptoms and get the person's physical wellbeing under control, although self-care practices, Yoga, and regular exercise helps to relax the body, and release pent-up tension in the muscles. In order to keep existing anxiety at bay, it's important to avoid stimulants such as coffee, tobacco, recreational drugs, and alcoholic drinks.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        As with any mental health condition, a strong support system is incredibly beneficial as a source of encouragement. Anxiety and chronic stress can be overwhelming and difficult to manage. If a friend or family member struggles with panic attacks, being a trustworthy source of support can help them in the long run.{'\n'}
                    </Text>

                    <Text style={styles.h2}>How can workplace stress be reduced?</Text>
                    <Text style={styles.text1}>
                        Stress at work may be one of the biggest obstacles to productivity and efficiency.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Workload, lack of chemistry with coworkers, and insufficient benefits can all contribute to stress and tension. In order to combat the mental pressure, companies that implement strategies to alleviate stress can help prevent employees' anxiety or potential panic attacks. These strategies include:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • Workplace wellness initiatives{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • Flexible hours and remote working{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        •  Team building and social collaboration{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • On-site counseling{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • Recognition of employees' efforts{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        In the U.S., 2.7% of the population is affected by panic disorders. An unexpected panic attack can stem from any number of causes, whether at home or the workplace.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        To learn more about how a panic attack affects the body, check out our accompanying list of resources.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Author: Ram Pardeshi, MD, is a talented and compassionate psychiatrist. He is Medical Director at Mindful Urgent Care, a premier psychiatry practice based in New York. Dr. Pardeshi is passionate about helping patients suffering from mental illness.{'\n'}
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

export default ParagraphSix;
