// TimerCircle.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const TimerCircle = ({ totalTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setPercentage((newTime / totalTime) * 100);
          if (newTime <= 0) {
            clearInterval(timerId);
            onComplete(); // Appel de la fonction onComplete
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft, totalTime, onComplete]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height="150" width="150" viewBox="0 0 200 200">
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#ccc"
          strokeWidth="10"
          fill="none"
        />
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#FAA2AA"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
      </Svg>
      <Text style={styles.timerText}>{timeLeft}</Text>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  timerText: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default TimerCircle;
