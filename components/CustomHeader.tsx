import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { PageProps, Pages } from '../types/types';




export default function CustomHeader({ setCurrentPage }: PageProps) {
    return(
        <Header
        leftComponent={{}}
        centerComponent={{ text: 'LA COLOMBA', style: { color: '#fff', fontSize: 24 } }}
        rightComponent={
          <TouchableOpacity onPress={() => {setCurrentPage(Pages.MainMenu)}}>
            <Text style={{margin: 4, fontSize: 16}}>🏠</Text>
          </TouchableOpacity>
          
          }
        containerStyle={{
        	backgroundColor: 'green',
        }}
      />
    )
}