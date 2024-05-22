import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "~Being a mother is both wonderful and difficult.~", background: require('../../imagesCitations/img22.jpg') },
    { id: '2', text: "~I believe that choosing to be a mother is choosing to become a great spiritual mentor.~", background: require('../../imagesCitations/img23.jpg') },
    { id: '3', text: "~To the world you are a mother, but to your family, you are the world.~", background: require('../../imagesCitations/img24.jpg') },
    { id: '4', text: "~The days are long, but the years are short. Enjoy every moment and enjoy being a mother.~", background: require('../../imagesCitations/img25.jpg') },
    { id: '5', text: "~Faced with challenges, remember that you are an incredible mother, do your best, give the best of yourself and guide your children. Your love and devotion are priceless.~", background: require('../../imagesCitations/img26.jpg') },
    { id: '6', text: "~Being a perfect mother is impossible, but there are a thousand ways to be a good mother.~", background: require('../../imagesCitations/img27.jpg') },
    { id: '7', text: "~By giving birth to our babies, we see new opportunities born within us.~", background: require('../../imagesCitations/img28.jpg') },
];

const Mothers = () => {
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

export default Mothers;
