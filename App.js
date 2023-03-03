import React, { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from './src/Components/Task';

import PopUpAdd from './src/Components/PopUpAdd'

export default function App() {
  const [mostrarComponente, setMostrarComponente] = useState(false)
 
  function exibir() {
    setMostrarComponente(true)
    
  }

  return (
    <View style={styles.container}>
      {/* <Task /> */}
      <TouchableOpacity style={styles.button} onPress={exibir}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
      {mostrarComponente && <PopUpAdd />}
     
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
