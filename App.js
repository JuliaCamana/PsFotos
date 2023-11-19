import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Telas/Login';
import Cadastro from './Telas/Cadastro';
import Home from './Telas/Home';
import CriarAlbum from './Telas/CriarAlbum';
import PesquisarUtilizador from './Telas/PesquisarUtilizador';
export default function App() {
  return (
    <View style={styles.container}>
      <PesquisarUtilizador/>
    </View>
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
