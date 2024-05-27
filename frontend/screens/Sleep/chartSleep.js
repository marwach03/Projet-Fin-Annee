import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Text as SvgText } from 'react-native-svg';

const SleepDurationChart = () => {
    const [sleepData, setSleepData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSleepDurations();
    }, []);

    const fetchSleepDurations = async () => {
        try {
            const response = await fetch('http://192.168.11.220:3000/sleep-durations');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error('Data is not an array');
            }
            setSleepData(data);
        } catch (error) {
            console.error('Error fetching sleep durations:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDataForChart = (data) => {
        const labels = data.map(entry => entry.date.split('T')[0]); // Extraire seulement la date
        const durations = data.map(entry => entry.duration.split(' ')[0]);
        return { labels, durations };
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const chartData = formatDataForChart(sleepData);

    const rotateLabels = (labels) => {
        return labels.map((label, index) => (
            <SvgText key={index} x={10} y={(index * 20) + 10} fill="#ffffff" transform="rotate(90 10 10)">{label}</SvgText>
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sleep Duration Chart</Text>
            <LineChart
                data={{
                    labels: chartData.labels,
                    datasets: [
                        {
                            data: chartData.durations,
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={420}
                yAxisLabel=""
                yAxisSuffix="h"
                chartConfig={{
                    backgroundColor: 'black',
                    backgroundGradientFrom: '#008080',
                    backgroundGradientTo: '#58BBA0',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '3.5',
                        stroke: '#387866',
                    },
                }}
                bezier
                style={styles.chart}
            >
                <Svg>
                    {rotateLabels(chartData.labels)}
                </Svg>
            </LineChart>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        borderRadius: 16,
        padding: 16,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: -76,
    },
    chart: {
        marginVertical: 90,
        borderRadius: 16,
        marginRight:5,
        marginBottom: -96,
    },
});

export default SleepDurationChart;
