import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~The universe will always give you another chance to start again, if you are brave enough to take it.~", background: require('../../imagesCitations/img36.jpg') },
    { id: '2', text: "~Here we go. It's time to make the magic happen.~", background: require('../../imagesCitations/img37.jpg') },
    { id: '3', text: "~Transformation is painful and messy at first, hang in there because it is also rewarding and empowering.~", background: require('../../imagesCitations/img38.jpg') },
    { id: '4', text: "~You can choose your friends but you can't choose your family.~", background: require('../../imagesCitations/img39.jpg') },
    { id: '5', text: "~One day, you will look back on this period of your life and you will be proud of yourself for knowing how to never give up.~", background: require('../../imagesCitations/img40.jpg') },
    { id: '6', text: "~Choose growth over comfort.~", background: require('../../imagesCitations/img41.jpg') },
    { id: '7', text: "~You are ready for a new phase of your life.~", background: require('../../imagesCitations/img42.jpg') },
];

const Departs = () => {
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

const styles = StyleSheet.create({
    quoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    quoteText: {
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 420,
        height: 900,
    },
    imageStyle: {
        resizeMode: 'cover', // Assurez-vous que l'image de fond couvre tout l'écran
    },
});

export default Departs;
