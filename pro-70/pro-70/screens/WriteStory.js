import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

export default class WriteStory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.scanButton2}>Story Hub</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Story Title" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Author" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox2} placeholder="Write your Story" />
        </View>
        <TouchableOpacity style={styles.scanButton}>
          {' '}
          <Text style={styles.buttonText}>Submit</Text>{' '}
        </TouchableOpacity>{' '}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  inputView: {
    flexDirection: 'row',
    margin: 10,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
  },
  inputBox2: {
    width: 200,
    height: 100,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
    textAlign: 'center',
  },
  scanButton: {
    backgroundColor: 'pink',
    width: 50,
    borderWidth: 1.5,
    textAlign: 'center',
    borderLeftWidth: 1.5,
  },
  scanButton2: {
    backgroundColor: 'pink',
    fontSize: 30,
    textAlign: 'center',
    width: 200,
    height: 100,
    borderWidth: 2,
    borderLeftWidth: 2,
    marginTop: 0.1,
    margin: 10,
  },
});
