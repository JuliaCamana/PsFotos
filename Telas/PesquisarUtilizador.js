import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';
import BarraDePesquisa from '../componentes/BarraDePesquisa';
import ListaPessoas from '../componentes/ListaPessoas';

const PesquisarUtilizador = () => {
    return(
      
         <View style={styles.container}>
              <BarraSuperior/>
              <BarraDePesquisa/>
              <ListaPessoas/>
              <BarraDeNavegacao/>   
         </View>
      
       
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