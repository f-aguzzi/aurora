import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LA COLOMBA', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: 'green',
        }}
      />
    <View style={styles.container}>
      <Text style={{fontSize: 'large'}}>Benvenuto!</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Inserisci il codice..."
      />
      <TouchableOpacity>
        <Text>Entra...</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
