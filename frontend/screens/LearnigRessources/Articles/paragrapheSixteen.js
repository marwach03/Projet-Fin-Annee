import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphFifteen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>The nature of Psychosomatic Illnesses</Text>
                    <Image source={require('../../../images/p16.jpg')} style={styles.icons2} />

                    <Text style={styles.text1}>
                        Without a doubt being ill is really annoying and a limiting experience. A common habit is to run to the GP and pharmacy, get the medicine and take good care of our body. We also often think about the cause of our illness. Sometimes the answer is easy- we didn't have enough clothes outside, or we spent time with someone who was ill. But did you know that some illnesses can be also caused by a bad mental state? What are these illnesses and how is that even possible? Let's find out!{'\n'}
                    </Text>

                    <Text style={styles.h2}>We are a puzzle{'\n'}</Text>

                    <Text style={styles.text1}>
                        Human beings are an amazing complex of various components. As you can see in Doodle Med's video, we all have biological, psychological, social and spiritual aspects which define us. Biological component shows the physical characteristics of us (height, eye colour, hair colour). The psychological component describes our traits (creativity, spontaneity, mood). Our social component tells how we interact with people and who we surround ourselves with (shyness, being happy in a big company, having just a few friends with common subjects of interest).{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Finally, the spiritual component is about our beliefs (our beliefs, our life philosophy). So basically we are the puzzle and our components are its pieces.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Nowadays, psychologists and doctors use this complex model while they're working with people. They found out that this system is in fragile harmony and when one component is struggling and problematic it affects the others. For example, when you're stressed (psychological component) you may feel your heart rapidly beating and you don't feel physically well (biological component). The same principle applies to diseases. Psychosomatic illnesses are caused by bad mental conditions. And what illnesses are psychosomatic?{'\n'}
                    </Text>

                    <Text style={styles.h2}>Migraine{'\n'}</Text>

                    <Text style={styles.text1}>
                        In Oliver Sacks' book Migraine confirms that behind this illness is very often emotional tension, stress or mental and physical exhaustion. People who are having a stressful life tend to have more migraines and when your stressful situation persists you can develop yourself a severe chronic migraine. However as you can find in Helen Webberley's article, migraine can be caused by other sources, for example, hormonal changes, certain types of medication (sleeping pills, hormonal therapy), low blood sugar, jet lag or dietary factors (alcohol, coffee, chocolate, cheese).{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        If you're experiencing migraines, talk to your general practitioner (GP) about it and try to notice what happened before you got it. Did you have an exhausting day at work? Did you sleep well the previous night? Did you eat some certain foodstuff? Isn't migraine a side effect of a medication you take? Answering these questions can lead you to find your migraine triggers.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Back Pain{'\n'}</Text>

                    <Text style={styles.text1}>
                        It's quite surprising but back pain is also on the list of psychosomatic diseases. How could your mental condition affect your back? William Deardorff's article describes this theory: people with mental problems are not feeling good and they start to avoid some activities- including sport, our body reacts to this non-activity, our back starts to hurt.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        In William Derdorff's article, you can also find that stress-related back pain can be specific and recognized from the other back pain. People experiencing psychosomatic back pain often refers to the pain moving around their back, they often have sleep disturbances, muscle tender points and diffuse muscleaches.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        Eczema{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Studies show that there is a correlation between depression/anxiety and eczema. According to the National Eczema Association people with eczema are in a vicious cycle. Stress and anxiety make their eczema flare-up, that leads to more stress and anxiety which make eczema worse. This association recommends eczema patients to really focus on their mental health and take good care of it.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        These three illnesses are just examples, there are more of them. You can find more in the articles mentioned above. If you really want to dig deep and know more about psychosomatic illnesses I recommend you to read Suzanne O'Sullivan's book It's All in Your Head or John E. Sarno's The Divided Mind: The Epidemic of Mindbody Disorders.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Do you have any doubts and questions about the sources of your health problem? Talk to your GP or to a mental health professional. From what we learnt in this article, bad mental conditions can have a really negative effect on our physical health. However, the connection between biological and psychological components can also be positive. You may know from your own experience, that when you're sick and your loved ones are taking care of you, you will start to feel a bit better soon.{'\n'}
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
