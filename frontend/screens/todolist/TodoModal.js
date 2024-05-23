import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, 
    TextInput, Keyboard  } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons   } from '@expo/vector-icons';

export default class TodoModal extends React.Component {
state = {
    newTodo: ""
};

toggleTodoCompleted = index =>{
    let list = this.props.list
    list.todos[index].completed = !list.todos[index].completed

    this.props.updateList(list);
};

addTodo = () => {
    let list = this.props.list
    list.todos.push({title: this.state.newTodo, completed: false})

    this.props.updateList(list)
    this.setState({newTodo: "" })

    Keyboard.dismiss();
}

renderTodo = (todo,index) => {
    return (
        <View style={styles.todoContainer}>
            <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                <MaterialCommunityIcons 
                    name={todo.completed ? 'checkbox-marked' : 'checkbox-marked-outline'}
                    size={24} 
                    color={'gray'} 
                    style={{width:32}}
                />

                <Text style={[
                    styles.todo,
                    {
                        textDecorationLine: todo.completed ? 'line-through' : 'none',
                        color : todo.completed ? 'gray' : '#000'
                    }]}
                >
                    
                    {todo.title}
               
                </Text>
            </TouchableOpacity>
        </View>
    )
}

render() {
    const list = this.props.list
    const taskCount = list.todos.length
    const completedCount = list.todos.filter(todo => todo.completed).length
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.aa} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={'#008080'} />
                </TouchableOpacity>

                <View style={[styles.section, styles.header, { right:30, borderBottomColor: list.color }]}>
                    <View>
                        <Text style={styles.title}>{list.name}</Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                        </Text>
                    </View>
                </View>

                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        data={list.todos}
                        renderItem={({ item, index }) => this.renderTodo(item, index)}
                        keyExtractor={item => (item.id ? item.id.toString() : item.title)} 
                        contentContainerStyle = {{paddingHorizontal:32, paddingVertical:64}}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <View style={[styles.section,styles.footer]}>
                    <TextInput 
                        style={[styles.input,{borderColor:list.color}]} 
                        onChangeText={text => this.setState({newTodo: text})} 
                        value={this.state.newTodo}
                    />

                    <TouchableOpacity style={[styles.addTodo, {backgroundColor: list.color}]} onPress={() => this.addTodo()}>
                        <AntDesign name="plus" size={16} color={'#000'}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
},
aa:{
    position:'absolute',
    top:55,
    right:20,
    zIndex:10,
},
section:{
    flex:1,
    alignSelf:"stretch"
},
header:{
    justifyContent:'flex-end',
    marginLeft:60,
    borderBottomWidth:3
},
title:{
    fontSize:30,
    fontWeight:"800",
    color: '#000'
},
taskCount:{
    marginTop:2,
    marginBottom:16,
    color: 'gray',
    fontWeight:"600"
},
footer:{
    paddingHorizontal:32,
    flexDirection:"row",
    alignItems:"center"
},
input:{
    flex:1,
    height:48,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:6,
    marginRight:8,
    paddingHorizontal:8
},
addTodo:{
    borderRadius:4,
    padding:16,
    alignItems:"center",
    justifyContent:"center"
},
todoContainer:{
    paddingVertical:16,
    flexDirection:"row",
    alignItems:"center"
},
todo:{
    color:'#000',
    fontWeight:"700",
    fontSize: 16,
    right:-50,
    top:-25
}
});