import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const MoodChart = () => {
  const [moodData, setMoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoodData();
  }, []);

  const fetchMoodData = async () => {
    try {
      const response = await fetch('http://192.168.11.146:3000/mood-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }
      setMoodData(data);
    } catch (error) {
      console.error('Error fetching mood data:', error);
      Alert.alert('Error', 'Failed to load mood data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Previous moods</Text>
      <View style={styles.chartContainer}>
        {moodData.map((entry, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dateText}>{new Date(entry.date).toLocaleDateString()}</Text>
            <Text style={styles.moodText}>{entry.mood}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 50,
    fontWeight: 'bold',
    color: '#008080',
    borderTopWidth: 2,
    width: 320,
    textAlign: 'center',
  },
  chartContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#28a693'
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#022420',
    marginTop: 3,
  },
  moodText: {
    fontSize: 24,
    marginTop: -1,
  },
});

export default MoodChart;
