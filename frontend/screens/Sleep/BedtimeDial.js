import React, { useState } from 'react';
import { View, Text, PanResponder, Dimensions, StyleSheet, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native';
import Svg, { Circle, Path, Line, Text as SvgText } from 'react-native-svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const BedtimeDial = ({ navigation }) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleAcceuil = () => {
        navigation.navigate('Acceuil');
      }

    const [bedtime, setBedtime] = useState(new Date(0, 0, 0, 0, 0)); // 11:00 PM
    const [wakeTime, setWakeTime] = useState(new Date(0, 0, 0, 6, 0)); // 6:00 AM

    // Helper function to convert time to angle
    const timeToAngle = (time) => {
        const hours = time.getHours() + time.getMinutes() / 60;
        return (hours / 24) * 360;
    };

    // Pan responder for handling drag gestures
    const createPanResponder = (timeSetter) => PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            const { moveX, moveY } = gestureState;
            const angle = Math.atan2(moveY - (height / 2), moveX - (width / 2)) * (180 / Math.PI);
            const adjustedAngle = angle < 0 ? 360 + angle : angle;
            const hours = (adjustedAngle / 360) * 24;
            const minutes = (hours - Math.floor(hours)) * 60;
            timeSetter(new Date(0, 0, 0, Math.floor(hours), Math.floor(minutes)));
        }
    });

    const handleValidate = async () => {
        try {
            const durationData = getSleepDuration(bedtime, wakeTime);
    
            const response = await axios.post('http://192.168.11.220:3000/enregistrer-duree-sommeil', { duration: durationData });
    
            if (response.status === 200) {
                console.log('Durée de sommeil enregistrée avec succès sur le serveur.');
                // Affichez un message de succès à l'utilisateur ou effectuez d'autres actions nécessaires
                handleAcceuil();
            } else {
                console.error('Erreur lors de l\'enregistrement de la durée de sommeil sur le serveur.');
                // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la durée de sommeil au serveur :', error);
            // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        }
    };

    const bedtimePanResponder = createPanResponder(setBedtime);
    const wakeTimePanResponder = createPanResponder(setWakeTime);

    const bedtimeAngle = timeToAngle(bedtime);
    const wakeTimeAngle = timeToAngle(wakeTime);

    // SVG path for the bedtime and wake time arcs
    const arcPath = (startAngle, endAngle) => {
        const start = polarToCartesian(width / 2, height / 2, 140, startAngle);
        const end = polarToCartesian(width / 2, height / 2, 140, endAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${start.x} ${start.y} A 140 140 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const renderWatchGraduations = () => {
        const graduations = [];
        for (let i = 0; i < 24; i++) {
            const angle = (i / 24) * 2 * Math.PI;
            const startX = width / 2 + Math.cos(angle) * 130;
            const startY = height / 2 + Math.sin(angle) * 130;
            const endX = width / 2 + Math.cos(angle) * 140;
            const endY = height / 2 + Math.sin(angle) * 140;

            graduations.push(
                <Line key={i} x1={startX} y1={startY} x2={endX} y2={endY} stroke="black" strokeWidth={i % 6 === 0 ? 3 : 1} />
            );
        }
        // Adding hours
        const hoursText = ['6', '12', '18', '0']; // Corresponding to 6, 12, 18, 0 hours
        for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI) / 2;
            const textX = width / 2 + Math.cos(angle) * 120;
            const textY = height / 2 + Math.sin(angle) * 120;

            graduations.push(
                <SvgText key={`text${i}`} x={textX} y={textY} fontSize="16" textAnchor="middle" fill="white">
                    {hoursText[i]}
                </SvgText>
            );
        }
        return graduations;
    };

    return (
        <View>
            <ImageBackground source={require('../../images/111.jpg')} style={styles.back}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{formattedDate}</Text>
                </View>

                <GestureHandlerRootView style={styles.container}>
                    <Svg height={height} width={width}>
                        <Circle cx={width / 2} cy={height / 2} r="140" stroke="gray" strokeWidth="10" fill="none" />
                        {renderWatchGraduations()}
                        <Path d={arcPath(bedtimeAngle, wakeTimeAngle)} stroke="#008080" strokeWidth="10" fill="none" />
                        <Circle
                            cx={polarToCartesian(width / 2, height / 2, 140, bedtimeAngle).x}
                            cy={polarToCartesian(width / 2, height / 2, 140, bedtimeAngle).y}
                            r="10"
                            fill="#008080"
                            {...bedtimePanResponder.panHandlers}
                        />
                        <Circle
                            cx={polarToCartesian(width / 2, height / 2, 140, wakeTimeAngle).x}
                            cy={polarToCartesian(width / 2, height / 2, 140, wakeTimeAngle).y}
                            r="10"
                            fill="#E3FEF7"
                            {...wakeTimePanResponder.panHandlers}
                        />
                    </Svg>
                    <View style={styles.hoursContainer}>
                        <Image source={require('../../images/moon2.png')} style={styles.icons2} />
                        <Text style={styles.text1}>{`${bedtime.getHours()}:${bedtime.getMinutes() < 10 ? '0' : ''}${bedtime.getMinutes()}`}</Text>
                        <Image source={require('../../images/alarm2.png')} style={styles.icons3} />
                        <Text style={styles.text2}>{`${wakeTime.getHours()}:${wakeTime.getMinutes() < 10 ? '0' : ''}${wakeTime.getMinutes()}`}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textS}>{`Durée de sommeil: ${getSleepDuration(bedtime, wakeTime)}`}</Text>
                    </View>

                    <TouchableOpacity style={styles.button1} onPress={handleValidate}>
                        <Text style={styles.TextValider}>Valider</Text>
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </ImageBackground>
        </View>
    );
};

const getSleepDuration = (bedtime, wakeTime) => {
    let diff = wakeTime - bedtime;
    if (diff < 0) {
        diff += 24 * 60 * 60 * 1000; // Adjust for next day
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} heures et ${minutes} minutes`;
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -70,
        right: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        bottom: 270,
        alignItems: 'center',
    },
    text1: {
        top: -50,
        left: 180,
        fontSize: 24,
        marginVertical: 5,
        color: 'white',
    },
    text2: {
        fontSize: 24,
        marginVertical: 5,
        color: 'white',
        left: 115,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textS: {
        fontSize: 18,
        marginVertical: 9,
        color: 'white',
    },
    header: {
        top: 90,
        left: 150,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        right: 130,
    },
    hoursContainer: {
        position: 'absolute',
        bottom: 480,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        width: 450,
        height: 900,
    },
    icons2: {
        marginRight: 10,
        top: -50,
        width: 20,
        height: 20,
        left: 175,
    },
    icons3: {
        marginTop: 1,
        left: 100,
        width: 20,
        height: 20,
    },button1: {
        alignSelf: 'center', // Pour centrer horizontalement
        padding: 10,
        backgroundColor: "#008080",
        borderRadius: 10,
        marginBottom:180,
        width:200,
    },
    TextValider: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
      }
    
});

export default BedtimeDial;
