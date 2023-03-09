import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from './src/Components/Task';

import PopUpAdd from './src/Components/PopUpAdd'

export default function App() {
  const [mostrarComponente, setMostrarComponente] = useState(false)
  const [descricoes, setDescricoes] = useState([])

  function exibir() {
    setMostrarComponente(true)
  }

  function addTask(desc) {
    if (desc != '') {
      setDescricoes([...descricoes, { descricao: desc }])
    }
  }
  function removeTask(index) {
    const newArray = descricoes.filter((item, i) => i !== index)
    setDescricoes(newArray)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textIntro}>{descricoes.length == 0 ? 'Clique em "+" para adicionar uma tarefa.' : ''}</Text>
      <ScrollView style={styles.scroll}>
        {descricoes.map((item, index) => (
          <Task id={index} text={item.descricao} removeTask={removeTask} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={exibir}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
      {mostrarComponente && <PopUpAdd setMostrarComponente={setMostrarComponente} addTask={addTask} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'red',
    padding: 4,
    paddingHorizontal: 19,
    borderRadius: 20,
    position: 'absolute',
    bottom: 30,
    left: 30
  },
  icon: {
    color: 'white',
    fontSize: 30
  },
  scroll: {
    width: 370,
    marginTop: 70,
    marginBottom: 60
  },
  textIntro: {
    position: 'absolute',
    top: '40%',
    width: 300,
    textAlign: 'center',
    color: 'grey'
  }
});
