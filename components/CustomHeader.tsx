import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Pages } from '../types/types';



export default function CustomHeader() {
    return(
        <Header
        leftComponent={{}}
        centerComponent={{ text: 'LA COLOMBA', style: { color: '#fff', fontSize: 24 } }}
        rightComponent={{}}
        containerStyle={{
        	backgroundColor: 'green',
        }}
      />
    )
}