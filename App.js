import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from './src/Components/Task';

import PopUpAdd from './src/Components/PopUpAdd'

import Api from './src/api';

const api = new Api();

export default function App() {
  const [mostrarComponente, setMostrarComponente] = useState(false)
  const [descricoes, setDescricoes] = useState([])
  const [idRegistro, setidRegistro] = useState(0)

  async function inicializar(){
    const tasks = await api.read();
    setDescricoes(tasks)
    if (tasks.length > 0) {
      setidRegistro(tasks[tasks.length - 1].id + 1);
    }
  }

  function exibir() {
    setMostrarComponente(true)
  }

  async function addTask(desc) {
    if (desc !== '') {
      try {
        const newTask = { descricao: desc, id: idRegistro };
        setidRegistro( idRegistro + 1)
        await api.save(newTask);
        setDescricoes([...descricoes, newTask]);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function removeTask(index) {
    try {
      //console.log(descricoes[index].id)
      await api.remove(descricoes[index].id)
      const newArray = descricoes.filter((item, i) => i !== index)
      setDescricoes(newArray)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    inicializar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textIntro}>{descricoes.length == 0 ? 'Clique em "+" para adicionar uma tarefa.' : ''}</Text>
      <ScrollView style={styles.scroll}>
        {descricoes.map((item, index) => (
          <Task key={index} id={index} text={`• ${item.descricao}`} removeTask={removeTask} />
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
