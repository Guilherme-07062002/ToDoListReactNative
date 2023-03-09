import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Task({ id, text, removeTask }) {
  const [checked, setChecked] = useState(false)
  const [opacityTask, setOpacityTask] = useState(styles.container.opacity)
  const [textLine, setTextLine] = useState(styles.text.textDecorationLine)
  const [borderLine, setBorderLine] = useState(styles.container.borderStyle)
  const [showRemove, setShowRemove] = useState(styles.textRemover.display)
  function check() {
    setChecked(!checked)
    !checked ? setTextLine('line-through') : setTextLine('none')
    !checked ? setOpacityTask(0.5) : setOpacityTask(1)
    !checked ? setBorderLine('dashed') : setBorderLine('solid')
    !checked ? setShowRemove('flex') : setShowRemove('none')
  }
  function delTask() {
    //console.log(id)
    removeTask(id)

  }
  return (
    <View style={{ ...styles.container, opacity: opacityTask, borderStyle: borderLine }}>

      <Text style={{ ...styles.text, textDecorationLine: textLine }}>{text}</Text>
      <TouchableOpacity onPress={check} style={styles.check}>
        <Text style={styles.checked}>{checked ? '\u2713' : ''}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={delTask} style={{ ...styles.remove }}>
        <Text style={{ ...styles.textRemover, display: showRemove }}>Remover</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'flex-start',
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    width: 360,
    height: 'auto',
    opacity: 1,
    paddingBottom: 45

  },
  text: {
    position: 'relative',
    marginTop: 30,
    left: 20,
    textAlign: 'left',
    fontSize: 16,
    textDecorationLine: 'none',
    width: 250,
    textAlign: 'justify'
  },
  check: {
    borderColor: 'grey',
    borderWidth: 2,
    height: 30,
    width: 30,
    position: 'absolute',
    right: 20,
    top: '50%'
  },
  checked: {
    textAlign: 'center',
    position: 'relative',
    top: -4,
    right: -1,
    color: 'red'
  },
  remove: {
    height: 20,
    width: 62,
    position: 'absolute',
    right: 10,
    bottom: 7
  },
  textRemover: {
    color: 'red',
    fontSize: 10,
    borderBottomWidth: 1,
    borderColor: 'red',
    display: 'none'
  }
});