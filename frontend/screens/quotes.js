import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground } from 'react-native';

// Tableau de données de citations avec des chemins d'accès aux images de fond correspondantes
const quotesData = [
    { id: '1', text: "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets.", background: require('../images/backround.jpeg') },
    { id: '2', text: "Le plus grand risque est de ne prendre aucun risque.", background: require('../images/butterfly.jpg') },
    { id: '3', text: "Il n'y a qu'une seule façon d'éviter les critiques : ne rien faire, ne rien dire et n'être rien.", background: require('../images/backround.jpeg') },
    { id: '4', text: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre.", background: require('../images/backround.jpeg') },
    // Ajoutez plus de citations ici
];

const Quotes = () => {
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
        fontSize: 24,
        fontStyle: 'italic',
        color: 'white',
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

export default Quotes;
