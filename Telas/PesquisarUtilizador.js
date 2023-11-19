import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';
import BarraDePesquisa from '../componentes/BarraDePesquisa';
import ListaPessoas from '../componentes/ListaPessoas';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const PesquisarUtilizador = () => {
    return(
      
        <SafeAreaProvider>
              <BarraSuperior/>
              <BarraDePesquisa/>
              <ListaPessoas/>
              <BarraDeNavegacao/>   
       </SafeAreaProvider>
      
       
       )
};

const styles = StyleSheet.create({
   

    button:{
        height: 40,
        width: 200,
        borderColor:'green',
    }

});

export default PesquisarUtilizador;