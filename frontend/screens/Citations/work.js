import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~Stop avoiding what needs to be done. It's time to go!~", background: require('../../imagesCitations/img1.jpg') },
    { id: '2', text: "~Experience is a difficult teacher because it gives the test first, and the lesson later.~", background: require('../../imagesCitations/img2.jpg') },
    { id: '3', text: "~Working hard may not seem exciting, but the results will be incredible.~", background: require('../../imagesCitations/img3.jpg') },
    { id: '4', text: "~Keep working, especially on days when you don't feel like it.~", background: require('../../imagesCitations/img4.jpg') },
    { id: '5', text: "~It's not the hours you put in, it's what you put in.~", background: require('../../imagesCitations/img5.jpg') },
    { id: '6', text: "~Make this the year you learn to set boundaries, both in your personal life and at work.~", background: require('../../imagesCitations/img6.jpg') },
    { id: '7', text: "~Learn to work harder for yourself than for your job.~", background: require('../../imagesCitations/img7.jpg') },
];

const Work = () => {
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
        height: windowHeight * 1.04,
    },
    imageStyle: {
        resizeMode: 'cover', // Assurez-vous que l'image de fond couvre tout l'écran
    },
});

export default Work;
