import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';
import ListaDeFotos from '../componentes/ListaDeFotos';

const CriarAlbum = () => {
    return(
      
         <View style={styles.container}>
              <BarraSuperior/>
              <ListaDeFotos/>
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

export default CriarAlbum;