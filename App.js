import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "white"}}>
        <Text style={{fontSize: 30}}>Konexio!</Text>
        <Text style={{textAlign: "center"}}>Konexio!</Text>
        <Text style={{fontWeight: "bold"}}>Konexio!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
});
