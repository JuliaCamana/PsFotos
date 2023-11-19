import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Image } from 'react-native';

const HomeRoute = () => <Text>Home</Text>;
const GaleriaRoute = () => <Text>Galeria</Text>;
const PesquisarRoute = () => <Text>Perfis</Text>;

const BarraDeNavegacao = () => {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', imageSource: require('../assets/icons_casa.png') },
    { key: 'Galeria', title: 'Galeria', imageSource: require('../assets/galeria.png') },
    { key: 'Pesquisar', title: 'Pesquisar', imageSource: require('../assets/pesquisar_perfil.png') },
  ]);

  const renderIcon = ({ route, color }) => {
    return <Image source={route.imageSource} style={{ width: 24, height: 24, tintColor: color }} />;
  };

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute, // Changed 'home' to 'Home'
    Galeria: GaleriaRoute, // Changed 'galeria' to 'Galeria'
    Pesquisar: PesquisarRoute, // Changed 'pesquisar' to 'Pesquisar'
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: 'green' }} // Definindo a cor da barra como azul
   
    />
  );
};

export default BarraDeNavegacao;
