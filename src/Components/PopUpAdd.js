import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Task() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adicionar Tarefa:</Text>
      <TouchableOpacity style={styles.exit}>
      <Text style={{ color: 'white', textAlign:'center' }}>X</Text>
      </TouchableOpacity>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão pressionado')}>
        <Text style={{ color: 'white' }}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: 30,
    width: 30,
    backgroundColor: 'red',
    position: 'relative',
    right: -135,
    top: -17
  }
});