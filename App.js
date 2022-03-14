import React from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EntryMenu from './components/EntryMenu';
import MainMenu from './components/MainMenu';


export default function App() {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LA COLOMBA', style: { color: '#fff', fontSize: 24 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: 'green',
        }}
      />
     
      <MainMenu />
    </SafeAreaProvider>
  );
}


