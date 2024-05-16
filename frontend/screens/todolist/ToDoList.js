import { View, Text,StyleSheet,TouchableOpacity,ScrollView, Modal } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import tempData from './TempData'
import List from '../../components/List'

export default ToDoList = () => {
  state = {
    addTodoVisible: false
  };
  
  toggleTodoModal=()=>{
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

    return (
      <View style={styles.container}>        
        <Modal animationType="slide" visible={this.state.addTodoVisible}>
          <view>
              <text>I'm a modal!</text>
          </view>
          
        </Modal>
        
        <View style={{flexDirection:"row",marginTop: 80}}>
          <View style={styles.divider} />
            <Text style={styles.title1}>To Do<Text style={styles.title2}>Lists</Text></Text>
            <View style={styles.divider} />
        </View>
  
        <View style={styles.aa}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleTodoModal()}>
            <AntDesign name='plus' size={16} color={'#008080'} />
          </TouchableOpacity>
        </View>
  
        <ScrollView style={styles.bb} showsVerticalScrollIndicator={false}>
        {tempData.map((item, index) => (
          <View key={item.name} style={[styles.listItem, index === tempData.length - 1 && styles.lastItemSpacing]}>
            <List list={item} />
          </View>
        ))}
      </ScrollView>
  
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
    marginVertical:20,
  },
  addList: {
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: '#008080',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bb: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    width: 200, // Largeur de chaque élément de la liste
    marginRight: 26, // Marge entre chaque élément
    marginBottom: 16, // Marge inférieure entre les éléments
  },
  lastItemSpacing: {
    marginBottom: 30, // Espacement supplémentaire pour le dernier élément
  },
});

