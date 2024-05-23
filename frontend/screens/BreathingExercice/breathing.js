import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const circleWidth = width/1.7;

const Breathing = () => {
    const move = useRef(new Animated.Value(0)).current;
    const inhaleTextOpacity = useRef(new Animated.Value(1)).current; // Opacity for inhale text
    const exhaleTextOpacity = useRef(new Animated.Value(0)).current; // Opacity for exhale text
    const holdBreathTextOpacity = useRef(new Animated.Value(0)).current; // Opacity for hold breath text

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                // Inhale phase
                Animated.timing(inhaleTextOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(move, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(inhaleTextOpacity, {
                    toValue: 0,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                // Pause phase - Hold your breath
                Animated.timing(holdBreathTextOpacity, {
                    toValue: 1,
                    duration: 2000, // Maintenez la durée de l'animation pendant toute la pause
                    useNativeDriver: true,
                }),
                Animated.timing(holdBreathTextOpacity, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                // Exhale phase
                Animated.timing(exhaleTextOpacity, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(move, {
                    toValue: 0,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(exhaleTextOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                // Pause phase - Hold your breath again
                Animated.timing(holdBreathTextOpacity, {
                    toValue: 1,
                    duration: 3000, // Maintenez la durée de l'animation pendant toute la pause
                    useNativeDriver: true,
                }),
                Animated.timing(holdBreathTextOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const translate = move.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circleWidth / 6],
    });

    return (
        <View style={styles.container}>
            {/* Inhale Text */}
            <Animated.View style={{
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: inhaleTextOpacity,
            }}>
                <Text style={styles.text}>
                    Inhale
                </Text>
            </Animated.View>

            {/* Hold Your Breath Text */}
            <Animated.View style={{
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: holdBreathTextOpacity,
            }}>
                <Text style={styles.text}>
                    Hold your breath
                </Text>
            </Animated.View>

            {/* Exhale Text */}
            <Animated.View style={{
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: exhaleTextOpacity,
            }}>
                <Text style={styles.text}>
                    Exhale
                </Text>
            </Animated.View>

            {/* Circles */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item => {
                const rotation = move.interpolate({
                    inputRange: [0, 1],
                    outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`]
                });
                return (
                    <Animated.View
                        key={item}
                        style={{
                            opacity: 0.1,
                            backgroundColor: '#005959',
                            width: circleWidth, 
                            height: circleWidth,
                            borderRadius: circleWidth / 2,
                            ...StyleSheet.absoluteFill,
                            transform: [{
                                rotateZ: rotation,
                            },
                            { translateX: translate },
                            { translateY: translate },
                            ],
                        }}>
                    </Animated.View>
                )
            }))}
            <View style={styles.container1}>
                <View style={styles.rowItem}>
                    <Image
                        source={require('../../icones/inhaler.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.instructionText}>
                        Inhale {'\n'}{'\n'}(4s)
                    </Text> 
                </View>
                <View style={styles.rowItem}>
                    <Image
                        source={require('../../icones/levres.png')}
                        style={styles.icon}
                    />   
                    <Text style={styles.instructionText}>
                        Hold {'\n'}your {'\n'}breath {'\n'}{'\n'}(2s)
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Image
                        source={require('../../icones/exhaler.png')}
                        style={styles.icon}
                    />   
                    <Text style={styles.instructionText}>
                        Exhale {'\n'}{'\n'}(4s)
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Image
                        source={require('../../icones/levres.png')}
                        style={styles.icon}
                    /> 
                    <Text style={styles.instructionText}>
                        Hold {'\n'}your {'\n'}breath {'\n'}{'\n'}(2s)
                    </Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: width / 5,
        top: height / 5,
    },
    text: {
        fontSize: 25,
        fontWeight: "600",
        marginTop:-500,
        marginRight:150,
    },
    container1: {
        borderWidth: 1,
        borderRadius:9,
        flexDirection: 'row', // Pour aligner les éléments horizontalement
        justifyContent: 'space-evenly', // Pour répartir les éléments sur la ligne
        alignItems: 'center', // Pour aligner les éléments verticalement
        paddingVertical: 10,
        width: width,
        marginRight: 140,
        width: 320,
        padding: 10,
        marginTop:100,
    },
    rowItem: {
        flexDirection: 'column', // Pour aligner les éléments verticalement
        alignItems: 'center', // Pour aligner les éléments horizontalement
    },
    instructionText: {
        fontSize: 13,
        fontWeight: '400',
        paddingHorizontal: 8,
        textAlign:'center',
        marginRight:8,
    },
    icon: {
        width: 30, // Modifier en fonction de la taille de votre icône
        height: 30, // Modifier en fonction de la taille de votre icône
        marginBottom: 8, // Espacement entre l'image et le texte
        marginRight:12,
    },    
});

export default Breathing;
