import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempData from './TempData';
import List from '../../components/List';
import AddListModal from './AddListModal';



export class ToDoList extends Component {
  state = {
    addTodoVisible: false,
    lists: tempData,
    selectedListId: null
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  };

  renderList = list => {
    return (
      <List 
        list={list} 
        updateList={this.updateList} 
      />
    );
  };

  addList = list => {
    const updatedLists = [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }];
    this.setState({ lists: updatedLists });
    this.updateTempData(updatedLists);
  };

  updateList = list => {
    const updatedLists = this.state.lists.map(item => {
      return item.id === list.id ? list : item;
    });
    this.setState({ lists: updatedLists });
    this.updateTempData(updatedLists);
  };

  // Fonction pour supprimer une liste
  deleteList = (listId) => {
    const updatedLists = this.state.lists.filter(list => list.id !== listId);
    this.setState({ lists: updatedLists });
    this.updateTempData(updatedLists);
  };

  // Mise à jour de tempData
  updateTempData(updatedLists) {
    // Supprimez toutes les listes actuelles de tempData
    tempData.splice(0, tempData.length);
    // Ajoutez les listes mises à jour à tempData
    updatedLists.forEach(list => {
      tempData.push(list);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
        </Modal>

        <View style={{ flexDirection: "row", marginTop: 80 }}>
          <View style={styles.divider} />
          <Text style={styles.title1}>To Do<Text style={styles.title2}>Lists</Text></Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.aa}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name='plus' size={16} color={'#008080'} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.bb} showsVerticalScrollIndicator={false}>
          {this.state.lists.map((item, index) => (
            <View key={item.id} style={[styles.listItem, index === this.state.lists.length - 1 && styles.lastItemSpacing]}>
              {this.renderList(item)}
              <TouchableOpacity onPress={() => this.deleteList(item.id)}>
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
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

export default ToDoList