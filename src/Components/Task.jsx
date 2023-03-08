import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Task({ text }) {
  const [checked, setChecked] = useState(false)
  const [opacityTask, setOpacityTask] = useState(styles.container.opacity)
  const [textLine, setTextLine] = useState(styles.text.textDecorationLine)
  const [borderLine, setBorderLine] = useState(styles.container.borderStyle)
  const [showRemove, setShowRemove] = useState(styles.textRemover.display)
  function check() {
    setChecked(!checked)
    !checked?setTextLine('line-through'):setTextLine('solid')
    !checked?setOpacityTask(0.5):setOpacityTask(1)
    !checked?setBorderLine('dashed'):setBorderLine('solid')
    !checked?setShowRemove('flex'):setShowRemove('none')
  }
  return (
    <View style={{...styles.container, opacity: opacityTask, borderStyle: borderLine}}>
      
      <Text style={{...styles.text, textDecorationLine: textLine}}>{text}</Text>
      <TouchableOpacity onPress={check} style={styles.check}>
        <Text style={styles.checked}>{checked?'\u2713':''}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.remove}}>
        <Text style={{...styles.textRemover, display: showRemove}}>Remover</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    width: 360,
    height: 80,
    opacity: 1
  },
  text: {
    position: 'relative',
    top: 23,
    left: 20,
    textAlign: 'left',
    fontSize: 16,
    textDecorationLine: 'solid'
  },
  check: {
    borderColor: 'grey',
    borderWidth: 2,
    height: 30,
    width: 30,
    position: 'absolute',
    right: 20,
    top: 25
  },
  checked: {
    textAlign: 'center', 
    position: 'relative',
    top: -4,
    right: -1, 
    color: 'red'
  },
  remove: {
    height: 30,
    width: 65,
    position: 'absolute',
    right: 225,
    top: 30
  },
  textRemover:{
    color:'red',
    fontSize: 10,
    borderBottomWidth: 1,
    borderColor: 'red',
    display: 'none'
  }
});