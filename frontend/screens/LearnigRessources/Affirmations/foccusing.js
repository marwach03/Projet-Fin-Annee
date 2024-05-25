import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "I am perfecting my ability to demonstrate extreme concentration.", background: require('../../../imagesCitations/img51.jpg') },
    { id: '2', text: "I demonstrate discipline at work and resilience in my businesses.", background: require('../../../imagesCitations/img52.jpg') },
    { id: '3', text: "My determination to concentrate generates positive results", background: require('../../../imagesCitations/img53.jpg') },
    { id: '4', text: "I focus 100% on the task at hand.", background: require('../../../imagesCitations/img54.jpg') },
    { id: '5', text: "My concentration improves every time I accomplish a task.", background: require('../../../imagesCitations/img55.jpg') },
    { id: '6', text: "Each of my actions brings me closer to my goals.", background: require('../../../imagesCitations/img56.jpg') },
    { id: '7', text: "I focus on my vision, leaving distractions behind me.", background: require('../../../imagesCitations/img57.jpg') },
    { id: '8', text: "With each breath, I bring my attention back to the task at hand.", background: require('../../../imagesCitations/img58.jpg') },
];

const Focussing = () => {
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

export default Focussing;
