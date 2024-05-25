import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "I manifest positive experiences and I attract positive people.", background: require('../../../imagesCitations/img67.jpg') },
    { id: '2', text: "I choose to see the positive in every situation.", background: require('../../../imagesCitations/img68.jpg') },
    { id: '3', text: "I have the power to change my story.", background: require('../../../imagesCitations/img69.jpg') },
    { id: '4', text: "I am responsible for what I feel and I choose happiness.", background: require('../../../imagesCitations/img70.jpg') },
    { id: '5', text: "I am confident in my accomplishments.", background: require('../../../imagesCitations/img71.jpg') },
    { id: '6', text: "I will achieve great things.", background: require('../../../imagesCitations/img72.jpg') },
    { id: '7', text: "I recognize my own value and my ability to contribute positively to the world.", background: require('../../../imagesCitations/img73.jpg') },
    { id: '8', text: "every day I learn, I grow, and I improve.", background: require('../../../imagesCitations/img74.jpg') },
];

const Positivity = () => {
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
        color: 'black',
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

export default Positivity;
