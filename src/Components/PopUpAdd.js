import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Task({ mostrarComponente, setMostrarComponente, addTask }) {
  const [text, setText] = useState('');

  const closeWindow = () => {
    setMostrarComponente(false)
  }

  const handleTextChange = (newText) => {
    setText(newText);
  };
  const addComponente = () => {
    if (text != '') {
      addTask(`• ${text}`)
      closeWindow()
    }
  }

  return (
    <View style={styles.container} visible={mostrarComponente}>
      <Text style={styles.text}>Adicionar Tarefa:</Text>
      <TouchableOpacity onPress={closeWindow} style={styles.exit}>
        <Text style={{ color: 'white', textAlign: 'center' }}>X</Text>
      </TouchableOpacity>
      <TextInput onChangeText={handleTextChange} value={text} style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button} onPress={addComponente}>
        <Text style={{ color: 'white' }} >Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 2,
    height: 350,
    width: '80%',
    position: 'absolute',
    top: '30%',
    backgroundColor: '#C9BDBD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  input: {
    backgroundColor: '#E0D7D7',
    opacity: 0.5,
    width: 300,
    position: 'relative',
    top: 30,
    height: 180,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  text: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#45A73C',
    padding: 8,
    paddingHorizontal: 25,
    borderRadius: 7,
    position: 'relative',
    top: 37,
    right: -95,
  },
  exit: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    width: 40,
    backgroundColor: 'red',
    position: 'relative',
    right: -120,
    top: -17
  }
});