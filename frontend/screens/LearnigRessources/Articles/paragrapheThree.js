import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphThree = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>The best Tech Tools to combat depression</Text>
                    <Image source={require('../../../images/p3.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Depression has become a leading mental health concern across the world. As the World Health Organization reported, 5% of adults experience depression, affecting 280 million people across the globe. These rising trends in mental disorders are especially concerning as they negatively impact mental and physical health. Many factors influencing depression, such as physical inactivity or alcohol abuse, are known risk factors for chronic conditions such as cardiovascular disease, obesity, and diabetes.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        There are effective treatments for depression, however. Psychological treatments combined with antidepressant medications are proven solutions. However, surging demand has made it more challenging to access these services, leaving many to deal with their depressive symptoms by themselves. Fortunately, technology has improved to help those with these mental health concerns. In this article, we'll explore some of the best tech tools to combat depression.
                    </Text>

                    <Text style={styles.h2}>Meditation apps</Text>
                    <Text style={styles.text1}>  
                        One of the most recommended ways to deal with depression is to meditate. Often, bouts of anxiety worsen depressive symptoms. But through meditation, you can practice mindfulness, keeping stress and anxiety in check. People can now rely on meditation apps to guide them through the process. Our application VOS offers plenty of guided, calming activities, including breathing exercises and meditations. This can help people struggling with negative thoughts take a well-deserved break and reset themselves for a better day.
                    </Text>

                    <Text style={styles.h2}>Robot pets</Text>
                    <Text style={styles.text1}>
                        Animal-assisted therapy has been effective for years, helping people suffering from loneliness and depression, from the elderly to physical therapy patients. While effective, pets are still an enormous responsibility and require round-the-clock maintenance, which can be tricky for some people. This is where robot pets can improve their quality of life by serving as companions, much like real animals, without extra responsibility. A Companion Pet Pilot study found that participants with severe dementia, as well as social participants, had reduced anxiety and better communication skills after being given their Joy for All robot animals. Even if they are artificial, these companion pets can be life-changing for some.
                    </Text>

                    <Text style={styles.h2}>Telehealth therapy</Text>
                    <Text style={styles.text1}>
                        As mentioned, one of the most significant barriers to mental health treatment is high demand but limited healthcare services. But in the past few years, telehealth in mental health has become a great tool in resolving these issues. These solutions enable healthcare practitioners to reach underserved communities and better track medical records while staying affordable for those who need care.
                    </Text>

                    <Text style={styles.h2}>Wearable technology</Text>
                    <Text style={styles.text1}>
                        Stress plays a major role in driving depressive symptoms. This is worsened by physical symptoms like lack of focus, sleep problems, and feeling overwhelmed- which is terrible for long-term health. One rising way to manage and reduce stress is wearable fitness devices, which can give better insight into how a user feels about managing themselves better. Startup company Sensate has taken a step further by going beyond detection. They have developed a device that uses infrasound technology to calm the user's fight-flight-freeze response, activating the body's nervous system to relax them. While more studies are needed, existing studies on these wearables have been shown to reduce perceived stress and improve sleep, so it may be an effective way to deal with depression.
                    </Text>

                    <Text style={styles.h2}>Online support groups</Text>
                    <Text style={styles.text1}>
                        Similarly to telehealth therapy, internet connectivity has improved how those afflicted with depression reach out to professionals and peers about their condition. They don't have to face as much social stigma as before, and it is much easier to find online support groups with people going through the same struggles. Through shared experiences, everyone can benefit from companionship and learn ways to deal with anxiety or other depressive symptoms.
                    </Text>

                    <Text style={styles.text1}>
                        Through these technological tools, it can be more accessible for people to handle the symptoms of depression. However, remember that these tools are only meant to supplement and not replace proper treatment, like therapy. For any readers suffering from depression, we strongly recommend seeking professional help before using the tech mentioned above to help you through your condition.
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

export default ParagraphThree;
