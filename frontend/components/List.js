import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default List = ({list}) => {

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
        <View style={[styles.listContainer, {backgroundColor: list.Color}]} >
            <Text style={styles.listTitle} numberOfLines={1}> {list.name} </Text>

            <View>
                <View style={styles.cc}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>

                <View style={styles.cc}>
                    <Text style={styles.count}>{remainingCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        alignItems:"center",
        width:200,
    },
    listTitle:{
        fontSize:24,
        fontWeight:"700",
        color:'white',
        marginBottom:18,
    },
    cc:{
        alignItems:"center",
    },
    count:{
        fontSize: 48,
        fontWeight:"200",
        color:'white',
    },
    subtitle:{
        fontSize:12,
        fontWeight:"700",
        color:'white',
    }
})
