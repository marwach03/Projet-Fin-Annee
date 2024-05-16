import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~The road to success will not be easy. You must create the path that no one else takes.~", background: require('../../imagesCitations/img8.jpg') },
    { id: '2', text: "~You won't know what you're capable of if you don't try.~", background: require('../../imagesCitations/img9.jpg') },
    { id: '3', text: "~Success is when you find people who copy.~", background: require('../../imagesCitations/img10.jpg') },
    { id: '4', text: "~No dream is too big if you're willing to put in the work.~", background: require('../../imagesCitations/img11.jpg') },
    { id: '5', text: "~If you can't handle stress, you can't handle success.~", background: require('../../imagesCitations/img12.jpg') },
    { id: '6', text: "~Your level of discipline will determine your level of success.~", background: require('../../imagesCitations/img13.jpg') },
    { id: '7', text: "~Work hard in silence, let success make the noise.~", background: require('../../imagesCitations/img14.jpg') },
];

const Succes = () => {
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
        color: 'black',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    imageStyle: {
        resizeMode: 'cover', // Assurez-vous que l'image de fond couvre tout l'écran
    },
});

export default Succes;
