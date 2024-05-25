import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphFourteen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>4 Gentle Stretching Exercises to Prevent Neck and Back Pain</Text>
                    <Image source={require('../../../images/p14.jpg')} style={styles.icons2} />

                    <Text style={styles.h2}>Soothing neck release{'\n'}</Text>

                    <Text style={styles.text1}>
                        Sit cross-legged on the floor, for comfort you can use a yoga mat or ensure a soft surface, like carpet. If you have difficulty sitting cross-legged, it's fine to sit in a chair with your feet placed flat on the ground.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Stretch your left arm out and place it next to your left knee, or if you are seated, place it on the side of your chair. Put your right hand on top of your head and gently slant your head to the right.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        For an increased stretch, try applying gentle pressure on your head with your hand to feel the pull. To take it further, try holding onto your left knee as you do so. This keeps your torso balanced and allows you to isolate the stretch to just one side.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Hold this pose for half a minute and then gradually release the position, and do the same for your right side.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Clasping neck stretch{'\n'}</Text>

                    <Text style={styles.text1}>
                        This one gives you a good, deep stretch for your upper back and neck.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Start by sitting comfortably, either cross-legged on the floor or in a chair. Lock your hands together and place your palms on the back of your head. Sit up straight so your back is aligned and then lock your hips securely into your seat.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Once in this position, slowly bring your hands down towards your thighs, letting your head move with it. Tuck your chin into your chest as you do so, using your palms to gently move your head away from your shoulders for a more intense stretch.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Hold this position for around 30 seconds, and then gradually release the position.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Neck stretch behind the back{'\n'}</Text>

                    <Text style={styles.text1}>
                        This is a great exercise to do if you're working from home, as it gets you up on your feet and moving. It gives you a deep, intense stretch around the sides of your neck and releases tension, preventing neck pain from sitting down for too long.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Stand on a solid surface with your feet apart, in line with your shoulders. Extend both hands behind your buttocks and hold onto your right wrist with your left hand. With your left hand, gradually straighten out your right arm and gently tug it away from your body.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        For a more intense stretch, gently move your head to the left side of your shoulder. Hold this position for 30 seconds and then do the same for the right side of your body.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Grounded tip-over tuck (Child's Pose){'\n'}</Text>

                    <Text style={styles.text1}>
                        This exercise offers a deep, relaxing stretch for your shoulders and neck. It's also a great exercise if you experience migraines and headaches, as well as relieving drowsiness.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Kneel on the floor on a yoga mat, or a soft surface like carpet, with your shins flat against the ground. Sit back onto your buttocks, fold forward with your arms stretched out in front of you and slowly lay your forehead on the floor. This is known as Child's Pose in Yoga practice. Relax your torso against your upper thighs and hold this pose for a few seconds, stretching out your spine.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Once you are comfortable with this pose, clasp your hands together behind your back, pressing the heel of your palms together to intensify the stretch in your shoulders. However, if this doesn't feel right for your body, then stay settled in Child's Pose do what feels comfortable for you.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        If you'd like to try another variation of this pose, lift your interlocked hands above your body, as high as feels comfortable. Inhale slowly and shift your center of gravity forward, gently raising your waist off your heels. Again, be mindful not to overexert yourself, and push yourself to a limit you feel comfortable with.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        As the top of your head meets the floor, rest there and stretch your hands to the floor, as close as feels comfortable for you. Hold this position for 10 seconds and then gradually lower your waist back onto your heels.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Hold this position again for a further 10 seconds, and then raise your waist off your heels again. Repeat this process five or so more times, then gently go back into Child's Pose again. Equally, Child's Pose is a wonderful stress-reliever for the body if you simply want to stretch out in this pose without the variations described - feel your spine lengthen and relax into the pose with each deep breath.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        Beyond neck and back pain relief: the benefits of stretching{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The stretches described above will help prevent you from developing neck or back pain, something particularly important if you're currently working from home during the lockdown. With recent research from Bupa UK revealing that 11 million Brits are in pain from using their home office equipment, it's important now more than ever to include movement as part of your daily routine, to support both your mental and physical health.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Stretching offers an array of benefits. Regular stretching helps to:{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • relieve stress{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • keep blood flowing around your body{'\n'}
                    </Text>

                    <Text style={styles.text2}>
                        • feel calm and balanced{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Stretching is an effective migraine solution too, particularly effective when using the Grounded Tipover Tuck pose described above. Beyond that, stretches like these also offer relief from the side effects of migraine medication. Research shows that the side effects of sumatriptan (a common migraine treatment) include drowsiness, and stretching can help relieve this somewhat.{'\n'}
                    </Text>              

                    <Text style={styles.text1}>
                        Try making these gentle exercises part of your day and feel the many benefits they provide. Remember to be mindful of your limits and go at a pace that works for you, and we're confident you'll notice improvements each day{'\n'}
                    </Text>

                    <Text style={styles.h2}>
                        1. An increased capacity to make better nutritional choices{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we feel less fatigued, we are more able to focus effectively on important daily decisions, such as what foods to put in our bodies. Having more time awake and feeling energized to spend time on nutritional needs, such as preparing and eating the right foods, has a significant impact on our physical health.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When we feel mentally and physically well, we are more likely to honor our meal times and remain hydrated, and less likely to turn to convenience foods and drinks that may lower our mood and impact our blood sugar levels.{'\n'}
                    </Text>

                    <Text style={styles.h2}>
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

                    <Text style={styles.h2}>
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

export default ParagraphFourteen;
