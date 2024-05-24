import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphTwo = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>Dealing with grief and loss</Text>
                    <Image source={require('../../../images/p2.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Loss is a natural part of life, but the deosn't make it any easier to deal with. Wheter you're mourning for the loss of a loved one, a job, friend or anything else, the grieveing process can be a log and painful journey. We hope this article gives you some ideas on what you can de to make the process a little less overwhelming for yourself.
                    </Text>
                    
                    <Text style={styles.h2}>Allow yourself to feel your emotions</Text>
                    <Text style={styles.text1}>
                        It's normal to feel a whole range of emotions after a loss of someone or something, and you have a right to feel what you fell. You may experience sadness, anger, guilt, or even relief. Tke your time to go trough the emotions. It may also help you to express these emotione in a healthy way, such as trough writing, talking to a trusted friend, or engaging in physical activities like exercise or yoga.
                    </Text>

                    <Text style={styles.h2}>Take care of yourself</Text>
                    <Text style={styles.text1}>
                        It can be a long process, no make yourself your priority. You don't have to feel guilty for engaging in activities that usually bring you joy. Also, taking such as eating healthy meals, exercising regularly, and getting enough sleep can also make a big difference.
                    </Text>

                    <Text style={styles.h2}>Seek support</Text>
                    <Text style={styles.text1}>
                        Grief can be isolating. Other people may not know how to react and how to support you. Maybe you need space, maybe you need someone to cook for you or do laundry, maybe you need to talk and be heard without judgment. Don't be afraid to tell your friends and family what you need.
                    </Text>

                    <Text style={styles.h2}>Say goodbye</Text>
                    <Text style={styles.text1}>
                        It's normal to grieve for a while, but when the time comes, it's important to know how to close one chapter of your life and start another. What can help you do that is to say goodbye in the way you need. Some people create their own personal rituals. They write letters to the people who left and send them by the water. Some people light lanterns and release them into the sky. Find your own way how to say goodbye to what you've lost.
                    </Text>

                    <Text style={styles.h2}>Create a new normal</Text>
                    <Text style={styles.text1}>
                        Moving forward doesn't mean forgetting the person or thing you've lost. Instead, it's about finding a new normal and creating a life that honors their memory. This may include participating in activities that the person enjoyed or creating a small memorial, but also finding new hobbies or interests that bring you joy. It's natural to move on and live your own life. You have a right to do that in your own time.
                    </Text>

                    <Text style={styles.h2}>Be patient with yourself</Text>
                    <Text style={styles.text1}>
                        And finally, grief is a difficult process, and it's important to be gentle and patient with yourself. Don't compare your grieving process to others, and remember that healing takes time. It's okay to experience a range of emotions and ot take breaks when you need them.
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

export default ParagraphTwo;
