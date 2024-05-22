import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~It's perfectly acceptable to walk away to be alone to calm down, sometimes it's the best action to take.~", background: require('../../imagesCitations/img29.jpg') },
    { id: '2', text: "~Breathe, you have survived your hardest days and you will survive this one.~", background: require('../../imagesCitations/img30.jpg') },
    { id: '3', text: "~Replace stress with peace, anxiety with calm, and worry with confidence.~", background: require('../../imagesCitations/img31.jpg') },
    { id: '4', text: "~Stress is caused by the way we interpret a situation. It is created not what we focus on. Change your focus and you will change the way you feel about the situation.~", background: require('../../imagesCitations/img32.jpg') },
    { id: '5', text: "~Stop thinking too much. You can't control everything, just let it happen.~", background: require('../../imagesCitations/img33.jpg') },
    { id: '6', text: "~The biggest mistake you can make in life is to keep trying to make one.~", background: require('../../imagesCitations/img34.jpg') },
    { id: '7', text: "~Anxiety arises when you try to control every little outcome.~", background: require('../../imagesCitations/img35.jpg') },
];

const Stress = () => {
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
        height: windowHeight * 1.04,
    },
    imageStyle: {
        resizeMode: 'cover', // Assurez-vous que l'image de fond couvre tout l'écran
    },
});
export default Stress;
