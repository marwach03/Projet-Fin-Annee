import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import tempData from './tempData'
import List from '../../components/List'

export default ToDoList = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.divider} />
          <Text style={styles.title1}>To Do<Text style={styles.title2}>Lists</Text></Text>
          <View style={styles.divider} />
      </View>

      <View style={styles.aa}>
        <TouchableOpacity style={styles.addList}>
          <AntDesign name='plus' size={16} color={'#008080'} />
        </TouchableOpacity>
      </View>

      <View style={styles.bb}>
        <FlatList 
          data={tempData}
          keyExtractor={item => item.name} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          renderItem={({item}) => <List list={item} />}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  divider:{
    backgroundColor:'#008080',
    height:1,
    flex:1,
    alignSelf:"center",
  },
  title1:{
    fontSize:38,
    fontWeight:"800",
    color:'black',
    paddingHorizontal:64,
  },
  title2:{
    fontWeight:"300",
    color:'#008080',
  },
  aa:{
    marginVertical:48,
  },
  addList:{
    borderWidth:2,
    borderColor: '#008080',
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
  },
  bb:{
    height:275,
    paddingLeft:32,
  },
});

