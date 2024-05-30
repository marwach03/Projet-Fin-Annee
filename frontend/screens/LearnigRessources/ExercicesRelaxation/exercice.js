// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Video } from 'expo-av';
import TimerCircle from './minuteur'; // Assurez-vous que le chemin est correct

const Exercice = () => {
  const [stage, setStage] = useState(0);

  const handleVideoEnd = () => {
    console.log("Video finished, moving to next stage");
    setStage((prevStage) => prevStage + 1);
  };

  const handleTimerComplete = () => {
    console.log("Timer finished, moving to next stage");
    setStage((prevStage) => prevStage + 1);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.texte2}>Relief from neck and shoulder pain</Text>
        {stage === 0 && (
          <>
            <Video
              source={require('../../../assets/E1.mp4')} // Remplacez par le chemin correct de votre vidéo
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) handleVideoEnd();
              }}
              style={styles.video}
            />
            <View style={styles.timerContainer}>
              <TimerCircle
                totalTime={30}
                onComplete={handleTimerComplete}
              />
              <Text style={styles.timerText}>Remaining time</Text>
            </View>
          </>
        )}
        {stage === 1 && 
            <>
            <TimerCircle 
                totalTime={10} 
                onComplete={() => {
                    console.log("Timer completed inside TimerCircle");
                    handleTimerComplete();
                }} 
            />
            <View>
                <Text style={styles.Repos}>Rest</Text>
            </View>
            </>}
        {stage === 2 && (
            <>
                <Video
                source={require('../../../assets/E2.mp4')} // Remplacez par le chemin correct de votre vidéo
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) handleVideoEnd();
                }}
                style={styles.video}
                />
                <View style={styles.timerContainer}>
                <TimerCircle
                    totalTime={30}
                    onComplete={handleTimerComplete}
                />
                <Text style={styles.timerText}>Remaining time</Text>
                </View>
            </>
            )}
        {stage === 3 && 
            <>
            <TimerCircle 
                totalTime={10} 
                onComplete={() => {
                    console.log("Timer completed inside TimerCircle");
                    handleTimerComplete();
                }} 
            />
            <View>
                <Text style={styles.Repos}>Rest</Text>
            </View>
            </>}
        {stage === 4 && (
            <>
                <Video
                source={require('../../../assets/E3.mp4')} // Remplacez par le chemin correct de votre vidéo
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) handleVideoEnd();
                }}
                style={styles.video}
                />
                <View style={styles.timerContainer}>
                <TimerCircle
                    totalTime={30}
                    onComplete={handleTimerComplete}
                />
                <Text style={styles.timerText}>Remaining time</Text>
                </View>
            </>
            )}
        {stage === 5 && 
            <>
            <TimerCircle 
            totalTime={10} 
            onComplete={() => {
                console.log("Timer completed inside TimerCircle");
                handleTimerComplete();
            }} 
            />
            <View>
                <Text style={styles.Repos}>Rest</Text>
            </View>
            </>}
        {stage === 6 && (
            <>
                <Video
                source={require('../../../assets/E4.mp4')} // Remplacez par le chemin correct de votre vidéo
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) handleVideoEnd();
                }}
                style={styles.video}
                />
                <View style={styles.timerContainer}>
                <TimerCircle
                    totalTime={30}
                    onComplete={handleTimerComplete}
                />
                <Text style={styles.timerText}>Remaining time</Text>
                </View>
            </>
            )}
        {stage === 7 && 
            <>
            <TimerCircle 
            totalTime={10} 
            onComplete={() => {
                console.log("Timer completed inside TimerCircle");
                handleTimerComplete();
            }} 
            />
            <View>
                <Text style={styles.Repos}>Rest</Text>
            </View>
            </>}
        {stage === 8 && (
            <>
                <Video
                source={require('../../../assets/E5.mp4')} // Remplacez par le chemin correct de votre vidéo
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) handleVideoEnd();
                }}
                style={styles.video}
                />
                <View style={styles.timerContainer}>
                <TimerCircle
                    totalTime={30}
                    onComplete={handleTimerComplete}
                />
                <Text style={styles.timerText}>Remaining time</Text>
                </View>
            </>
            )}
            {stage === 9 && (
                <View style={styles.validationContainer}>
                    <View style={styles.circle}>
                    <Text style={styles.check}>✓</Text>
                    </View>
                    <Text style={styles.validationText}>Exercice validé</Text>
                </View>
                )}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: Dimensions.get('window').width,
    height: 350,
    marginBottom: windowWidth * 0.1,
  },
  texte2:{
    marginTop: windowWidth * 0.1,
    fontSize: windowHeight * 0.03,
    marginLeft: windowHeight * 0.02,
    marginBottom: windowHeight * 0.05,
    fontWeight: 'bold',
    color : "#000",
  },
  validationContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#FAA2AA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  check: {
    fontSize: 50,
    color: 'white',
  },
  validationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Repos:{
    fontWeight: 'bold',
    fontSize: windowWidth * 0.08,
    marginTop: windowWidth * 0.1,
    marginLeft: windowHeight * -0.01,
  },
  timerText:{
    fontWeight: 'bold',
    fontSize: windowWidth * 0.05,
    marginTop: windowWidth * 0.07,
    marginLeft: windowHeight * 0.035,
  },
  timerContainer:{
    marginTop:windowWidth * -0.06,
  }
});

export default Exercice;
