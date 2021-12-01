import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image, Pressable, Alert } from 'react-native';

export default function App() {
  const createTwoButtonAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor: "white"}}>
        <Text style={{fontSize: 30}}>Konexio!</Text>
        <Text style={{textAlign: "center"}}>Konexio!</Text>
        <Text style={{fontWeight: "bold"}}>Konexio!</Text>
        <Image style={styles.img} source={{url:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}} />
        <Image style={styles.img} source={require('./assets/konexio-logo_1.png')} />
        <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
        <Pressable onPress={createTwoButtonAlert}>
          <Text>
            test
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
  img: {
    height: 100,
  }
});
