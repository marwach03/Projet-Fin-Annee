import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import TempData from './TempData';  

export class AddListModal extends React.Component {
    backgroundColors = ["#5CD859", "#008080", "#24A6D9", "#8022D9", "#D159D8", "#D85963", "#D88559"];
    
    state = {
        name: "",
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const { name, color } = this.state;
        
        if (name.length > 0) {
            const newList = {
                id: Math.random(), // Générez un identifiant unique pour la nouvelle liste
                name,
                color, // Utiliser la couleur sélectionnée
                todos: []
            };
            
            TempData.push(newList); // Ajouter la nouvelle liste à TempData
            console.log("Updated TempData:", TempData);
    
            this.setState({ name: "" });
            this.props.addList(newList); // Appeler la fonction addList pour ajouter la nouvelle liste
            this.props.closeModal();
        } else {
            alert("List name cannot be empty!");
        }
    };
    

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })}
                />
            )
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }} onPress={this.props.closeModal}>
                    <AntDesign name='close' size={24} color={'#008080'} />
                </TouchableOpacity>

                <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
                    <Text style={styles.title}>Create Todo List</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="List Name?"
                        onChangeText={text => this.setState({ name: text })}
                    />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity style={[styles.create, { backgroundColor: this.state.color }]} onPress={this.createTodo}>
                        <Text style={styles.createText}>Create!</Text>
                    </TouchableOpacity>
                </View>
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
    title:{
        fontSize: 28,
        fontWeight: "800",
        color: 'black',
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor:'#008080',
        borderRadius: 6,
        height: 50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize: 18
    },
    aa:{
        color: 'White',
        fontWeight: "600"
    },
    create:{
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    colorSelect:{
        width: 30,
        height: 30,
        borderRadius: 4
    }
});

export default AddListModal