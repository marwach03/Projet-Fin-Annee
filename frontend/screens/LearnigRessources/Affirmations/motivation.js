import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "I choose positivity and reject negativity.", background: require('../../../imagesCitations/img43.jpg') },
    { id: '2', text: "I open myself to all the beauty and joy that life offers me.", background: require('../../../imagesCitations/img44.jpg') },
    { id: '3', text: "I have the power to create the life I want.", background: require('../../../imagesCitations/img45.jpg') },
    { id: '4', text: "I am responsible for how I feel and today I choose happiness.", background: require('../../../imagesCitations/img46.jpg') },
    { id: '5', text: "I recognize my own value and my ability to contribute positively to the world.", background: require('../../../imagesCitations/img47.jpg') },
    { id: '6', text: "Every day I learn, I grow, and I improve.", background: require('../../../imagesCitations/img48.jpg') },
    { id: '7', text: "I only accept positive and happy vibes.", background: require('../../../imagesCitations/img49.jpg') },
    { id: '8', text: "My positive attitude breeds positive results.", background: require('../../../imagesCitations/img50.jpg') },
];

const Motivation = () => {
    return (
        <FlatList
            data={quotesData}
            renderItem={({ item }) => (
                <ImageBackground
                    source={item.background}
                    style={styles.backgroundImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.quoteContainer}>
                        <Text style={styles.quoteText}>{item.text}</Text>
                    </View>
                </ImageBackground>
            )}
            keyExtractor={item => item.id}
            pagingEnabled
            horizontal={false}
            showsVerticalScrollIndicator={false}
        />
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    quoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    quoteText: {
        fontSize: windowWidth * 0.08,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth * 1,
        height: windowHeight * 1.035,
    },
    imageStyle: {
        resizeMode: 'cover', // Assurez-vous que l'image de fond couvre tout l'écran
    },
});

export default Motivation;
