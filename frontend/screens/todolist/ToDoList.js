import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import List from '../../components/List';
import AddListModal from './AddListModal';
import { TodoFire } from '../../config';

export class ToDoList extends Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true
  };

  componentDidMount() {
    this.firebaseInstance = new TodoFire((error, user) => {
      if (error) {
        alert("Uh oh, something went wrong");
        return;
      }

      this.setState({ user });

      // Récupérer les listes depuis Firebase
      this.firebaseInstance.getLists(lists => {
        this.setState({ lists, loading: false });
      });
    });
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = list => {
    return <List list={list} updateList={this.updateList} />;
  };

  addList = list => {
    this.setState(prevState => ({
      lists: [...prevState.lists, { ...list, id: prevState.lists.length + 1, todos: [] }]
    }));
  };

  updateList = list => {
    this.setState(prevState => ({
      lists: prevState.lists.map(item => (item.id === list.id ? list : item))
    }));
  };

  render() {
    const { addTodoVisible, lists, user, loading } = this.state;

    if (loading) {
      return <Text>Loading...</Text>; // Afficher un indicateur de chargement
    }

    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
        </Modal>

        <View>
          <Text>User: {user.uid}</Text>
        </View>

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

        <ScrollView style={styles.bb} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
          {lists.map((item, index) => (
            <View key={item.name} style={[styles.listItem, index === lists.length - 1 && styles.lastItemSpacing]}>
              {this.renderList(item)}
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













/* 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempData from './TempData';
import List from '../../components/List';

const ToDoList = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false);

  state={
    addTodoVisible:false
  };

  const toggleTodoModal = () => {
    setAddTodoVisible(!addTodoVisible);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={addTodoVisible} onRequestClose={() => this.toggleTodoModal()}>
        <View>
          <Text>I'm a modal!</Text>
        </View>
      </Modal>

      <View style={{ flexDirection: "row", marginTop: 80 }}>
        <View style={styles.divider} />
        <Text style={styles.title1}>To Do<Text style={styles.title2}>Lists</Text></Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.aa}>
        <TouchableOpacity style={styles.addList} onPress={() => toggleTodoModal()}>
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
  );
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

export default ToDoList; */