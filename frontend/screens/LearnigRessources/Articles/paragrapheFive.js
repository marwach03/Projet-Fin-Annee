import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphFive = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>How to deal with anger</Text>
                    <Image source={require('../../../images/p5.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Anger is an emotion that many do not feel comfortable with within themselves, or coming from other people. It is a very difficult emotion, either way, and most people do not know how best to handle anger. So how to deal with anger? Here are some anger management tips, whether the anger comes from someone else or from you. {'\n'}
                    </Text>

                    <Text style={styles.h2}>When you are angry</Text>
                    <Text style={styles.text1}>
                        When you are angered by someone, what is your most typical response? Do you express it outwardly with hurtful or angry words, or do you hold it in and take it out on the person in other ways? Do you recognize when you are feeling angry? {'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Sometimes underneath anger is hurt feelings. And when we are hurt, we can express that hurt with anger, and then we can take it out on the other person in a hurtful and harmful way. This is not helpful or productive in any type of relationship. {'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The first step is to recognize and understand why the anger is occurring. What exactly is happening, why are you angry and how are you really feeling? Did someone say something that hurt you, or do something that outraged or upset you? Take a step back to understand your feelings first. Also take a step back to notice whether your first emotional response is a reasonable one given the situation at hand. {'\n'}
                    </Text>

                    <Text style={styles.h2}>Anger Management</Text>
                    <Text style={styles.text1}>
                        The next step is then to express those feelings in a rational, calm and reasonable manner, without explosive emotion or hurtful words. {'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Hurtful words and explosive emotion are counterproductive to healthy communication and only make the situation far worse. If you have been in such a situation, you know that angry words only add fuel to the fire and create bad feelings and further arguments.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        The best way to deal with anger is if you feel you are about to explode on someone or say hurtful things, take time out to calm down and collect your thoughts. Tell the person you need some time to collect your thoughts. Then come back to them after you have calmed down and are able to talk to the person in a reasonable and calm manner. Take all the time you need- even if you need a day or two or a week.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        One of the unhealthiest ways to handle anger is to bury it within yourself, ignore it, dismiss it and have it come out in passive-aggressive ways towards the other person. This also is counterproductive to a healthy relationship.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        Passive aggressiveness in relationships is a dysfunctional way of behaving in a relationship. It is also said within certain medical circles that buried and unexpressed anger can create health problems longer-term.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        People also become deeply resentful of passively expressed anger. It creates unspoken, unexpressed friction and tension within a relationship. This creates a snowball effect where issues are not openly addressed and can become cumulative. Anger (and issues) must be dealt with openly but respectfully so that a relationship can be a healthy one.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So, the point here is this - don't bury your anger, don't take it out on someone else passively and don't explode on someone. Learn how to pinpoint why it is that you angry, take a step back and then come back and express yourself in a calm and reasonable manner.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        You can say, "when you did X, that made me furious." Or, "I am feeling angry because of X and that upsets me deeply." You can say this in a calm way that does not ignite an argument. It will also open the door to a conversation about the situation without heated argument.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When you simply state your feelings outright in a calm manner, it creates an openness for discussion. It tells the person how you feel without attacking them. When a person feels attacked in any way, they will automatically become defensive and will most typically counterattack. This is counterproductive to healthy and productive communication.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So how to handle anger is to state your feelings, then open the door for a discussion without hurtful or angry words.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        When voices are raised, it also creates further unnecessary tension and poor responses. I know for myself, that when someone raises their voice at me, my adrenalin is raised, my heart beats faster, I become more anxious, I hear the person's upset over their words and I respond with just as much upset and anger. Case in point-express your feelings calmly, and you will get a far better response.{'\n'}
                    </Text>

                    <Text style={styles.h2}>When someone else is angry</Text>
                    <Text style={styles.text1}>
                        If someone is exploding on you with anger, the best thing you can do for yourself is to walk away. You can tell the person, "I do not like the way you are speaking to me right now, clearly you are very angry, so I am going to walk away and take a break until you can calm down and be calm and reasonable." Then leave the situation.{'\n'}            
                    </Text>

                    <Text style={styles.text1}>
                        It is within your emotional bill of rights as a human being to be treated with respect at all times. Explosive anger, name-calling, angry outbursts, hurtful words and accusations are not acceptable.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        So how to deal with anger when someone is being unreasonable, outrageous and disrespectful? Don't deal with it, don't accept it and walk away.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        If it is a boss or co-worker that you are dealing with who is acting this way, then you are dealing with a hostile work environment, which is an entirely different kind of situation that must be handled professionally and differently from any other type of relationship.{'\n'}
                    </Text>

                    <Text style={styles.text1}>
                        But if the person is a family member, a friend or a partner, then the best way to handle explosive anger is to not handle it until the person is calm, reasonable and rational.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        Raised voices, name-calling, accusations and mean comments are not acceptable, in any way. So if you have been dealing with such things on a frequent basis, then that is verbal abuse, which is a topic for another article. For now, I am addressing how to deal with anger.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        So if someone is angry at you and is not handling it well, tell them so, then walk away. You do not deserve to be yelled at-no one does.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        Just as I have laid out how best to handle your own anger can be applied to another person.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        When we can learn how to manage and handle our anger appropriately, it makes for a happier life.{'\n'}
                    </Text>
                    
                    <Text style={styles.text1}>
                        So, there are some tips on how to deal with anger-here's to healthier living and to your happiness!{'\n'}
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

export default ParagraphFive;
