import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

  return (
    <View style={styles.container}>
      {descricoes.map((item, index) => (
        <Task key={index} text={item.descricao} />
      ))}

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
});
