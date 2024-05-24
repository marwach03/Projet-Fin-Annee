import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground , Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParagraphOne = () => {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>Hunger of the heart : food is not just fuel</Text>
                    <Image source={require('../../../images/p1.jpg')} style={styles.icons2} />
                    <Text style={styles.text1}>
                        Today we enter into a deeper understanding of food by recognizing that it is not just
                        a source of energy, but it nourishes our hearts and our souls.
                    </Text>
                    
                    <Text style={styles.h2}>More than nutrients</Text>
                    <Text style={styles.text1}>
                        We often hear that food is fuel, a simple necessity for physical survival. While it is true that food provides us with essential nutrients, it is much more than just a source of energy. Now let's explore the emotional and cultural meaning of food: {'\n'}
                    </Text>
                    <Text style={styles.text2}>
                            + Emotional bonds: Meals are often shared with family and friends, which creates bonds and memories. Cooking for someone can be an expression of love and care.{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                            + Comfort and joy: Certain foods have the power to comfort us in difficult times. They can evoke fond memories, bringing a feeling of joy and nostalgia.{'\n'}
                    </Text>
                    <Text style={styles.text2}>
                            + Celebration and ritual: food is at the heart of many celebrations and rituals, marking important life events and cultural traditions.{'\n'}
                    </Text>

                    <Text style={styles.h2}>Recognize emotional hunger</Text>
                    <Text style={styles.text1}>
                        While mindful eating focuses on the physical aspect of food, it is also about to be aware of our emotional reactions to food. It's recognizing that sometimes, the heart is hungry for more than just nutrients. It's not about letting go without thinking, but rather to understand and respect the emotional aspect of food.
                    </Text>

                    <Text style={styles.h2}>Nourish the soul</Text>
                    <Text style={styles.text1}>
                        Remember that we are not machines that run on fuel alone. We are human beings with complex emotions and experiences. The food can be a source of pleasure, comfort and celebration. It's about finding joy in the flavors, the company and the moment.
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

export default ParagraphOne;
