import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~Many people will come and go from life, but only true friends will leave imprints on your heart.~", background: require('../../imagesCitations/img15.jpg') },
    { id: '2', text: "~Value your relationships and friendships. Make sure you treat the people you love with respect.~", background: require('../../imagesCitations/img16.jpg') },
    { id: '3', text: "~Stay with the people who always make you smile, even when you don't want to.~", background: require('../../imagesCitations/img17.jpg') },
    { id: '4', text: "~We are best friends, always remember if you fall, I will pick you up. After finishing laughing. That's love.~", background: require('../../imagesCitations/img18.jpg') },
    { id: '5', text: "~You don't meet people by chance. they are meant to cross our path for a reason.~", background: require('../../imagesCitations/img19.jpg') },
    { id: '6', text: "~Difficult times show us how much the people in our lives truly matter.~", background: require('../../imagesCitations/img20.jpg') },
    { id: '7', text: "~The only people I owe my loyalty to are the ones who never made me doubt theirs.~", background: require('../../imagesCitations/img21.jpg') },
];

const Friend = () => {
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

export default Friend;
