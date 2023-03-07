import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Task({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#fff',
    width: 360,
    height: 80
  },
  text: {
    position: 'relative',
    top: 25,
    left: 20,
    textAlign: 'left'
  }
});