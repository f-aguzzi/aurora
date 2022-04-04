import React, { useState } from 'react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from "./components/CustomHeader";
import EntryMenu from './components/EntryMenu';
import MainMenu from './components/MainMenu';


export default function App() {

  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <SafeAreaProvider>
        <CustomHeader />
        <EntryMenu setLoading={setLoading} />
      </SafeAreaProvider>
    );
  else
    return (
      <SafeAreaProvider>
        <CustomHeader />
        <MainMenu />
      </SafeAreaProvider>
    );
}


