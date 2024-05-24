import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphEight = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>What you should know about depression</Text>
                    <Image source={require('../../../images/p8.jpg')} style={styles.icons2} />

                    <Text style={styles.h2}>What is Depression?</Text>
                    <Text style={styles.text1}>
                        Clinical depression goes by many names, such as "the blues," biological or clinical depression, and a major depressive episode. But all of these names refer to the same thing: feeling sad and depressed for weeks or months on end not just a passing blue mood of a day or two. This feeling is most often accompanied by a sense of hopelessness, a lack of energy (or feeling "weighed down"), and taking little or no pleasure in things that once gave a person joy in the past.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Depression symptoms take many forms, and no two people's experiences are exactly alike. A person who's suffering from this disorder may not seem sad to others. They may instead complain about how they just "can't get moving," or are feeling completely unmotivated to do just about anything. Even simple things - like getting dressed in the morning or eating at mealtime become large obstacles in daily life. People around them, such as their friends and family, notice the change too. Often they want to help but just don't know-how.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        According to the National Institute of Mental Health (2019), risk factors for depression can include a family history of mood disorders, major life changes, trauma, other physical diseases (such as cancer), and even certain medications. But today, the causes of depression still remain largely unknown.{'\n'}            
                    </Text>

                    <Text style={styles.text1}>
                        Depression can appear differently in children than in adults. In children, it can look more like anxiety or anxious behavior.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Symptoms of Depression</Text>
                    <Text style={styles.text1}>
                        Clinical depression is different from normal sadness-like when you lose a loved one, experience a relationship breakup, or get laid off from work - as it usually consumes a person in their day-to-day living. It doesn't stop after just a day or two - it will continue for weeks on end, interfering with the person's work or school, their relationships with others, and their ability to just enjoy life and have fun. Some people feel as if a huge hole of emptiness has opened inside when experiencing the hopelessness associated with this condition. In any given year, 7 percent of Americans will be diagnosed with this condition; women are 2 to 3 times more likely to be diagnosed than men (American Psychiatric Association).{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The symptoms of depression include the majority of the following signs, experienced nearly every day over the course of two or more weeks:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • a persistent feeling of loneliness or sadness{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • lack of energy{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • feelings of hopelessness{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                        • difficulties with sleeping (too much or too little){'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • difficulties with eating (too much or too little){'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • difficulties with concentration or attention{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • total loss of interest in enjoyable activities or socializing{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • feelings of guilt and worthlessness{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • and/or thoughts of death or suicide.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        Most people who are feeling depressed don't experience every symptom, and the presentation of symptoms varies in degree and intensity from person to person.{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>Causes & Diagnosis</Text>
                    <Text style={styles.text1}>
                        Depression doesn't discriminate who it affects by age, gender, race, career, relationship status, or whether a person is rich or poor. It can affect anyone at any point in their life, including children and adolescents (although in teens and children, it can sometimes be seen more as irritability than a sad mood).{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        Like most mental disorders, researchers still don't know what exactly causes this condition. But a combination of factors is likely to blame, including genetics, neurobiological makeup, gut bacteria, family history, personality, and psychological factors, environment, and social factors in growing up.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        A mental health specialist is the type of professional best equipped to make a reliable diagnosis for this condition. These kinds of professionals include psychologists, psychiatrists, and clinical social workers. While a general practitioner or family doctor may be able to make an initial diagnosis, further follow-up and treatment should be done by a specialist for the best treatment results.{'\n'}
                    </Text>
                    
                    <Text style={styles.h2}>Depression Treatment</Text>
                    <Text style={styles.text1}>
                        Can depression actually be successfully treated? The short answer is yes. According to the National Institute of Mental Health and countless research studies over the past six decades, clinical depression is readily treated with short-term, goal-oriented psychotherapy and modern antidepressant medications. For most people, a combination of the two works best and is usually what is recommended. Psychotherapy approaches scientifically proven to work with depression include cognitive-behavioral therapy (CBT), interpersonal therapy, and psychodynamic therapy (Gelenberg et al., 2010). Psychotherapy is one of the most effective treatments for all types of depression and has very few side effects (and is a covered treatment by all insurers).{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        For mild depression, many people start with self-help strategies and emotional support. There are some common herbal treatments that research has also shown to be effective, including St. John's wort and kava (Sarris, 2007). The positive effects of exercise and diet should not be under-estimated in helping mild to moderate depression symptoms as well. Increased, regular exercise is recommended as a component of treatment for all severity levels of depression.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When psychotherapy and antidepressants don't work, clinicians may turn to other treatment options. Usually the first is to try and adjunct medication to the existing antidepressant medication. In more serious or treatment-resistant cases, additional treatment options may be tried (like ECT or rTMS). Ketamine infusion treatments also appear to be effective but are generally not covered by insurance and the long-term risks are unknown.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        No matter how hopeless things may feel today, people can get better with treatment - and most do. The key to successful treatment is usually dependent upon the person recognizing there's a problem, seeking out treatment for it, and then following the treatment plan agreed to. This can be far more challenging for someone who's depressed than it sounds, and patience is a core necessity when starting treatment.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Living With & Managing Depression</Text>
                    <Text style={styles.text1}>
                        When faced with the emptiness and loneliness of this condition, many people living with it find it a daily struggle just to wake up in the morning and get out of bed. Everyday tasks most of us take for granted - like showering, eating, or going to work or school - seem insurmountable obstacles to a person living with depression.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The key to living with depression is ensuring you're receiving adequate treatment for it (usually most people benefit from both psychotherapy and medication), and that you are an active participant in your treatment plan on a daily basis. This requires a lot of effort and hard work for most people, but it can be done. Establishing new, healthier routines are important in many people's management of this condition. Getting regular emotional support - for instance, through an online support group - can also be extremely beneficial.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Helping Someone with Depression</Text>
                    <Text style={styles.text1}>
                        When we see a friend or family member in distress, most of us want to reach out and offer a hand. But when it comes to this kind of mental illness, all too often we remain silent, fearful of the stigma associated with the diagnosis. There is nothing to be ashamed of, and no reason not to offer to help out someone who is going through the challenges of living with this disorder.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Getting Help</Text>
                    <Text style={styles.text1}>
                        Recovery from a depressive episode takes time as well as a desire and willingness for change. You can start by talking to someone - anyone about your feelings and finding some immediate emotional support through the sharing. Many people start their journey of recovery off by going to see their family physician for an initial diagnosis. Such a professional can also help connect you with referrals or encouragement to continue your treatment with a mental health specialist.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The first step is yours to take. Be brave and know that in taking it, you're staring down the road to recovery from this disorder.{'\n'}
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

export default ParagraphEight;
