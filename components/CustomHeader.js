import { Header } from 'react-native-elements';

export default function CustomHeader() {
    return(
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LA COLOMBA', style: { color: '#fff', fontSize: 24 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: 'green',
        }}
      />
    )
}