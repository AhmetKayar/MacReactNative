import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount(){        
      firebase.initializeApp({
        apiKey: "AIzaSyAGWBQGHKeLZXSYVdpTJoACQv5LVusWdkc",
        authDomain: "anonsapp.firebaseapp.com",
        databaseURL: "https://anonsapp.firebaseio.com",
        projectId: "anonsapp",
        storageBucket: "anonsapp.appspot.com",
        messagingSenderId: "984567640683"
      });
  }
  render() {
    return (
      <Provider store={createStore()}>     
        <View style={styles.container}>
            <Text>Hello Word</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
