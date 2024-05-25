import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "I already managed to overcome this, I can do it again now.", background: require('../../../imagesCitations/img59.jpg') },
    { id: '2', text: "I face difficulties with calm and serenity.", background: require('../../../imagesCitations/img60.jpg') },
    { id: '3', text: "My mind is calm, my heart is at peace and my body is relaxed.", background: require('../../../imagesCitations/img61.jpg') },
    { id: '4', text: "Challenges only strengthen my determination to move forward.", background: require('../../../imagesCitations/img62.jpg') },
    { id: '5', text: "I am perfectly capable of managing my stress and living a balanced life.", background: require('../../../imagesCitations/img63.jpg') },
    { id: '6', text: "Obstacles are simply shortcuts to opportunities.", background: require('../../../imagesCitations/img64.jpg') },
    { id: '7', text: "I know I have the strength to change my circumstances.", background: require('../../../imagesCitations/img65.jpg') },
    { id: '8', text: "Day by day, I calm down and refocus more.", background: require('../../../imagesCitations/img66.jpg') },
];

const ControlStress = () => {
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

export default ControlStress;
