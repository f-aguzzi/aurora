import React, { useState } from 'react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pages } from './types/types';
import CustomHeader from "./components/CustomHeader";
import EntryMenu from './pages/EntryMenu';
import MainMenu from './pages/MainMenu';
import Hives from './pages/Hives';


export default function App() {

  const [currentPage, setCurrentPage] = useState(Pages.EntryMenu);

  if (currentPage === Pages.EntryMenu)
    return (
      <SafeAreaProvider>
        <CustomHeader />
        <EntryMenu setCurrentPage={setCurrentPage} />
      </SafeAreaProvider>
    );
  else if (currentPage === Pages.MainMenu) {
    return (
      <SafeAreaProvider>
        <CustomHeader />
        <MainMenu setCurrentPage={setCurrentPage}/>
      </SafeAreaProvider>
    );
  } else if (currentPage === Pages.Hives) {
    return (
      <SafeAreaProvider>
        <CustomHeader />
        <Hives />
      </SafeAreaProvider>
    )
  }
}


