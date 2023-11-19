import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';
import ListaDeFotos from '../componentes/ListaDeFotos';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CriarAlbum = () => {
    return(
        <SafeAreaProvider>
        
              <BarraSuperior/>
              <ListaDeFotos/>
              <BarraDeNavegacao/>   
       
         </SafeAreaProvider>
      
       
       )
};



export default CriarAlbum;